import React from "react";
import Footer from "../inc/Footer";
import Vmc from "../inc/Vmc";
import CV from '../images/CV.pdf'
import Services from "../inc/Services";


function About(){
  return(
    <div >
      <section className="py-4 bg-info">
        <div className='container'>
          <br/><br/><br/>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>About</h4>

            </div>
            <div className='col-md-8 my-auto'>
              <h6 className="float-end">Home / About</h6>

            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Who Prime is</h3>
              <div className="underline mx-auto"></div>
              <p className="col-md-12 " style={{textAlign: 'justify'}}>
                As a Front-end engineer, I am skilled in creating visually appealing and intuitive user interface using variety of web development technologies. With my experience in HTML5, CSS3, Javascript, React.js, and Bootstrap, I am able to to develop and maintain scalable, responsive, and cross-browser compatible web application. <br/> I have an understanding of user-centered design principles and I am able to translate complex business requirements into simple and effective front-end solutions. I am also proficient in using version control tools such as Git and Github, and have experience working in agile development environments. <br/>In addition, I am constantly keeping up-to-date with the latest  web development trends and best practices. I am passionate about developing innovative and user-friendly web applications,and I am dedicated to delivering high-quality work that meets or exceeds client expectations.
              </p>
              <a href={CV} download className='btn btn-warning shadow'>Download My CV</a>
            </div>
          </div>
        </div> 
      </section>

      {/* <section className="section bg-light border-bottom">
        <div className='container'>
          <h5 className="main-heading text-center">Organizations</h5>
          <div className="underline mx-auto"></div>
          <p>
             Valuemax is neck-deep in training and human resources development. We take all our trainings and courses very seriously because it serves as one major channel through which we recruit members of our team as well as recruit IT staff for other Companies/Organizations we partner with. Thus, all our trainings are completely practical and project-based. We encourage you to have a personal computer of your own to practice with and be ready for lots of real time live project. <br/> <br/> At Valuemax, we have diverse array of niche software programmers and artists coming from different programming language background with many years of experience of active app development and designs. So whether you are a green horn in computer world or an average user, you can be sure we have a place for you.
          </p>
        </div>
      </section> */}

      {/* Vision Mission and Values */}
      <Vmc />

       {/* Our Services */}
       <Services />





      {/* Footer */}
      <Footer />
    </div>
  );
}
export default About;