import { useState } from 'react';
import { Button, Show, Grid, GridItem } from '@chakra-ui/react';
import HeaderBar from './assets/HeaderBar';

function App() {

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
                <GridItem area='hdr'>
                    <HeaderBar />
                </GridItem>
                <Show above="lg">
                    <GridItem area='side-menu' paddingX='10px' >
                        side menu
                    </GridItem>
                </Show>
                <GridItem area='main' >
                    main area
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
