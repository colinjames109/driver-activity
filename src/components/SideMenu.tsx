import React from 'react';
import { Button, Heading, HStack, List, ListItem, Box, Icon } from "@chakra-ui/react";
import useMenuOptions, { MenuOption, } from "../hooks/useMenuOptions";
import { AiFillHome,  AiFillInfoCircle } from 'react-icons/ai';
import { TbSteeringWheel } from 'react-icons/tb';
import { FaTruck } from 'react-icons/fa'
import { ImManWoman } from 'react-icons/im'
import { IconType } from 'react-icons';


interface Props {
    onSelectMenuOption: (menuOption: MenuOption) => void;
    selectedMenuOption: MenuOption | null;
}

const SideMenu = ({ onSelectMenuOption, selectedMenuOption }: Props) => {

    const iconMap: { [key: string]: IconType; } = {
        Home: AiFillHome,
        Drivers: ImManWoman,
        Vehicles: FaTruck,
        About: AiFillInfoCircle
    };


    const { data } = useMenuOptions();

    return (
        <Box paddingLeft={3} >
            <HStack>
                <List>
                    {data.data.map((g: MenuOption) =>
                        <ListItem key={g.title} paddingY='9px'>
                            <Icon as={iconMap[g.title] }/>
                            <Button
                                marginLeft={1}
                                whiteSpace='normal'
                                color='#090041'
                                textAlign='left'
                                onClick={() => onSelectMenuOption(g)}
                                fontWeight={selectedMenuOption?.title === g.title ? 'bold' : 'normal'}
                                fontSize='lg' variant='link'>
                                {g.title}
                            </Button>
                        </ListItem>
                    )}
                </List>
            </HStack>
        </Box>
    );
};

export default SideMenu;