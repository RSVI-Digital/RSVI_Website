import React, { Component } from 'react';

import { rsvi_logo } from './Links';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavLink} from 'react-bootstrap';

import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <Navbar expand='xxl' className={styles.navbar}>
                <Navbar.Brand className={styles.navbrand}>
                    <img src={rsvi_logo} alt='rsvi logo' className={styles.brandicon}/>
                    <p className={styles.brandname}>
                        Rehabilitation Society of the Visually Impaired
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav' className={styles.navlinkbar}>
                    <Nav className='mr-auto w-100' justify='true'>
                    <NavLink exact href='/' className={styles.navlink}>
                        HOME
                    </NavLink>
                    <NavLink href='/about-us' className={styles.navlink}>
                        ABOUT US
                    </NavLink>
                    <NavLink href='/internship' className={styles.navlink}>
                        INTERNSHIP
                    </NavLink>
                    <NavLink href='/initiatives' className={styles.navlink}>
                        INITIATIVES
                    </NavLink>
                    <NavLink href='/faqs' className={styles.navlink}>
                        FAQ's
                    </NavLink>
                    <NavLink href='/get-in-touch' className={styles.navlink}>
                        GET IN TOUCH
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
