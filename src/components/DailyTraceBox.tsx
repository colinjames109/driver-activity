import { HStack, Box, Badge, Text, Flex, VStack } from "@chakra-ui/react";

interface Props {
    day: string;
    colorScheme: string;
}

const DailyTraceBox = ({ colorScheme, day }:Props) => {
    return (
        <VStack justifyItems='center'>
            <Text fontSize='10px'>{ day}</Text>
            <Badge variant='solid' fontSize='14px' colorScheme={colorScheme} paddingX={2} borderRadius='4px' >&nbsp;</Badge>
        </VStack>
    );
};

export default DailyTraceBox;