import React from 'react';
import styles from './BlogsPage.module.css';
import { Button } from '@mui/material';
import Img from '../Img/ImageCard';
import DesignBlogImage from '../../assets/Design Blog Image.png';
import ProductBlogImage from '../../assets/Product Blog Image.png';
import SoftwareBlogImage from '../../assets/Software Blog Image.png';
import OliviaIcon from '../../assets/Olivia.png';
import PhoenixIcon from '../../assets/Phoenix.png';
import LanaIcon from '../../assets/Lana.png';

const blogPostData = [
    {
        image: DesignBlogImage,
        heading: 'Design',
        title: 'UX review presentations',
        context: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
        blog: {
          bloggerIcon: OliviaIcon,
          bloggerName: 'Olivia Rhye',
          blogDate: '20 Jan 2024'
        }
      },
      {
        image:  ProductBlogImage,
        heading: 'Product',
        title: 'Migrating to Linear 101',
        context: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        blog: {
          bloggerIcon: PhoenixIcon,
          bloggerName: 'Phoenix Baker',
          blogDate: '19 Jan 2024'
        }
      },
      {
        image: SoftwareBlogImage,
        heading: 'Software Engineering',
        title: 'Building your API stack',
        context:'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
        blog: {
          bloggerIcon: LanaIcon,
          bloggerName: 'Lana Steiner',
          blogDate: '18 Jan 2024'
        }
      }
]


function BlogPage() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.topTextContainer}>
            <div className={styles.topTextContainerLeft}>
                <p className={styles.ourBlog}>Our blog</p>
                <h2>Lastest blog posts</h2>
                <p className={styles.subHeading}>Tool and strategies modern teams need to help their companies grow.</p>
            </div>
            <div  className={styles.viewAllButton}>
            <Button variant="contained" style={{backgroundColor:'#7F56D9', border:'none',  textTransform: 'none'}}>View all posts</Button>
            </div>
        </div>
        <div className={styles.cardGrid}>
          {blogPostData.map((dataItem, index) => (
                <Img key={index} data={dataItem} />
            ))}
        </div>
        <div className={styles.viewAllButtonMobile}>
        <Button variant="contained" style={{backgroundColor:'#7F56D9', border:'none',  textTransform: 'none'}}>View all posts</Button>
        </div>
    </div>
  )
}

export default BlogPage