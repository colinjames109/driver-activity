import logo from '../assets/logo.png';
import { Image } from "@chakra-ui/react";

const Logo = () => {
    return (
        <Image src={logo} objectFit="scale-down" alt="logo" />
    )
};

export default Logo;