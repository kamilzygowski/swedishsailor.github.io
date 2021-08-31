import { Link} from 'react-router-dom';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './PageNav.scss';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem } from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const PageNav = ({ toggle }) => (
    <>
        <Nav>
            <NavbarContainer>
                <MobileIcon/>
        <NavLinks to='/' smooth={true}> Back </NavLinks>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
                <NavLinks to ='/aboutme' smooth={true}> AboutMe </NavLinks>
            </NavItem>
        <NavItem>
                <NavLinks to ='/pixelart' smooth={true}> PixelArt </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ='/games' smooth={true}> Games </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ='/contact' smooth={true}> Contact </NavLinks>
            </NavItem>
        </NavMenu>
        </NavbarContainer>
        </Nav>
    </>
);

export default PageNav;