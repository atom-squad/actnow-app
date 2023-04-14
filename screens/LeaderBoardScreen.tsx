import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Flex, VStack, Text, Image, HStack } from 'native-base';
import { RootTabScreenProps } from '../types';
import ButtonWithFocus from '../components/ButtonWithFocus';
import UsernameWithRank from '../components/UsernameWithRank';
import styles from '../css/DashboardScreenStyles';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getDepartmentsRanking, getPersonalRanking } from '../stores/slices/leaderboardSlice';
import TopRanking from '../components/TopRanking';
import { COLORS } from '../common/constants';

export default function LeaderboardScreen({ navigation }: RootTabScreenProps<'Leaderboard'>) {

  let {personalRanking, departmentsRank} = useAppSelector((state) => state.leaderboard);
  let dispatch = useAppDispatch();
  let [buttonOption, setButtonOption] = useState('Personal');

  let pos = 4;

  useEffect(() => {
    dispatch(getPersonalRanking());
    dispatch(getDepartmentsRanking());
  }, [dispatch]);

  const onChangeRankingOption = (option) => {
    setButtonOption(option);
  }

  return (
    <ScrollView padding={4}>

       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} onClickAction={onChangeRankingOption} selected={buttonOption==='Personal'} />
          <ButtonWithFocus title="Department" style={styles.progressButton} onClickAction={onChangeRankingOption} selected={buttonOption!=='Personal'} />
        </Flex>

        { personalRanking.usersRanking.length>0?
        <>
          { buttonOption=='Personal'?
            <>
              <TopRanking rankingList={personalRanking.usersRanking} />
              { personalRanking.usersRanking.length>3?
                <Box paddingY={5}>
                  { personalRanking.usersRanking.slice(3).map((userRank) => (
                    personalRanking.userPosition == pos? 
                      <UsernameWithRank textcolor={COLORS.darkOrange} key={userRank.id} rank={pos++} username={userRank.name} points={userRank.monthPoints} />
                      :
                      <UsernameWithRank textcolor={COLORS.black} key={userRank.id} rank={pos++} username={userRank.name} points={userRank.monthPoints} />
                  ))
                  }
                </Box>
                :
                <Box paddingY={5}>No more users</Box>
              }
            </>
          : 
          <>
            <TopRanking rankingList={departmentsRank.departmentsRanking} />
            { departmentsRank.departmentsRanking.length>3?
                <Box paddingY={5}>
                  { departmentsRank.departmentsRanking.slice(3).map((dptmRank) => (
                      <UsernameWithRank textcolor="black" key={dptmRank._id} rank={pos++} username={dptmRank.name} points={dptmRank.totalPoints} />
                  ))
                  }
                </Box>
                :
                <Box paddingY={5}>No more departments</Box>
              }
          </>
          }
        </>
      :
      <Box paddingY={5}>Sorry, no data to show</Box>
      }

    </ScrollView>
  );
}
