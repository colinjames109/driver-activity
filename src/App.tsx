import { useState } from 'react';
import { Button, Show, Grid, GridItem, Text } from '@chakra-ui/react';
import HeaderBar from './components/HeaderBar';
import SideMenu from './components/SideMenu';
import { MenuOption } from './hooks/useMenuOptions';
import Home from './components/Home';
import Drivers from './components/Drivers';
import Vehicles from './components/Vehicles';
import About from './components/About';

function App() {

    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOption | null>(null);

    return (

        <div className="App">
            <Grid

                templateAreas={{
                    base: `"hdr" "main"`,
                    lg: `"hdr hdr" "side-menu main"`
                }}

                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr'
                }}

            >
                <GridItem area='hdr' marginBottom='20px'>
                    <HeaderBar />
                </GridItem>
                <Show above="lg">
                    <GridItem area='side-menu' paddingX='10px' >
                        <SideMenu onSelectMenuOption={(m) => setSelectedMenuOption(m)} selectedMenuOption={selectedMenuOption} />
                    </GridItem>
                </Show>
                <GridItem area='main' >
                    {(!selectedMenuOption || selectedMenuOption.title === 'Home') && <Home />}
                    {selectedMenuOption?.title === 'Drivers' && <Drivers />}
                    {selectedMenuOption?.title === 'Vehicles' && <Vehicles  />}
                    {selectedMenuOption?.title === 'About' && <About />}
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
