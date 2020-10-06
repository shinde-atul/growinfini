import React from 'react';
import { NavLink } from 'react-router-dom';




import './App.css';

function Card(props) {
  return (
    <>
    
     <div className="col-md-4 col-10 mx-auto">
     
                <div className="card cardsize">
                    <img src={props.imgsrc} className="card-img-top " alt={props.imgsrc}/>
                       <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.name}</h5>
                                     <p className="card-text">{props.parag}</p>
                                     <NavLink to="/Contact" className="btn btn-outline-primary">Contact</NavLink>
                     </div>
                     </div>
                </div>
               
             
    
    </>
  );
}

export default Card;