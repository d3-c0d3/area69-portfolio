import React from 'react';
import classes from './Project.module.css';
import {LazyLoadImage} from 'react-lazy-load-image-component'
const Project=(props)=>{
/*     console.log(props) */
    return(
        <div className={classes.Project}>
            <div className={classes.projectImgs} >
                <div className={classes.mainImg} > 
                <LazyLoadImage delayTime='3000'  src={props.data.mainImgSrc}/>
                <div class={classes.middle}>
                <div class={classes.text}  >Visit</div>
                </div>
                </div>
                <div> 
                    <div className={classes.small} ><img src={props.data.smallTopImgSrc}/></div>
                    <div className={classes.small}><img src={props.data.smallBottomImgSrc}/></div>
                </div>
            </div>
            <div className={classes.description} >{props.data.details}</div>
        </div>
    )
}

export default Project;