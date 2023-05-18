import React from 'react';
import Header from '../NavigrationBar/Header';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;