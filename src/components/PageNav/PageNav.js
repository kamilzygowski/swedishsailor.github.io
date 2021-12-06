import { Link} from 'react-router-dom';
import React from 'react';
import { FaBars, FaSpa } from 'react-icons/fa';
import styles from './PageNav.scss';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem, TitleIcon, FakeTitleIcon } from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const PageNav = ({ toggle }) => (
    <>
        <Nav>
            <NavbarContainer>
            <FakeTitleIcon>
                <FaSpa/>
            </FakeTitleIcon>
                
        <NavLinks className="backbtn" to='/' smooth={true}> <TitleIcon>
                <FaSpa color="#fff" />
                </TitleIcon> </NavLinks>
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
                <NavLinks to ='/projects' smooth={true}> Projects </NavLinks>
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