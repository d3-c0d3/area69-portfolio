import React from 'react';

import {authorsDataList} from './authorsData';
import Author from './Author';
import classes from './AuthorsList.module.css';
import Auxi from '../HOC/Auxi';
import videoSrc from '../../assets/ar69Main.mp4';
const AuthorsList =()=>{

    const renderAuthor=authorsDataList.map((author)=>{
        return <Author authorData={author} />
    })

    return(
        <Auxi>
        <video className={classes.videoTag} autoPlay loop muted>
        <source src={videoSrc} type='video/mp4' />
        </video>
            <div className={classes.AuthorsList} > {renderAuthor} </div>
        </Auxi>
            )
}

export default AuthorsList;