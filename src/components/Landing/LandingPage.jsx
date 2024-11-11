/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './LandingPage.module.css';
import NavBar from '../Nav/NavBar';
import Button from '@mui/material/Button';
import arrowRight from '../../assets/arrow-right.png';
import playCircle from '../../assets/play-circle.png';
import heroImage from '../../assets/hero image.png';
import heroImageSmall from '../../assets/hero image - mobile.png';
import BoltshiftLogo from '../../assets/Boltshift logo.png';
import FeatherDevLogo from '../../assets/FeatherDev logo.png';
import GlobalBankLogo from '../../assets/GlobalBank logo.png';
import LightboxLogo from '../../assets/Lightbox logo.png';
import NietzscheLogo from '../../assets/Nietzsche logo.png';
import SpheruleLogo from '../../assets/Spherule logo.png';
import FeaturesPage from '../Feature/FeaturesPage';
import Sisyphus from '../Sisy/Sisyphus';
import CuttingEdgeFeaturesPage from '../Cutting/CuttingEdgeFeaturesPage';
import FAQ from '../FAQ/FAQ';
import BlogsPage from '../BlogsPage/BlogsPage';
import StartYourFreeTrialSection from '../Start/StartYourFreeTrialSection';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <div>
        <NavBar/>
        <div className={styles.heroContext}>
              <div>
                <div className={styles.newFeatureContainer}>
                <div className={styles.newFeature}>New feature</div>
                <span>Check out the team dashboard</span>
                <img src={arrowRight} alt="right arrow"/>
                </div>
              </div>
              <div className={styles.heroMainText}><h1>Beautiful analytics to grow smarter</h1></div>
              <div className={styles.heroSubText}><p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p></div>
            <div className={styles.demoAndSignUpContainer}>
                <Button variant="outlined"><span style={{color:'#344054'}}><img src={playCircle} alt="playIcon"/>Demo</span></Button>
                <Button variant="contained" style={{backgroundColor:'#7F56D9', border:'none', textTransform: 'none'}}>Sign up</Button>
            </div>   
        </div>
        <div>
            <img src={heroImage} alt="hero image" className={styles.heroImageLarge}/>
            <img src={heroImageSmall} alt="hero image" className={styles.heroImageSmall}/>
        </div>
        <div className={styles.heroTestimonialsContainer}>
          <div>
            <p>Join 4,000+ companies already growing</p>
            <div className={styles.heroTestimonialsLogos}>
              <div><img src={BoltshiftLogo} alt="Boltshift logo"/></div>
              <div><img src={LightboxLogo} alt="Lightbox logo"/></div>
              <div><img src={FeatherDevLogo} alt="FeatherDev logo"/></div>
              <div><img src={SpheruleLogo} alt="Spherule logo"/></div>
              <div><img src={GlobalBankLogo} alt="GlobalBank logo"/></div>
              <div><img src={NietzscheLogo} alt="Nietzsche logo"/></div>
            </div>
          </div>
        </div>
        <hr style={{ width: '88%', border: '1px solid #D0D5DD' }}/>
        <FeaturesPage/>
        <Sisyphus/>
        <CuttingEdgeFeaturesPage/>
        <hr style={{ width: '88%', border: '1px solid #D0D5DD' }}/>
        <FAQ/>
        <hr style={{ width: '88%', border: '1px solid #D0D5DD' }}/>
        <BlogsPage/>
        <StartYourFreeTrialSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage;