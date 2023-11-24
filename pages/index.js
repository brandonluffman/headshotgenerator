import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MdDoubleArrow, MdRadar, MdAddLink, MdTaskAlt, MdSettingsBackupRestore, MdPlayForWork } from "react-icons/md";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import LogoSlider from '../components/LogoSlider';
import DropdownFAQ from '../components/DropdownFAQ';
import Link from 'next/link';
import Chatbot from '../components/Chatbot';

export default function Home() {

  let iconStyles = { background: 'blue', color: 'white', fontSize: '2.5rem', borderRadius: '50%'};

  return (
    <div>
      <Navbar />
    <Chatbot />
    <div className='landing-1'>
      <div className='container-fluid'>
        <h1 className='one-header'>Make your headshot <br /><span className='header-span'>professional</span></h1>
        <h6 className='one-para'>Our Headshot Generator works on all devices, so you only have to set it up once, and get beautiful results forever.</h6>
        <Link href='/pricing'><button className='trial-button btn'>Create yours</button></Link>
        <Link href='/'><button className='learn-button btn'>Learn more</button></Link><br />
        {/* <img className='one-image' src='/generated-banner.webp' alt='brand-logo' /> */}
        <span className='bubble bubble-1'></span>
        <span className='bubble bubble-2'></span>
        </div>
    </div>

    <div className='logo-slider-container'>
      {/* <h1>Insert Logo Container</h1> */}
      <LogoSlider />
    </div>


    <div className='landing-2' id='how'>
          <h3 className='two-header'>How HeadshotGenerator<span className='gradient-text'>AI</span> Works</h3>
          <p className='two-para'>
HeadshotGeneratorAI redefines the process of obtaining professional headshots by harnessing the power of artificial intelligence. Our platform offers a user-friendly experience where you can easily upload your photograph and let our sophisticated AI work its magic. Tailored for both individuals and professionals, this service transforms your uploaded image into a variety of professional headshots.</p>
          <img className='two-image' src='/works.png' alt='brand-logo' />
    </div>

    <div className='landing-steps'>
      <div className='landing-step step-1'>
      <div className='landing-step-number'>1</div>
      <div className='landing-step-line'></div>
      <h3>Upload your images</h3>
      <p>Connect social media accounts to easily import your selfies.</p>
      <img src='/upload.jpeg' className='landing-step-img'></img>
      </div>
      <div className='landing-step step-2'>
              <div className='landing-step-line-up'></div>
      <div className='landing-step-number'>2</div>
      <div className='landing-step-line'></div>
      <h3>Our AI gets to work</h3>
      <p>We build a custom AI model with your digital likeness.</p>
      <img src='/ai-work.jpeg' className='landing-step-img'></img>
      </div>
      <div className='landing-step step-3'>
                      <div className='landing-step-line-up'></div>

      <div className='landing-step-number'>3</div>
      <div className='landing-step-line'></div>
            <h3>Select your photos</h3>
      <p>You&apos;ll receive different backgrounds, poses, and styles to choose the perfect photo.</p>
      <img src='/generated-banner.webp' className='landing-step-img'></img>
      </div>
      <div className='landing-step step-4'>
                      <div className='landing-step-line-up'></div>

      <div className='landing-step-number'>4</div>
      <div className='landing-step-line'></div>
      <h3>Use your headshot</h3>
      <p>Upgrade your overall digital appearance with a state of the art professional headshot.</p>
      <img src='/linkedin-1.webp' className='landing-step-img'></img>
      </div>
    </div>

  <div className='landing-reviews-container'>
    <h3 className='landing-reviews-header'><span className='blue'>Millions</span> of professional photos created</h3>
    <div className='landing-reviews-img-grid'>
    <img src='/headshot-1.jpeg' className='landing-reviews-img'></img>
    <img src='/headshot-2.webp' className='landing-reviews-img'></img>
    <img src='/headshot-3.jpeg' className='landing-reviews-img'></img>
    <img src='/headshot-4.webp' className='landing-reviews-img'></img>
    <img src='/headshot-5.jpeg' className='landing-reviews-img'></img>
    <img src='/headshot-6.avif' className='landing-reviews-img'></img>
    <img src='/headshot-10.webp' className='landing-reviews-img'></img>
    <img src='/headshot-11.avif' className='landing-reviews-img'></img>

</div>
  </div>

  <div className='landing-pricing-container'>
      <Pricing />
  </div>

  <div className='landing-privacy-container'>
    <h3 className='landing-privacy-header'><span className='purple'>Privacy first</span> to protect your data</h3>
    <p className='landing-privacy-subheader gray'>HeadshotGeneratorAI will never sell your information.</p>
    <div className='landing-privacy-grid'>
      <div className='landing-privacy-grid-item'>
        <div className='landing-privacy-grid-antiflexer'>
        <h6>Advanced Encryption</h6>
        <p>Your data deserves the best protection. We encrypt all sensitive user data.</p>
        </div>
      </div>
      <div className='landing-privacy-grid-item'>
      <div className='landing-privacy-grid-antiflexer'>
        <h6>We will never sell your data</h6>
        <p>HeadshotGeneratorAI will never sell your data to any third party.</p>
        </div>
      </div>
      <div className='landing-privacy-grid-item'>
      <div className='landing-privacy-grid-antiflexer'>
        <h6>You&apos;re in control</h6>
        <p>We will never use the AI model trained with your likeness without your permission.</p>
        </div>
      </div>
      <div className='landing-privacy-grid-item'>
      <div className='landing-privacy-grid-antiflexer'>
        <h6>Live Support</h6>
        <p>Message us anytime 7am-7pm Mon-Fri and get solutions from our live agents.</p>
        </div>
      </div>
      </div>
    <div className='landing-privacy-review'>
      <div className='landing-privacy-quote'><q>I love HeadshotGeneratorAI! It created some excellent headshots for me.</q></div>
      <div className='landing-privacy-flexer'>
        <img src='/microsoft.png' className='landing-privacy-img'></img>
        <div className='landing-privacy-profile'>
          <p className='privacy-profile-name'>Gokul Rajaram</p>
          <p className='gray'>Executive, <span >Microsoft</span></p>
        </div>
      </div>
    </div>
    </div>


    {/* <div className='landing-4'>
      <div className='four-top'>
      <h3 className='four-header'>Explore the solutions</h3>
      <p className='four-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='grid-container'>
            <div className='grid-item grid-1'>
                <MdDoubleArrow style={iconStyles} />
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid-item grid-2'>
                <MdRadar style={iconStyles} />
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid-item grid-3'>
                <MdAddLink style={iconStyles} />
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid-item grid-4'>
                <MdTaskAlt style={iconStyles} />    
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid-item grid-5'>
                <MdSettingsBackupRestore style={iconStyles} />
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid-item grid-6'>
                <MdPlayForWork style={iconStyles} />  
                <h6 className='grid-header'>Headless CMS</h6>
                <p className='grid-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
      </div>
    </div> */}


    {/* <div className='landing-5'>
      <div className='container-fluid'>
      <h3 className='five-header'>Simple can help you scale globally</h3>
      <p className='five-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <img className='five-image' src='/globe-1.png' alt='brand-logo' />
      </div>
    </div> */}


  
    {/* <div className='landing-6'>
      <div className='six-top'>
      <h3 className='six-header'>The most innovative businesses choose Simple</h3>
      <div className='button-div'>
        <button className='six-blue six-button'>Developers</button>
        <button className='six-button'>SaaS</button>
        <button className='six-button'>Web Agencies</button>
        <button className='six-button'>E-Commerce</button>
        <button className='six-button'>Startups</button>
      </div>
      </div>
</div> */}

{/* <div className='landing-faqs-container'>
  <div className='landing-faqs-text'>
  <h3 className='landing-faqs-header'>Frequently asked questions</h3>
  <p className='landing-faqs-subheader'>Have more questions? You can email us at support@aragon.ai or try our live chat.</p>
  </div>
  <div className='landing-faqs-grid'>
    <div className='landing-faqs-grid-item'>

    </div>
    <div className='landing-faqs-grid-item'>
    </div>
    <div className='landing-faqs-grid-item'>
    </div>
    <div className='landing-faqs-grid-item'>
    </div>
    <div className='landing-faqs-grid-item'>
    </div>

  </div>
</div> */}

<div className='index-faqs-container'>
  <img className='index-faqs-img' src='/faq.png'></img>
          <h2 className='index-faqs-header'>Frequently Asked Questions</h2>
  <p className='landing-faqs-subheader'>Have more questions? You can email us at <Link className='gradient-text' href="mailto:info@headshotgeneratorai.com">info@headshotgeneratorai.com</Link> or try our live chat.</p>
          <div className='faq-container'>
              {/* <h4 className='faq-header'>Testing FAQ</h4> */}
              <DropdownFAQ
                 title="Can I use HeadshotGeneratorAI for free?"
              content="Yes, HeadshotGeneratorAI provides a selection of free services that allow users to create a basic resume without any cost. However, we also offer a range of premium services for users who wish to access more comprehensive features, such as personalized templates, advanced AI writing assistance, and detailed performance analytics, designed to further enhance your resume and improve your job application success rate."
         
            />
            <DropdownFAQ
                 title="How can I customize my resume?"
              content="You can customize your resume on our platform by choosing from various professional templates, adjusting fonts and colors, and organizing sections to best showcase your skills and experience. Our AI tools also offer suggestions to tailor your content to specific job postings, ensuring that your resume speaks directly to the roles you're applying for. For more personalized guidance, our premium services include one-on-one consultations with resume experts."
            />
                <DropdownFAQ
                    title="Can I download my resume to Word or PDF?"
                  content="Yes, once you've finished creating your resume with our builder, you can easily download it in multiple formats, including Word (.docx) and PDF, allowing you to submit your resume to potential employers in the format they prefer or keep for your own records."
                />
              
                <DropdownFAQ
                    title="How do I cancel, downgrade or delete my account?"
                  content="To cancel, downgrade, or delete your account, please navigate to the 'Settings' section of your account dashboard. From there, you can select the 'Subscription' option to cancel or downgrade your services. If you wish to delete your account, you'll find the option at the bottom of the 'Account' section. Follow the prompts to confirm your action. Should you need any assistance or encounter any issues, our customer support team is available to help you through the process."
                />
                
          </div>
      </div>



    <div className='landing-7'>
      <div className='container-fluid'>
        <div className='seven-wrap'>
          <div className='seven-div seven-one'>
              <h3 className='seven-header'>Ready to get started?</h3>
              <p className='seven-para'>We have various tiers to choose from, including our starter pack to test the images out.</p>
              </div>
              <div className='seven-div seven-two'>
              <button className='seven-button btn'>Get yours now</button>
              </div>
              </div>
      </div>
    </div>
    



  <Footer />
</div>
  )
}
