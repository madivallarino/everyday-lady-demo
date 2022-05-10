import React from 'react';
import { Switch, Route } from "react-router-dom";
import Signin from "./Signin";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UnauthorizedClothing from "./UnauthorizedApp/UnauthorizedClothing";
import UnauthorizedHome from "./UnauthorizedApp/UnauthorizedHome";
import UnauthorizedLifestyle from "./UnauthorizedApp/UnauthorizedLifestyle";
import UnauthorizedLandingPage from './UnauthorizedApp/UnauthorizedLandingPage';
import UnauthorizedAbout from "./UnauthorizedApp/UnauthorizedAbout";
import UnauthorizedProductPage from "./UnauthorizedApp/UnauthorizedProductPage";
const UnauthorizedApp = ({onLogin}) => {
    
    

    return (
        <div>
            <NavBar />
        <Switch>
        <Route path="/about">
            {/* <UnauthorizedAbout /> */}
        </Route>
        <Route path='/signin'>
            <Signin onLogin={onLogin}/>
        </Route>
        <Route path='/lifestyle'>
             <UnauthorizedLifestyle />
        </Route>
        <Route path='/clothing'>
             <UnauthorizedClothing />
        </Route>
        <Route path='/home'>
            <UnauthorizedHome />
        </Route>
        <Route path="/products/:id">
            <UnauthorizedProductPage />
        </Route>
        <Route exact path="/">
            <UnauthorizedLandingPage />
        </Route>
        </Switch>
            <Footer />
    </div>
    )
}

export default UnauthorizedApp;