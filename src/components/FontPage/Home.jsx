import React from 'react';
import Banner from '../SharedPage/Banner';
import Gallery from '../SharedPage/Gallery';
import Category from '../SharedPage/Category';
import PopularToy from '../SharedPage/PopularToy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <PopularToy></PopularToy>
        </div>
    );
};

export default Home;