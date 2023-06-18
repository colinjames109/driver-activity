import { Heading, Box } from "@chakra-ui/react";
import  Logo from './Logo'

const HeaderBar = () => {
    return (
        <Box margin={5} borderBottomColor='#090041' borderBottomWidth={1 } >
            <Logo />
        </Box>
    );
};

export default HeaderBar;