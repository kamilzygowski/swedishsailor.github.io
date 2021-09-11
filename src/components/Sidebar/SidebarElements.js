import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index:999;
width: 100%;
height:100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left:0;
transition: 0.3 ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

/*

*/

export const CloseIcon = styled(FaTimes)`
color:#fff;
`;

export const Icon = styled.div`
position: absolute;
top: 19px;
right:24px;
font-size:32px;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color:#fff;
`

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 105px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat (6, 80px);
}
`
// grid template rows, druga zmienna po repeat zmienia rozstawienie

export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content: center;
font-size: 46px;
font-weight:800;
text-decoration: none;
list-style:none;
transition: 0.8s all ease;
color: #12CBC4;
cursor: pointer;
margin:0 auto;
text-align:center;
margin-left:22%;
font-family: "Katibeh", cursive;

&:hover {
    color:#01bf71;
    transition: 0.2 ease-in-out;
}
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size:16px;
outline:none;
border:none;
cursor: pointer;
transition: 0.8s all ease;
text-decoration:none;

&:hover {
    transition: all 0.2 ease-in-out;
    background:#fff;
    color:#010606;
}
`