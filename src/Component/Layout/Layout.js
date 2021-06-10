import React from 'react';
import  './Layout.css';
import Particles from 'react-particles-js';
import part from '../../particlesjs-config.json'
import clientReview from '../../assets/projects/clientReview.png';
import demoShop from  '../../assets/projects/demoShopFront.PNG';
import ihrs from  '../../assets/projects/ihrs.png'
import potfoDecode from '../../assets/projects/protfoDecode.png';
import smallShop from  '../../assets/projects/smallShop.PNG';
import  hogwards from '../../assets/projects/Blog.png'
import cake from '../../assets/projects/Cake001.png';
import authors from '../../assets/projects/Authors.png'
import { Link } from 'react-router-dom';
const particleOptions=part;
const Layout=()=>{
    const clicked=()=>{
        console.log('click')
    }
    return (
        <div className='Layout' >
        <Particles className='particles' params={particleOptions}  />
            <div className='Title' >
                <div className='titleSlot A' >A</div>
                <div className='titleSlot R' >R</div>
                <div className='titleSlot six' >6</div>
                <div className='titleSlot nine' >9</div>
            </div>
            <div className='infoContainer' >
            <div className='promo' >
                <h2>Why Choose Us <span>?</span></h2>
                <p>
                Our team members are willing to go to any length to get a job done. Not only do we make projects, we also like to teach, guide and help people reach their highest potential. We believe, your creativity is what makes you different and special.
                </p>
            </div>
          
               <div className='projects' >
                <Link to="/projects" > <h2   className="basicH2 " >Our Projects
                <span></span>
               </h2></Link>
               <div className='projectContainer'>
               
               <img   src={authors} />
                    <img src={cake} />
                    <img src={hogwards} />
                </div>
                <div className='projectContainer' >
                   
                    <img src={demoShop} />
                    <img src={potfoDecode} />
                    <img src={ihrs} />
                </div>
                
                
               </div>
           
            </div>
        </div>
    )
}

export default Layout;