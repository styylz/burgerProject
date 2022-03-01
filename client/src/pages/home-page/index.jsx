/* eslint-disable */

import HomePageBody from './home-page-body';
import HomePageBanner from './home-page-banner';
import HomePagePopular from './home-page-popular'
import { useState, useEffect } from 'react';
import Api from '../../services/api-service';

const burgerImages = [
  {src:'https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg', title: 'Vegan'},
  {src:'https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg', title: 'Meat'},
  {src:'https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg', title: 'Extra'},

]

const Home = () =>{
  const [burgers, setBurgers] = useState([])

  useEffect(()=>{
    (async ()=>{
      const {Burgers} = await Api.getBurgers()
      setBurgers(Burgers)
    })();
  },[])


  return(
  <>
 <HomePageBody image={burgerImages} />
 <HomePageBanner />
 <HomePagePopular />
  </>
);
}
export default Home;
