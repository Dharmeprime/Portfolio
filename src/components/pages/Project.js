import React from "react";
import {Link} from 'react-router-dom';
import Footer from "../inc/Footer";
import Portfolio from '../inc/Portfolio';
import background from '../images/tech.jpg'

function Contact(){
  return(
    <div>
      <section className="py-4 bg-info">
        <div className='container'>
          <br/><br/><br/>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Contact Us</h4>

            </div>
            <div className='col-md-8 my-auto'>
              <h6 className="float-end">Home / Project</h6>

            </div>

          </div>

        </div>
      </section>

      <section className="section  bg-c-light" style={{backgroundImage:'url(${background})', backgroundColor:'#333'}}>
        <div  className="container">
          
          
            <Portfolio />
          
        </div>

      </section>
      
      
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default Contact;