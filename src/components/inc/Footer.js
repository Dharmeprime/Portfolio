import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <section className="section footer bg-dark text-white " >
      <div className="container" >
        <div className="row h-25">
          <div className="col-sm-6" style={{fontWeight: 500, color:'#fff', textShadow:'2px 2px 2px #000'}}>
            <p style={{fontSize:'40px'}}>Hello<span style={{color: '#f2b636'}}>PRIME</span></p> <hr/>
            
            <p style={{fontSize:'16px',  color:'#878c9b'}}> We are a digital platform that offers varying services, customers satisfaction is our drive without mincing our standard</p>
            
          </div>
          <div className="col-sm-6">          
            <ul className="nav flex-column">
              <li className="nav-item" ><Link className="nav-link" href="/" style={{color: '#f2b636',fontWeight: 500, textShadow:'2px 2px 2px #000'}}>STACK</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/">HTML</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/">CSS</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/">JAVASCRIPT</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/">REACT</Link></li>
            </ul>
          </div>
          {/* <div class="col-lg-3">
            
            <ul class="nav flex-column">
              <li class="nav-item"><Link className="nav-link" href="/">About Us</Link></li>
            </ul>
          </div> */}
          {/* <div class="col-lg-3">
          
            <p>30, Old Finbank Building; Opp UI Post Office, 3rd Building after FCMB; UI Ojoo Road, Ibadan admin@valuemaxoniline.com +2349097221954</p>
          </div> */}
        </div>

        {/* <div className="row">
          <div className="col-md-8">

          </div>
          <div className="col-md-4">
            <Link href="#" ><i class="bi bi-twitter p-2  rounded-circle" style={{background: '#2f1c6a'}}></i></Link>
            <Link href="#" ><i class="bi bi-linkedin p-2 border rounded-circle" style={{background: '#2f1c6a'}}></i></Link>
            <Link href="#" ><i class="bi bi-instagram p-2  rounded-circle" style={{background: '#2f1c6a'}}></i></Link>
            <Link href="#" ><i class="bi bi-facebook p-2  rounded-circle" style={{background: '#2f1c6a'}}></i></Link>
            <Link href="#" ><i class="bi bi-youtube p-2  rounded-circle" style={{background: '#2f1c6a'}}></i></Link>

          </div>

        </div> */}

        
      </div>
    </section>
  );
}
export default Footer;