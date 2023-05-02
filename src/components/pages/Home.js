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
              <p style={{textAlign: 'justify'}}>Hello and welcome to my landing page! I am an entry-level front-end developer seeking an internship to gain valuable hands-on experience in the industry. With a solid understanding in HTML5, CSS3 Javascript, Bootstrap, React and various front-end frameworks, I am eager to contribute to your team and learn from experienced professionals. Take a look at my portfolio to see examples of my work, and feel free to contact me to discuss how I can support your company's misson. Let's work together to achieve our goals! </p>

              <a href={CV} download className='btn btn-warning shadow'>Download My CV</a>



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