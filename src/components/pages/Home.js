import React from "react";
import Slider from "../inc/Slider";
import CV from '../images/EMMANUEL DAMILOLA.pdf'
import Profile from '../images/prime.jpg'

function Home(){
  return(
    <div>
      <br/><br/><br/>
      

      <section className="section mb-5" style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dusk-A330.JPG/240px-Dusk-A330.JPG")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center text-white" >
              <h1 className="fw-bolder dam mb-3">I am Damilola Emmanuel</h1>
              <p>I am a Frontend Developer. I like dabbing in various parts of frontend development and like to learn new technologies, write technical articles or simply play games in my free time...</p>


              <a href="https://linkedin.com" target="_blank"></a>

              
            </div>
            <div className="col-md-2"></div>

            {/* <div className="col-md-6 p-5">
              <img className="w-50 justify-content-end " style={{borderRadius: '25% 100% 25% 100%', align:'right'}} src={Profile} />
              <img className="w-50 justify-content-end " style={{borderRadius: '25% 100% 25% 100%', align:'right'}} src={Profile} />

            </div> */}
            
          </div>
        </div> 
      </section>
      <Slider />
            
    </div>
  );
}
export default Home;