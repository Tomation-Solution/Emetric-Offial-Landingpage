import { NavLogoContainer } from '../Nav/Nav.style'
import { FooterContainer, FooterCover, FooterSectionA, FooterSectionB } from './Footer.style'
import EmetricLogo  from '../../assets/logo.png'






const Footer = ():React.ReactElement=>{

  return (
    <FooterCover>
      <FooterContainer>
        <FooterSectionA>
          <br />
          <div className='addresse_container'>
            <NavLogoContainer>
              <img src={EmetricLogo.src} alt="" />
            </NavLogoContainer>
            <br />
            <p>9304 Forest lane, Suite S207 Dallas, Texas 75243</p>
            <p>Email : info@emetricsuite.com</p>
            <p>Contact : +1 (504) 499-5921</p>
            <div className="socials">
                    
            </div>
          </div>

          <div className='footer_feature_container'>
            <p>Products</p>
            <p>Performance Management</p>
            <p>Time Sheet</p>
            <p>Personnel Information Management</p>
            <p>Leave Administration</p>
            <p>Payroll Management</p>
          </div>

          <div className='footer_pages_link'>
            <p>Products</p>
            <p>Solutions</p>
            <p>Pricing</p>
            <p>Our Partners</p>
            <p>Blog</p>
          </div>
        </FooterSectionA>
        <br />
        <FooterSectionB>
        Copyright © 2022 E-metric Inc.
        </FooterSectionB>
      </FooterContainer>
    </FooterCover>
  )
}

export default Footer