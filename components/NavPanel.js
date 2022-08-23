import { useContext, useEffect, useState } from 'react';
import Image from "next/image";

import NavLink from "./NavLink";
import { CartCtx } from '../context/CartContext';
import { MonsterCtx } from '../context/MonsterContext';

const NavPanel = () =>{
    const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx);
    const [isAuthenticated, setIsAuthenticated] = useState(monsterCtx.user?.token!=undefined);
    
    useEffect(()=>{
        setIsAuthenticated(monsterCtx.user?.token!=undefined);
    }, [monsterCtx.user]);


    const handleMobileToggle = () => setIsMobileMenuOn(prev => !prev);
    return <nav>
        <NavLink href="/" exact className="logo">
            <Image src="/logo.png" width={35} height={35} alt="FxMonster icon" />

            <h1 className="nav-title">
                <span className="special">Fx</span>Monsters
            </h1>
        </NavLink>

        <div className="nav-links">
        {/* {!monsterCtx.token && } */}
            <NavLink href="/" exact className="white">Home</NavLink>
            <NavLink href="/market">Markets</NavLink>
            <NavLink href="/hire">Hire</NavLink>
            <NavLink href="/support">Support</NavLink>
            {!isAuthenticated && <NavLink href="/login" className="white">Login</NavLink>}
            {!isAuthenticated && <NavLink href="/signup" className="white special-link">Sign up</NavLink>}
        
            <NavLink href="/wishlist" className="white">
                <i className="fa fa-heart" aria-hidden="true" title="My Wishlist"></i>
                <sup>{cartCtx.wish.length}</sup>
            </NavLink>
            <NavLink href="/cart" className="white">
                <i className="fa fa-shopping-cart" aria-hidden="true" title="My Cart"></i>
                <sup>{cartCtx.cart.length}</sup>
            </NavLink>
            {isAuthenticated && 
                <NavLink href="/dashboard" className="white account-icon">
                    <i className="fa fa-user" aria-hidden="true" title="My Account"></i>
                </NavLink>
            }
        </div>
        
        <span className="menu-button">
            {!isMobileMenuOn && <i className="fa fa-bars" onClick={handleMobileToggle} aria-hidden="true"></i>}
            {isMobileMenuOn && <i className="fa fa-times" onClick={handleMobileToggle} aria-hidden="true"></i>}
        </span>
        {isMobileMenuOn && 
        <div className="mobile-links">
            <i className="fa fa-times" onClick={handleMobileToggle} aria-hidden="true"></i>
            <NavLink href="/" exact className="white" onClick={handleMobileToggle}>Home</NavLink>
            <NavLink href="/market" onClick={handleMobileToggle}>Markets</NavLink>
            <NavLink href="/hire" onClick={handleMobileToggle}>Hire</NavLink>
            <NavLink href="/support" onClick={handleMobileToggle}>Support</NavLink>
            
            {!isAuthenticated && <NavLink href="/login" className="white" onClick={handleMobileToggle}>Login</NavLink>}
            {!isAuthenticated && <NavLink href="/signup" className="white special-link" onClick={handleMobileToggle}>Sign up</NavLink>}
            
            <NavLink href="/wishlist" className="white" onClick={handleMobileToggle}>
                <i className="fa fa-heart" aria-hidden="true" title="My Wishlist"></i>
                <sup>{cartCtx.wish.length}</sup>
            </NavLink>
            <NavLink href="/cart" className="white" onClick={handleMobileToggle}>
                <i className="fa fa-shopping-cart" aria-hidden="true" title="My Cart"></i>
                <sup>{cartCtx.cart.length}</sup>
            </NavLink>
            {isAuthenticated && 
                <NavLink href="/dashboard" className="white account-icon" onClick={handleMobileToggle}>
                    <i className="fa fa-user" aria-hidden="true" title="My Account"></i>
                </NavLink>
            }
        </div>}
    </nav>
}


export default NavPanel;