import React from 'react'
import img1 from '../images/asana.png';
import img2 from '../images/hostinger.png';
import img3 from '../images/bluehost.png';
import img4 from '../images/dell.png';
import img5 from '../images/meta.png';
import img6 from '../images/smile.png';
import img7 from '../images/valuemax.png';
import img8 from '../images/nysc.png';
import {Link} from 'react-router-dom'


  function MyPort(){
    return(
      <div className="container d-flex justify-content-center">
      <div className="row gutter-3">
        <div className='col-md-6'>
          <Portfolio img={img1} link={{live: "https://prime-chi.vercel.app/asana.html", source: "https://prime-chi.vercel.app/",}} />

        </div>

        <div className='col-md-6'>
          <Portfolio img={img4} link={{live: "https://prime-chi.vercel.app/hostinger.html",source: "https://prime-chi.vercel.app/",}} />

        </div>

        <div className='col-md-6'>
        <Portfolio img={img3} link={{live: "https://prime-chi.vercel.app/bluehost.html",source: "https://prime-chi.vercel.app/"}} />

        </div>
        <div className='col-md-6'>
          <Portfolio img={img2} link={{live: "https://prime-chi.vercel.app/dell.html",source: "https://prime-chi.vercel.app/"}} />

        </div>

        <div className='col-md-6'>
          <Portfolio img={img5} link={{live: "https://prime-chi.vercel.app/meta.html",source:"https://prime-chi.vercel.app/"}} />

        </div>

        <div className='col-md-6'>
          <Portfolio img={img6} link={{live: "https://prime-chi.vercel.app/smile.html",source: "https://prime-chi.vercel.app/"}} />

        </div>

        <div className='col-md-6'>
          <Portfolio img={img7} link={{live: "https://prime-chi.vercel.app/valuemax.html",source: "https://prime-chi.vercel.app/valuemax.html"}} />

        </div>

        <div className='col-md-6'>
          <Portfolio img={img8} link={{live: "https://prime-chi.vercel.app",source: "https://prime-chi.vercel.app/"}} />

        </div>

      </div>
    </div>
    );
  }
export default MyPort;

function Portfolio({img, link}){
  return (
    <div className="my-3">
      <img src={img} alt="img" height={'100%'} width={'100%'} className="wer" />
      <div className="mx-auto my-auto mx-4">
        <button className="btn btn-outline-dark rounded-pill mx-4 shadow live" type="button" style={{background:'#ae5f3d'}}>
          <a href={link.live}>Live Demos</a>
        </button>

        <button className="btn btn-outline-dark rounded-4 px-4 shadow live" type="button" style={{background:'#ae5f3d'}}>
          <a href={link.source}>Source code</a>
        </button>
      </div>
    </div>
  );
}