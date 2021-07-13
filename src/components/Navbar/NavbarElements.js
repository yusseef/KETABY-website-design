import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Nav = styled.nav`
background:${({scrollNav}) => (scrollNav ? '#000' : '#000' )};
height: 100px;
//margin-top:-100px;
display:flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`


export const NavLogo = styled(Link)`

color:#fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.7rem;
display:flex;
align-items:center;
margin-left: -20px;
font-weight: bold;
text-decoration:none;
width:150px;
height: 50px;
margin-top: 18px;
position: relative;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top:0;
    right:0 ;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;

}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style:none;
text-align :center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItems = styled.li`
height: 80px;
`

export const NavLinks = styled(Link)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

&.active {
    border-bottom: 3px solid #C68B59;
}
&:hover {
    transition: all 0.2s ease-in-out;
    background: #C68B59;
    color:#010606;

}

`


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display:none;
}
`
export const NavBtnLink = styled(Link)`
border-radius: 50px;
background: #C68B59;
white-space:nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;

}
`