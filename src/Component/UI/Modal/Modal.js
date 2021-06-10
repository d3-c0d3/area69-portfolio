import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import classes from './Modal.module.css';
const modal=(props)=>(
    <div>
    <BackDrop show={props.show} clicked={props.clicked} />
    <div 
    className={classes.Modal}
    style={{
        transform:props.show ? 'translateY(0)':'translateY(-100vh',
        opacity:props.show?'1':'0'
    }}
    >
    {props.children}
    </div>
    </div>
)
export default modal;