import React, { useContext } from 'react';
import { Context } from '../../main';
import { Navigate } from 'react-router-dom';
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PolularCompanies";


const Home = () => {
  console.log("home page....");
  const {isAuthorized}=useContext(Context);
  const auth = localStorage.getItem("auth");
  if(!auth){
    return <Navigate to={'/login'}/>
  }
  
  return (
    <section className='homePage page'>
    <HeroSection/>
    <HowItWorks/>
    <PopularCategories/>
    <PopularCompanies/>
    </section>

  )
};

export default Home;

