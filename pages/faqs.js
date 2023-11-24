import React from 'react'
import DropdownFAQ from '../components/DropdownFAQ'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = () => {
  return (
    <>
    <Navbar />
    <div className='faqs-container'>
  <img className='index-faqs-img faq-page-img' src='/faq.png'></img>
          <h2 className='index-faqs-header'>Frequently Asked Questions</h2>
  <p className='landing-faqs-subheader'>Have more questions? You can email us at <Link className='email-link' href="mailto:info@headshotgeneratorai.com">info@headshotgeneratorai.com</Link> or try our live chat.</p>
          <div className='faq-container'>
              {/* <h4 className='faq-header'>Testing FAQ</h4> */}
              <DropdownFAQ
                 title="Can I use ResumeBuilderAI for free?"
              content="Yes, ResumeBuilderAI provides a selection of free services that allow users to create a basic resume without any cost. However, we also offer a range of premium services for users who wish to access more comprehensive features, such as personalized templates, advanced AI writing assistance, and detailed performance analytics, designed to further enhance your resume and improve your job application success rate."
         
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
      <Footer />
      </>
  )
}

export default faqs