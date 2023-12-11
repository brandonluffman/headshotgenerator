import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter, faXTwitter, faYoutube , } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="container-fluid footer-container" id="services">
           <div className='footer-top'>
            <div className='footer-brand-container'>
              <div className='footer-brand-img'>
                  <img src='/brand-logo.png' className='footer-brand-logo'></img>
                  {/* <img src='/modern-logo.png' alt="Brand Logo" className='footer-brand-logo' loading="lazy" /> */}
                  <h2 className='footer-brand-header'>HeadshotGenerator<span className='gradient-text'>AI</span></h2>
              </div>
              
              <div className='social-icons'>
                <a href='https://twitter.com/PhxntomTech' target='_blank' rel='noreferrer' aria-label="Twitter"><FontAwesomeIcon className="fa-brands fa-x-twitter social-icon" icon={faXTwitter} alt='Social Icon' /></a>
                <a href='https://www.facebook.com/profile.php?id=100084723462596' target='_blank' rel='noreferrer' aria-label="Facebook"><FontAwesomeIcon className="fa-brands fa-facebook social-icon" icon={faFacebookF} alt='Social Icon' /></a>
                <a href='https://www.instagram.com/phxntomtechnologies/' target='_blank' rel='noreferrer' aria-label="Instagram"><FontAwesomeIcon className="fa-brands fa-youtube social-icon" icon={faYoutube} alt='Social Icon' /></a>
                <a href='https://www.linkedin.com/company/phxntomtech' target='_blank' rel='noreferrer' aria-label="Linkedin" ><FontAwesomeIcon className="fa-brands fa-linkedin social-icon" icon={faLinkedinIn} alt='Social Icon' /></a>
              </div>
              </div>
              
              <div className='footer-links-container'>
                          <div className='footer-links'>
                            <div className='footer-links-header'><p className='footer-link-header'>Product</p></div>
                            <Link href='/#how'><div className='footer-link'>How it works</div></Link>
                            <Link href='/refund-policy'><div className='footer-link'>Refund Policy</div></Link>
                            <Link href='/pricing'><div className='footer-link'>Pricing</div></Link>
                            <Link href='/affiliate'><div className='footer-link'>Affiliates <span className='new-tag'>New</span></div></Link>

                            {/* <Link href='/blogs'><div className='footer-link'>Cover Letter Builder</div></Link> */}
                          </div>
                     
                          <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Company</p>
                            <Link href='/about'><div className='footer-link'>About Us</div></Link>
                            <Link href='/faqs'><div className='footer-link'>FAQs</div></Link>
                            <Link href='/support'><div className='footer-link'>Support</div></Link>
                              <Link href='/blog'><div className='footer-link'>Blog</div></Link>
                            {/* <div className='copyright-footer-flexer'> */}
                              <Link target='_blank' rel='noreferrer' href='https://www.privacypolicygenerator.info/'><div className='footer-link'>Privacy Policy</div></Link>
                              <Link target='_blank' rel='noreferrer' href="https://www.termsofusegenerator.net/"><div className='footer-link'>Terms of Use</div></Link>

                            {/* </div> */}
                            {/* <Link href='/guides'><div className='footer-link'>User Guides</div></Link> */}

                            {/* <p className='footer-link'><GoMail className='footer-contact-icon' /> info@resumebuilderai.com</p> */}
                            {/* <p className='footer-link'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
                          </div>
                          <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Contact</p>
                            <Link href='/about'><div className='footer-link'>Email</div></Link>
                            <Link href='/contact'><div className='footer-link'>Twitter</div></Link>
                            <Link href='/'><div className='footer-link'>Linkedin</div></Link>
                            <Link href='/'><p className='footer-link'>Facebook </p></Link>

                            {/* <p className='footer-link'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
                          </div>
                </div>
              </div>   
              <div className='copyright-footer'>
                  <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} HeadshotGeneratorAI - All Rights Reserved.</p>
              </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer