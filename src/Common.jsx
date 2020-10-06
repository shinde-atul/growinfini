import React from "react";
// import web from  "../src/images/img1.gif";
import {NavLink} from "react-router-dom";
import  './App.css';
function Common(props) {
    return (
      <>
           <section  id="header" className="d-flex align-center">
       <div className="container-fluid">
              <div className="row">
                  <div className="col-10 max-auto">
                      <div className="row">
                      <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1>{props.name}<strong className="brand-name"> {props.highlight}</strong></h1>
    <h4 className="my-3">{props.main}</h4>
                          <div className="mt-3">
    <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
  
                          </div>
  
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2 header-img">
    <img src={props.imgsrc} className="img-fluid animated" alt="home img"></img>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
              
  
               
          
  
  
  
       </section>
      </>
    );
  }
  
  export default Common;