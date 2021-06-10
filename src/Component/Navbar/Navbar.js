import React from 'react';
import { BrowserRouter, Link, Switch,Route } from 'react-router-dom';
import AuthorsList from '../Authors/AuthorsList';
import Layout from '../Layout/Layout';
import ProjectsList from '../ProjectsList/ProjectsList';
import classes from './Navbar.module.css';
import ContactInfo from '../ContactInfo/ContactInfo';
const Navbar=()=>{
    return(
        <BrowserRouter>
        <ul className={classes.Navbar} >
            <li> <Link to="/" > Feed </Link></li>
            <li>  <Link to="/authors" > Authors </Link></li>
            <li> <Link to="/contact" > Contact Us </Link></li>
        </ul>
        <Switch>
            <Route exact path ="/"  render={()=> <Layout/> }/>
            <Route exact path ="/authors" render={()=> <AuthorsList/>}/>
            <Route exact path="/projects" render={()=><ProjectsList/>}/>
            <Route exact path ="/contact" render={()=><ContactInfo/>}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Navbar;