import React from 'react'
import {FaBars} from 'react-icons/fa'
import {ImBook} from "react-icons/im";
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItems, 
    NavLinks, 
    NavBtn, 
    NavBtnLink} from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>KETABY<ImBook /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks>Home</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks>Library</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks>Sign up</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar