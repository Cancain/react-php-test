import React, { Component } from 'react';

import NavItem from './NavItem/Navitem';
import style from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div className={style.Navbar}>
                <h1>The Fake News Journal</h1>
                <NavItem text={'Add news'} />
                <NavItem text={'Contact us'} />
            </div>
        )
    }
}


export default Navbar;