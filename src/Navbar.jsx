import React from 'react';
import {a} from 'react-router-dom';
const Navbar =() =>
{
    return (
        <>
          <div className="container-fluid md-5 ">
          <div className="row">
            <div className="col-10 max-auto">
        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">GrowInfinity </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active ">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Service">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About </a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link " href="/Contact">Contact </a>
      </li>
    </ul>
   
  </div>
</nav>
</div>
</div>
</div>
</>
    );
}
export default Navbar;