import { HStack, Box, Badge } from "@chakra-ui/react";

import useDrivers, { Driver, getDailyTraces } from "../hooks/useDrivers";

interface Props {
    driverId: number;
}

const DailyTraces = ({ driverId }: Props) => {

    var dailyTraces = getDailyTraces(driverId);

    return (
        <HStack>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-01') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-02') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-03') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-04') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-05') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-06') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
            <Badge fontSize='14px' colorScheme={dailyTraces.indexOf('2021-02-07') > 0 ? 'green' : ''} paddingX={2} borderRadius='4px' >*</Badge>
        </HStack>
    );
};

export default DailyTraces;