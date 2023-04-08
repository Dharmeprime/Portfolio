import React from "react";
import Footer from "../inc/Footer";
import Vmc from "../inc/Vmc";

function About(){
  return(
    <div >
      <section className="py-4 bg-info">
        <div className='container'>
          <br/><br/><br/>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>About Us</h4>

            </div>
            <div className='col-md-8 my-auto'>
              <h6 className="float-end">Home / About Us</h6>

            </div>

          </div>

        </div>
      </section>

      <section className="section bg-light border-bottom">
        <div className='container'>
          <h5 className="main-heading text-center">Organizations</h5>
          <div className="underline mx-auto"></div>
          <p>
             Valuemax is neck-deep in training and human resources development. We take all our trainings and courses very seriously because it serves as one major channel through which we recruit members of our team as well as recruit IT staff for other Companies/Organizations we partner with. Thus, all our trainings are completely practical and project-based. We encourage you to have a personal computer of your own to practice with and be ready for lots of real time live project. <br/> <br/> At Valuemax, we have diverse array of niche software programmers and artists coming from different programming language background with many years of experience of active app development and designs. So whether you are a green horn in computer world or an average user, you can be sure we have a place for you.
          </p>
        </div>
      </section>

      {/* Vision Mission and Values */}
      <Vmc />





      {/* Footer */}
      <Footer />
    </div>
  );
}
export default About;