import { Switch, Route } from "react-router-dom";
import UnauthorizedLandingPage from './UnauthorizedLandingPage';
import Signin from "./Signin";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UnauthorizedClothing from "./UnauthorizedClothing";
import UnauthorizedHome from "./UnauthorizedHome";
import UnauthorizedLifestyle from "./UnauthorizedLifestyle";
import UnauthorizedAbout from "./UnauthorizedAbout";
import UnauthorizedProductPage from "./UnauthorizedProductPage";
const UnauthorizedApp = ({onLogin}) => {
    
    

    return (
        <div>
            <NavBar />
        <Switch>
        <Route path="/about">
            <UnauthorizedAbout />
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