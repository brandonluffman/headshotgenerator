import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
// import { MdMenu, MdClear } from 'react-icons/md';
// import {AiOutlineSchedule} from 'react-icons/ai';
// import { BiLinkExternal } from 'react-icons/bi';
import {RiArrowDropDownLine} from 'react-icons/ri'
// import { supabase } from '../utils/auth';
import { IoIosCreate } from 'react-icons/io';
import { SiSpeedtest } from 'react-icons/si'
import { BsPenFill } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
const Navbar = () => {

  const [showMe, setShowMe] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const profileLetter = 'B';

  // const profileLetter = user?.user?.email[0]

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function toggleNav(){
    setShowMe(!showMe);
    setIsActive(!isActive);
  }

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await supabase.auth.getUser();

  //     if (data) {
  //       setUser(data);
  //       console.log(data)
  //     } else {
  //       console.error('Error fetching user:', error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // const handleLogout = async () => {
  //   await supabase.auth.signOut();
  //   // Redirect or navigate to the login page
  //   alert('Logout successful!');
  //       // Redirect or navigate to the profile page
  //   window.location.href = '/';
  // };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);

    } else {
      setNavbar(false);

    }
  }; 

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  // const user = user.user;


  return (
      <nav className={navbar ? 'scroll fixed-top' : 'navbar fixed-top'} id="navbar">
      <Link href='/'><span className='navbar-logo'><img src='/brand-logo.png'></img>HeadshotGenerator<span className='gradient-text'>AI</span></span></Link>
      <ul className='nav-menu'>
        <Link href='/#how'><li className='nav-link'>How it works</li></Link>
        <Link href='/pricing'><li className='nav-link'>Pricing</li></Link>
        <Link href='/affiliate'><li className='nav-link'>Affiliate</li></Link>
        <Link href='/faqs'><li className='nav-link'>FAQs</li></Link>

        <div className='vertical-line'></div>
        <div className='login-menu'>
        {/* {user?.user !== null ? (
              <div className='nav-link nav-link-welcome'>
                <div className='profile-circle'>
                  <div className='profile-circle-letter'>{profileLetter}</div>
                <div className='profile-nav'>     
                <p className='profile-circle-email'>Hello {user?.user.email}</p>
                <button className='logout-nav-btn logout-logged-in btn nav-btn btn-tertiary'>
                  Logout
                </button>
                </div>
                </div>
              </div>
            ) : (
              <div className='nav-link'>
                <li className='nav-link nav-link-btn-li'>
                  <Link href='/login'>
  
                    <button type='button' className='nav-link-btn nav-login-btn-scrolled btn btn-primary'>
                      Login
                    </button>
                  </Link>
                </li>
                <li className='nav-link nav-link-btn-li'>
                  <Link href='/register'>
                    <button type='button' className='nav-link-btn nav-signup-btn btn btn-secondary'>
                      Sign Up
                    </button>
                  </Link>
                </li>
              </div>
            )} */}
            </div>
            </ul>

            <div className='hamburger-btn' onClick={toggleMenu}>
                <FiMenu className='hamburger-menu-icon' />
              </div>

              {/* Mobile navigation menu */}
              {isMenuOpen && (
                <div className='mobile-nav'>
                  {/* Menu content here */}
                  <ul className=''>
                        <li className='nav-link mobile-nav-link dropdown'><Link href='/pricing'>Pricing</Link></li>
                        </ul>
                </div>
              )}
      {/* </ul> */}
    </nav>
  )
}

export default Navbar