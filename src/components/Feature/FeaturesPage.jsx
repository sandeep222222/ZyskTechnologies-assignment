import React from 'react';
import styles from './FeaturesPage.module.css';
import cardIcon1 from '../../assets/cardIcons/Featured icon - 1.png';
import cardIcon2 from '../../assets/cardIcons/Featured icon - 2.png';
import cardIcon3 from '../../assets/cardIcons/Featured icon - 3.png';
import cardIcon4 from '../../assets/cardIcons/Featured icon - 4.png';
import cardIcon5 from '../../assets/cardIcons/Featured icon - 5.png';
import cardIcon6 from '../../assets/cardIcons/Featured icon - 6.png';
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
      },
      {
        icon: cardIcon4,
        title: 'Connect with customers',
        subtext: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
      },
      {
        icon: cardIcon5,
        title: 'Connect the tools you already use',
        subtext: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
      },
      {
        icon: cardIcon6,
        title: 'Our people make the difference',
        subtext: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
      },
];

function FeaturesPage() {

  return (
    <div className={styles.mainContainer}>
        <p className={styles.featuresHeading} style={{ color:'#6941C6'}}>Features</p>
        <h2>Analytics that feels like it’s from the future</h2>
        <p className={styles.subHeading}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className={styles.cardGrid}>
        {cardData.map((dataItem, index) => (
                <TextCard key={index} data={dataItem} />
            ))}
        </div>
    </div>
  );
}

export default FeaturesPage;