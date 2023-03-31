import { Box, Flex, Image, Text } from "native-base";
import React from "react";
import { COLORS } from "../common/constants";

const profileImage = require('../assets/images/profileImage.png');

const UserHeader = ({userSection}) => {
    return (
        <Flex direction='row'>
            <Box>
                <Image source={profileImage} alt="User Profile pic" size={70} borderRadius={100} marginRight={3} />
            </Box>
            <Box>
                <Text color={COLORS.darkOrange} fontFamily="albert-medium" fontSize={12}>Rank #{userSection.rankingPos}</Text>
                <Text  fontFamily="albert-semibold" fontSize={22}>{userSection.name}</Text>
                <Text fontFamily="albert-medium" fontSize={12}>{userSection.organization} - {userSection.department}</Text>
            </Box>
        </Flex> 
    );
}

export default UserHeader;