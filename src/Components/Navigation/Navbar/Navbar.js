import React from 'react';

import NavItem from './NavItem/Navitem';
import style from './Navbar.module.css'

const navbar = (props) => {

    return (
        <div className={style.Navbar}>
            <h1 onClick={props.logoClicked}>The Fake News Journal</h1>
            <NavItem text={'Add news'} clicked={props.addNewsClicked} />
            <NavItem text={'Contact us'} clicked={props.contactClicked} />
        </div>
    )

}


export default navbar;