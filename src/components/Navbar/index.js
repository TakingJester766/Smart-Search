import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const NavBar = () => {

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out.');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={require('../../assets/Logo.png')} alt='logo' id='logo'/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/services'>
                    Services
                </NavLink>
                <NavLink to='/library'>
                    Library
                </NavLink>
                
                {user ? <NavLink to='/profile'>Profile</NavLink> : <NavLink to='/sign-up'>Sign Up</NavLink>}
                {user ? <NavBtnLink onClick={handleLogout}>Log Out</NavBtnLink> : <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>}

            </NavMenu>
        </Nav>    
    </>
  )
}

export default NavBar
