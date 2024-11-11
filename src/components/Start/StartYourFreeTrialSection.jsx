import React from 'react';
import styles from './StartYourFreeTrialSection.module.css';
import { Button } from '@mui/material';


function StartYourFreeTrialSection() {
  return (
    <div className={styles.mainContainer}>
         <h2>Start your free trial</h2>
         <p className={styles.subHeading}>Join over 4,000+ startups already growing with Untitled.</p>
         <div className={styles.learnMoreButtons}>
            <Button variant="outlined" style={{color:'black', border:'1px solid #7F56D9', textTransform: 'none'}}>Learn more</Button>
            <Button variant="contained" style={{backgroundColor:'#7F56D9', border:'none',  textTransform: 'none'}}>Get started</Button>
         </div>
    </div>
  )
}

export default StartYourFreeTrialSection;