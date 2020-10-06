import React from 'react';

import web from "../src/images/img2.png";



import './App.css';
import Common from './Common';

function About() {
  return (
    <>
     <Common 
     name="WellCome" 
     imgsrc={web}
     visit="/contact"
      btname="Contact Now"
      hilight="AboutPage"
      main="Grow Infinity Solutions is one stop to fulfill all training needs to nurture and enhance the skills of individuals working in corporate environment."
      />
    </>
  );
}

export default About;