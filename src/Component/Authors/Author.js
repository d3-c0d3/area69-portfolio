import classes from './Author.module.css';
import React, { useState } from 'react';
import gitSrc from '../../assets/icons/gitIcon.png';

const Author=(props)=>{
    
   
    
    return (
        <div style={{display:'inline-block'}}  >
       
        <div className={classes.Author} >
            <div className={classes.imgContainer}  >
                <img onClick={()=>{ 
                    window.open(props.authorData.cvLink,"_blank")
                }} src={props.authorData.imgSrc} />
            </div>
            <div className={classes.info} >
            <div className={classes.authorName} > {props.authorData.name} </div>
            <div className={classes.emailContainer} > {props.authorData.email} </div>
            <div className={classes.gitLinks} >   {props.authorData.github.map((glink)=>{
                return <a href={glink} target="_blank" > <img style={{width:'15px',height:'15px'}}  src={gitSrc}  /> {glink.slice(19)}  </a> 
            })} </div>
            </div>
        </div>
        </div>
    )
}

export default Author;