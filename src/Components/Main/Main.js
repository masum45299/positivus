import React from 'react';
import Nvbr from '../Nvbr/Nvbr';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nvbr/>
            <Outlet/>
        </div>
    );
};

export default Main;