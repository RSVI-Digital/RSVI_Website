import React, { Component } from 'react';

import Icon from './Images/rsvi_name.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavLink} from 'react-bootstrap';

import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <Navbar expand='xxl' className={styles.navbar}>
                <Navbar.Brand className={styles.navbrand}>
                    <img src={Icon} alt='rsvi logo' className={styles.navicon}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav' className={styles.navlinkbar}>
                    <Nav className='mr-auto w-100' justify='true'>
                    <NavLink exact href='#home' className={styles.navlink}>
                        HOME
                    </NavLink>
                    <NavLink href='#about-us' className={styles.navlink}>
                        ABOUT US
                    </NavLink>
                    <NavLink href='#internship' className={styles.navlink}>
                        INTERNSHIP
                    </NavLink>
                    <NavLink href='#initiatives' className={styles.navlink}>
                        INITIATIVES
                    </NavLink>
                    <NavLink href='#faq' className={styles.navlink}>
                        FAQ's
                    </NavLink>
                    <NavLink href='#get-in-touch' className={styles.navlink}>
                        GET IN TOUCH
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
