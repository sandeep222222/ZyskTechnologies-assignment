import React from 'react';
import styles from './ImageCard.module.css';
import topRightArrow from '../../assets/top right arrow.png';

const ImageCard = ({data}) => {
  return (
    <div className={styles.cardContainer}>
        <div><img src={data.image} alt="Blog Post Image" className={styles.cardImage} /></div>
        <div className={styles.cardContext}>
            <p className={styles.cardHeading}>{data.heading}</p>
            <div className={styles.titleContainer}>
                <h2>{data.title}</h2>
                <div><img src={topRightArrow} alt="expand Blog" style={{cursor:'pointer'}}/></div>
            </div>
            <p className={styles.context}>{data.context}</p>
            <div className={styles.bloggerDescription}>
                <div><img src={data.blog.bloggerIcon} alt="blogger pic"/></div>
                <div className={styles.bloggerDescriptionText}>
                    <p>{data.blog.bloggerName}</p>
                    <p>{data.blog.blogDate}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageCard