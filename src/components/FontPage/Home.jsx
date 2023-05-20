import React from 'react';
import Banner from '../SharedPage/Banner';
import Gallery from '../SharedPage/Gallery';
import Category from '../SharedPage/Category';
import PopularToy from '../SharedPage/PopularToy';
import CustomInfo from '../SharedPage/CustomInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <PopularToy></PopularToy>
            <CustomInfo></CustomInfo>
        </div>
    );
};

export default Home;