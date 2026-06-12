import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Main from './main/Main';
import List from './list/List';
import Chart from './chart/Chart';
import Testing from "./testing/Testing";

const Layout = () => (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fdfdfd'}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Box>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Main/>},
            {path: "/list", element: <List/>},
            {path: "/chart", element: <Chart/>},
            {path: "/quiz", element: <Testing/>},
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;