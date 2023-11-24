import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MdDoubleArrow, MdRadar, MdAddLink, MdTaskAlt, MdSettingsBackupRestore, MdPlayForWork } from "react-icons/md";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  let iconStyles = { background: 'blue', color: 'white', fontSize: '2.5rem', borderRadius: '50%'};

  return (
    <div>
      <Navbar />

    <div className='landing-1'>
      <div className='container-fluid'>
        <h1 className='one-header'>Make your headshot <br /><span className='header-span'>wonderful</span></h1>
        <h6 className='one-para'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</h6>
        <button className='trial-button'>Start free trial</button>
        <button className='learn-button'>Learn more</button><br />
        <img className='one-image' src='/generated-banner.webp' alt='brand-logo' />
        <span className='bubble bubble-1'></span>
        <span className='bubble bubble-2'></span>
        </div>
    </div>


    <div className='landing-2'>
          <h3 className='two-header'>How HeadshotGeneratorAI Works</h3>
          <p className='two-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img className='two-image' src='/works.png' alt='brand-logo' />
    </div>


    <div className='landing-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <h3 className='three-header'>Powerful suite of tools</h3>
            <p className='three-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='three-div'>
                <h6 className='three-div-h'>Building the simple ecosystem</h6>
                <p className='three-div-p'>Take collaboration to the next level with security and administrative features built for teams</p>
              </div>
              <div className='three-div'>
                <h6 className='three-div-h'>Building the simple ecosystem</h6>
                <p className='three-div-p'>Take collaboration to the next level with security and administrative features built for teams</p>
              </div>
              <div className='three-div'>
                <h6 className='three-div-h'>Building the simple ecosystem</h6>
                <p className='three-div-p'>Take collaboration to the next level with security and administrative features built for teams</p>
              </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <img className='three-image' src='/npm.webp' alt='brand-logo' />
          </div>
        </div>
      </div>
    </div>


    <div className='landing-4'>
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
    </div>


    <div className='landing-5'>
      <div className='container-fluid'>
      <h3 className='five-header'>Simple can help you scale globally</h3>
      <p className='five-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <img className='five-image' src='/globe-1.png' alt='brand-logo' />
      </div>
    </div>


  
    <div className='landing-6'>
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
      <div className='card-div'>
        {/* <div className='blog-card card-1'>
              <Card className='card-tag' sx={{ maxWidth: 345 }}>
                  <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + '/stats.jpeg'}
                alt="green iguana"
              />
              <CardActions className='card-button-div'>
                <Button size="small" className='card-button button-blue'>Case Studies</Button>
                <Button size="small" className='card-button'>Hubspot</Button>
              </CardActions>
              <CardContent className='card-content'>
                <Typography className='article-title' gutterBottom variant="p" component="div">
                  "How Hubspot saved 25% on  developing costs by switching to Simple."
                </Typography>
                <div className='author-profile'>
                <CardMedia
                component="img"
                className='profile-image'
                image={process.env.PUBLIC_URL + '/profile.jpeg'}
                alt="green iguana"
              />
                <Typography variant="body2" className='author-name' color="text.secondary">
                  By Lisa Allison
                </Typography>
                </div>
              </CardContent>
            </Card>
  </div> */}
  {/* <div className='blog-card card-2'>
  <Card className='card-tag' sx={{ maxWidth: 345 }}>
                  <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + '/stats.jpeg'}
                alt="green iguana"
              />
              <CardActions className='card-button-div'>
                <Button size="small" className='card-button button-blue'>Case Studies</Button>
                <Button size="small" className='card-button'>Hubspot</Button>
              </CardActions>
              <CardContent className='card-content'>
                <Typography className='article-title' gutterBottom variant="p" component="div">
                  "How Hubspot saved 25% on  developing costs by switching to Simple."
                </Typography>
                <div className='author-profile'>
                <CardMedia
                component="img"
                className='profile-image'
                image={process.env.PUBLIC_URL + '/profile.jpeg'}
                alt="green iguana"
              />
                <Typography variant="body2" className='author-name' color="text.secondary">
                  By Lisa Allison
                </Typography>
                </div>
              </CardContent>
            </Card>
  </div> */}
  {/* <div className='blog-card card-3'>
  <Card className='card-tag' sx={{ maxWidth: 345 }}>
                  <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + '/stats.jpeg'}
                alt="green iguana"
              />
              <CardActions className='card-button-div'>
                <Button size="small" className='card-button button-blue'>Case Studies</Button>
                <Button size="small" className='card-button'>Hubspot</Button>
              </CardActions>
              <CardContent className='card-content'>
                <Typography className='article-title' gutterBottom variant="p" component="div">
                  "How Hubspot saved 25% on  developing costs by switching to Simple."
                </Typography>
                <div className='author-profile'>
                <CardMedia
                component="img"
                className='profile-image'
                image={process.env.PUBLIC_URL + '/profile.jpeg'}
                alt="green iguana"
              />
                <Typography variant="body2" className='author-name' color="text.secondary">
                  By Lisa Allison
                </Typography>
                </div>
              </CardContent>
            </Card>
  </div> */}
  </div>
    </div>





    <div className='landing-7'>
      <div className='container-fluid'>
        <div className='seven-wrap'>
          <div className='seven-div seven-one'>
              <h3 className='seven-header'>Ready to get started?</h3>
              <p className='seven-para'>We have a generous free tier available to get you started right away.</p>
              </div>
              <div className='seven-div seven-two'>
              <button className='seven-button'>Get started for free</button>
              </div>
              </div>
      </div>
    </div>




  <Footer />
</div>
  )
}
