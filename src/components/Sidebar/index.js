import React from 'react'

import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink, 
    SidebarMenu, 
    SideBtnWrap,
    SidebarLinkR, 
    SideBarRoute} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen= {isOpen} onClick= {toggle}>
            <Icon onClick= {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick= {toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/' onClick= {toggle}>
                        Library
                    </SidebarLink>
                    <SidebarLinkR to='/' onClick= {toggle}>
                        Signup
                    </SidebarLinkR>
                </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/signin' onClick= {toggle}>
                    Sign in
                </SideBarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
