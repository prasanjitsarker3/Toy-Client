import React from 'react';
import Header from '../NavigrationBar/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;