import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Flex, VStack, Text, Image, HStack } from 'native-base';
import { RootTabScreenProps } from '../types';
import ButtonWithFocus from '../components/ButtonWithFocus';
import UsernameWithRank from '../components/UsernameWithRank';
import styles from '../css/DashboardScreenStyles';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getDepartmentsRanking, getPersonalRanking } from '../stores/slices/leaderboardSlice';
import TopRanking from '../components/TopRanking';

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
          <ButtonWithFocus title="Personal" style={styles.progressButton} onClickAction={onChangeRankingOption} />
          <ButtonWithFocus title="Department" style={styles.progressButton} onClickAction={onChangeRankingOption} />
        </Flex>

        { personalRanking.usersRanking.length>0?
        <>
          { buttonOption=='Personal'?
            <>
              <TopRanking rankingList={personalRanking.usersRanking} />
              { personalRanking.usersRanking.length>3?
                <Box paddingY={5}>
                  { personalRanking.usersRanking.map((userRank) => (
                      <UsernameWithRank textcolor="black" key={userRank.id} rank={pos++} username={userRank.name} points={userRank.monthPoints} />
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
                  { departmentsRank.departmentsRanking.map((dptmRank) => (
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
