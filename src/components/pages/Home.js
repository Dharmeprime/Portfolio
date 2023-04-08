import React from "react";
import Slider from "../inc/Slider";
import {Link} from 'react-router-dom'
import Vmc from "../inc/Vmc";
import Services from "../inc/Services";
import Footer from "../inc/Footer";
import CV from '../images/CV.pdf'

function Home(){
  return(
    <div>
      <br/><br/><br/>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p className="col-md-12 text-start">
                As a Front-end engineer, I am skilled in creating visually appealing and intuitive user interface using variety of web development technologies. With my experience in HTML, CSS, Javascript, React.js, and Bootstrap, I am able to to develop and maintain scalable, responsive, and cross-browser compatible web application. <br/> I have an understanding of user-centered design principles and I am able to translate complex business requirements into simpleand effective front-end solutions. I am also proficient in using version control tools such as Git and Github, and have experience working in agile development environments. <br/>In addition, I am constantly keeping up-to-date with the latest  web development trendse and best practices. I am passionate about developing innovative and user-friendly web applications,and I am dedicated to delivering high-quality work that meets or exceeds client expectations.
              </p>
              <a href={CV} download className='btn btn-warning shadow'>Download My CV</a>
            </div>
          </div>
        </div> 
      </section>

      {/* Vision Mission and Values */}
      <Vmc />

      {/* Our Services */}
      <Services />
      
      {/* Footer */}
      <Footer />
            
    </div>
  );
}
export default Home;