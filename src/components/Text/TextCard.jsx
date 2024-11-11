import React from 'react';
import styles from './TextCard.module.css';
import arrowRightMini from '../../assets/arrow-right-mini.png';

const TextCard = ({ data, learnMore = false }) => {
  return (
    learnMore ? (
      <div className={styles.cardContainerLearnMore}>
          <div><img src={data.icon} alt="feature-icon" /></div>
          <h3 className={styles.cardTitle}>{data.title}</h3>
          <p className={styles.cardSubText}>{data.subtext}</p>
          <div className={styles.cardLearnMore}><span>Learn more</span><img src={arrowRightMini} alt="right arrow"/></div>
      </div>
    ) : (
      <div className={styles.cardContainer}>
        <div><img src={data.icon} alt="feature-icon" /></div>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardSubText}>{data.subtext}</p>
      </div>
    )
  );
}

export default TextCard;