import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5d8aa8',
        },
        background: {
            default: '#fafafa',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement as HTMLElement);
    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </React.StrictMode>
    );
}

reportWebVitals();