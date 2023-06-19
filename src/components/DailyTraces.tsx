import { HStack, Box, Badge, Text, Flex, VStack } from "@chakra-ui/react";

import useDrivers, { Driver, getDailyTraces } from "../hooks/useDrivers";
import DailyTraceBox from "./DailyTraceBox";

interface Props {
    driverId: number;
}

const DailyTraces = ({ driverId }: Props) => {

    var dailyTraces = getDailyTraces(driverId);

    /*This really needs to be a repeater of some kind. It's silly to duplicate the structure seven times...*/

    return (

        <HStack>
            <DailyTraceBox day='Mon' colorScheme={dailyTraces.indexOf('2021-02-01') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Tue' colorScheme={dailyTraces.indexOf('2021-02-02') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Wed' colorScheme={dailyTraces.indexOf('2021-02-03') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Thu' colorScheme={dailyTraces.indexOf('2021-02-04') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Fri' colorScheme={dailyTraces.indexOf('2021-02-05') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Sat' colorScheme={dailyTraces.indexOf('2021-02-06') > 0 ? 'green' : '#fff'} />
            <DailyTraceBox day='Sun' colorScheme={dailyTraces.indexOf('2021-02-07') > 0 ? 'green' : '#fff'} />
        </HStack>
    );
};

export default DailyTraces;