import React from 'react';
import web from  "../src/images/img1.gif";




import './App.css';
import Common from "./Common";

function Home() {
  return (
    <>
    <Common
    name="Get Certified And " 
    imgsrc={web} 
    visit="/service"
     btname="Get Started"
     highlight="GrowInfinity"
     main="Sky is the limits"
     />

    </>
  );
}

export default Home;
