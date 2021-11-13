import React from "react";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{height:'30vh'}} className="pt-5 mt-5 bg-dark text-light">
      <div class="container">
          <div class="row">
              <div class="col">
              <h4>Help Center</h4>
                    <li>FAQS</li>
                    <li>Term and Conditions</li>
                    <li>Privacy</li>
                    <li>Track orders</li>
              </div>
               <div class="col">
               <h4>Quick Link</h4>
                     <Link className='text-decoration-none text-light' to='/home'>About</Link><br />
                     <Link className='text-decoration-none text-light' to='/Contract'>Contart</Link>
               </div>
               <div class="col">
               <h4>Newsletter</h4>
                     <p>Subscribes and get discount</p>
                     <div class="input-group mb-3 w-75">
                        <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient'susername" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button"id="button-addon2">Button</button>
                       </div>
                </div>
           </div>
         </div>
    </div>
  );
};

export default Footer;
