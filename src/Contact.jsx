import React from 'react';


import './App.css';

function Contact() {
  return (
    <>
    <div className="my-5 ">
      <h3 className="text-center">Contact-Us</h3>
    </div>
      <div className="container contact_div">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-10 max-auto ">
   <form >
   <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email id"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label>Phone Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your Phone Number with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Short Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-outline-primary">Contact</button>
</form>
</div></div></div>
    </>
  );
}

export default Contact;