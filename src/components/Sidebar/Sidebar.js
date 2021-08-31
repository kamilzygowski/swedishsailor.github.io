import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to='/aboutme' onClick={toggle}>
                        About Me
                    </SidebarLink>
                <SidebarLink to='/pixelart' onClick={toggle}>
                        PixelArt
                    </SidebarLink>
                    <SidebarLink to='/games' onClick={toggle}>
                        Games
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
);

export default Sidebar;