import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
background: linear-gradient(
    270deg,
    rgba(47, 53, 66, 1) 0%,
    rgba(25, 27, 34, 1) 16%,
    rgba(21, 23, 29, 1) 29%,
    rgba(17, 19, 24, 1) 39%,
    rgba(13, 15, 18, 1) 51%,
    rgba(0, 0, 0, 1) 100%
);
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
position: sticky;
top:0;
z-index:10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
padding 0 24px;
max-width: 1700px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 52px;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration:none;
font-family: 'Katibeh', cursive;
margin-top:-22px;


&:hover{
   color: #12CBC4;
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 28px;
    cursor: pointer;
    color: #fff;
    margin-top:-6px;
    
}
`;

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px

@media screen and (max-width: 768px){
    display:none;
}
`;

export const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 768px){
    display:none;
}
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 18px;
height: 100%;
cursor: pointer;
font-family: 'Katibeh', cursive;
margin-top:-8px;

&.active {
    border-bottom: 3px solid #01bf71;
}
&:hover{
    color: #12CBC4;
    border-bottom:2px solid #12CBC4;
 }
`;