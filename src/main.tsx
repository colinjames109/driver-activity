import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig, } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';

const configChakra: ThemeConfig = {
    useSystemColorMode: false,
    initialColorMode: "light",
};

const theme = extendTheme({ configChakra });

export default theme;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
