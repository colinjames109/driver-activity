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
    Text
} from "@chakra-ui/react";

import useDrivers, { Driver, getTotalDuration } from "../hooks/useDrivers";
import DailyTraces from "./DailyTraces";

const Drivers = () => {

    const { data } = useDrivers();

    return (
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
                        <Tr>
                            <Td>{g.forename + ' ' + g.surname}</Td>
                            <Td>{g.vehicleRegistration}</Td>
                            <Td textAlign='center'><Text>{getTotalDuration(g.driverID)}</Text></Td>
                            <Td><DailyTraces driverId={ g.driverID } /></Td>
                        </Tr>)}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
export default Drivers;