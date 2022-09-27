import Button from '../Button/Button'
import { NavBtnContainer, NavContainer, NavSecondPart,NavLinksContainer, NavLogoContainer } from './Nav.style'
import {  FaBars } from 'react-icons/fa'
import EmetricLogo  from '../../assets/logo.png'
import {IoMdCloseCircle} from 'react-icons/io'
import { useState } from 'react'



const Nav = ():React.ReactElement=>{
  const[showMobileNav,setShowMobileNav]= useState(false)
  const handleShowMobileNav=()=> setShowMobileNav(!showMobileNav);

  return (
    <NavContainer>
      <NavLogoContainer>
        <img src={EmetricLogo.src} alt="" />
      </NavLogoContainer>


      <FaBars onClick={handleShowMobileNav}/>
      

      <NavSecondPart showMobileLink={showMobileNav}>
        <IoMdCloseCircle  onClick={handleShowMobileNav}/>
        <NavLinksContainer>
          <li><a href="#">Products</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Our Parthers</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
        </NavLinksContainer>


        <NavBtnContainer>
          <li><a href="">Sign In</a></li>
           
          <Button>Request Demo</Button>
        </NavBtnContainer>
      </NavSecondPart>

    </NavContainer>
  )
}

export default Nav