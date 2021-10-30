import React from 'react';
import Banner from '../../Header/Banner/Banner';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import MoreInformation from '../MoreInformation/MoreInformation';
import Newsletter from '../Newsletter/Newsletter';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <MoreInformation />
            <Experience />
            <Newsletter />
        </div>
    );
};

export default Home;