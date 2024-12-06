import React from 'react';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';


const Mainpage = () => {
  return (
    <section className="home" id="home">
        <Navbar/>
        <MainSection/>
    </section>
  );
};

export default Mainpage;
