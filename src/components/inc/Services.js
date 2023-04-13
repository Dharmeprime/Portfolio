import React from 'react';
import Service1 from '../images/webmobile.png';
import Service2 from '../images/monitoring.png';
import Service3 from '../images/Project.png';
import {Link} from 'react-router-dom';

  function Services(){
    return(
      <section className="section bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">My Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className='col-md-4'>
              <div style={{borderBottom: '5px solid #f76c2f',padding: '0px'}}  className="col-sm-4 col-md-4 col-lg-4 card ms-3 mb-2 shadow w-75">
                <img  className="card-img-top w-50 mx-auto border-bottom pt-3"  src={Service1} alt="" />
                <div className="card-body">
                  <p className="fw-bold px-1 card-title mt-4 text-center">DESIGN AND DEVELOPMENT</p>
                  <div className='underline mx-auto'></div>
                  <p>
                    We design and develop the user interface of a website by working with UI/UX designers to create wireframes and prototypes, and then using several stacks to bring those designs to life.
                  </p>
                  {/* <Link to='/services' className="btn btn-link">KNOW MORE</Link> */}
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div style={{borderBottom: '5px solid #f76c2f',padding: '0px'}}  className="col-sm-4 col-md-4 col-lg-4 card ms-3 mb-2 shadow w-75">
                <img  className="card-img-top w-50 mx-auto border-bottom pt-3"   src={Service2} alt="" />
                <div className="card-body">
                  <p className="fw-bold px-1 card-title mt-4">INTEGRATION WITH BACK-END SYSTEMS</p>
                  <div className='underline mx-auto '></div>
                  <p className='w-100'>
                    We work closely with back-end developers to ensure the user interface is properly integrated with the back-end systems. This involves understanding APIs, database structures and server-side code.
                  </p>
                  {/* <Link to='/services' className="btn btn-link">KNOW MORE</Link> */}
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div style={{borderBottom: '5px solid #f76c2f',padding: '0px'}}  className="col-sm-4 col-md-4 col-lg-4 card ms-3 mb-2 shadow w-75">
                <img  className="card-img-top w-50 mx-auto border-bottom pt-3"   src={Service3} alt="" />
                <div className="card-body">
                  <p className="fw-bold px-1 card-title mt-4 text-center">WEB IMPROVEMENT</p>
                  <div className='underline mx-auto'></div>
                  <p className='pb-3'>
                    We keep up with latest trends and technology to improve the web applications which we have deployed. We also improve existing website that needs improvement. <br/>
                  </p>
                  {/* <Link to='/services' className="btn btn-link">KNOW MORE</Link> */}
                </div>
              </div>
            </div>

            
           
          </div>
        </div> 
      </section>
    );
  }
export default Services;