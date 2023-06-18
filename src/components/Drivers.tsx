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

const Drivers = () => {

    const { data } = useDrivers();


    return (
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                    <Tr>
                        <Th>Driver Name</Th>
                        <Th>Vehicle Reg.</Th>
                        <Th>Total Activity Duration</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(g => 
                        <Tr>
                        <Td>{g.forename + ' ' + g.surname}</Td>
                        <Td>{g.vehicleRegistration}</Td>
                            <Td><Text>{getTotalDuration(g.driverID)}</Text></Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
export default Drivers;