import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    VStack,
    Flex,
    Input,
    Box
} from "@chakra-ui/react";
import { useState } from "react";

import useDrivers, { Driver, getTotalDuration } from "../hooks/useDrivers";
import DailyTraces from "./DailyTraces";
import SearchInput from "./SearchInput";



const Drivers = () => {

    const { data } = useDrivers('');

    const [searchText, setSearchText] = useState('');

    return (
        <VStack>
            <Box alignItems='left' alignSelf='left' width='100%'>
                <Box width='50%'>
                    <SearchInput onSearch={(searchText) => setSearchText("")} />
                </Box>
            </Box>
            <Box width='100%'>
                <TableContainer>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                <Th>Driver Name</Th>
                                <Th>Vehicle Reg.</Th>
                                <Th textAlign='center'>Total Activity Duration</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(g =>
                                <Tr key={g.driverID}>
                                    <Td>{g.forename + ' ' + g.surname}</Td>
                                    <Td>{g.vehicleRegistration}</Td>
                                    <Td textAlign='center'><Text>{getTotalDuration(g.driverID)}</Text></Td>
                                    <Td><DailyTraces driverId={g.driverID} /></Td>
                                </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </VStack>
    );
};
export default Drivers;