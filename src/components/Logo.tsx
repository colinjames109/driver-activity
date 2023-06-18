import logo from '../assets/logo.png';
import { Image } from "@chakra-ui/react";

const Logo = () => {
    return (
        <Image src={logo} width='284px' height='36px' marginBottom= {5} alt="Logistics logo" />
    )
};

export default Logo;