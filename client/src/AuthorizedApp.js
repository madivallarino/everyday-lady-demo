import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Clothing from './Clothing';
import Lifestyle from './Lifestyle';
import Home from "./Home";
import CartPage from './CartPage';
import ProductPage from './ProductPage';
import OrderPage from './OrderPage';
import ReturnPolicy from './ReturnPolicy';
import Dashboard from './Dashboard';
import GiftCards from './GiftCards';
import About from './AuthorizedApp/About';
import NavBar from "./NavBar";
import OrderHistory from './OrderHistory';
import Footer from "./Footer";
import GiftCardFAQs from './GiftCardFAQs';
import './AuthorizedApp.css'
const AuthorizedApp = ({user, handleLogout}) => {
   

    return (
        <div className="Application">
        <NavBar user={user}/>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/products/:id">
            <ProductPage />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/lifestyle">
        <Lifestyle />
        </Route>
        <Route path="/clothing">
        <Clothing />
        </Route>
        <Route path="/cart">
        <CartPage />
        </Route>
        <Route path="/orders">
        <OrderPage user={user}/>
        </Route>
        <Route path="/account/dashboard">
        <Dashboard handleLogout={handleLogout}/>
        </Route>
        <Route path="/returnpolicy">
        <ReturnPolicy />
        </Route>
        <Route path="/giftcard">
        <GiftCards />
        </Route>
        <Route path="/giftcardfaqs">
            <GiftCardFAQs />
        </Route>
        <Route path="/orderhistory">
            <OrderHistory /> 
        </Route>
        <Route exact path="/">
            <LandingPage />
        </Route>
        
        <Footer />
        </div>
    )
}

export default AuthorizedApp;