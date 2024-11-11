import React from 'react';
import styles from './CuttingEdgeFeaturesPage.module.css';
import CuttingEdgeImage from '../../assets/CuttingEdgeImage.png';
import CuttingEdgeImageSmall from '../../assets/CuttingEdgeImage - mobile.png';
import cardIcon1 from '../../assets/cardIcons/Featured icon - 1.png';
import cardIcon2 from '../../assets/cardIcons/Featured icon - 2.png';
import cardIcon3 from '../../assets/cardIcons/Featured icon - 3.png';
import TextCard from '../Text/TextCard';

const cardData = [
    {
        icon: cardIcon1,
        title: 'Share team inboxes',
        subtext: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      },
      {
        icon: cardIcon2,
        title: 'Deliver instant answers',
        subtext: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      },
      {
        icon: cardIcon3,
        title: 'Manage your team with reports',
        subtext: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      }
];

function CuttingEdgeFeaturesPage() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.featuresPill}><p style={{color:'#6941C6', fontWeight:'600'}}>Features</p></div>
        <h2>Cutting-edge features for advanced analytics</h2>
        <p className={styles.subHeading}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div>
          <img src={CuttingEdgeImage} alt="Phone & Desktop Image" className={styles.CuttingEdgeDevicesLarge}/>
          <img src={CuttingEdgeImageSmall} alt="hero image" className={styles.CuttingEdgeDevicesSmall}/>
        </div>
        <div className={styles.cardGrid}>
            {cardData.map((dataItem, index) => (
                <TextCard key={index} data={dataItem} learnMore={true}/>
                ))}
        </div>
    </div>
  )
}

export default CuttingEdgeFeaturesPage