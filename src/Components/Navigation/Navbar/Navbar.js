import React, { Component } from 'react';

import NavItem from './NavItem/Navitem';
import style from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div className={style.Navbar}>
                <NavItem text={'Add news'} />
                <NavItem text={'Home'} />
            </div>
        )
    }
}


export default Navbar;