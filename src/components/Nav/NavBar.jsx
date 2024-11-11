import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css'; 
import downArrow from '../../assets/down-arrow.png';
import logoIcon from '../../assets/logo-icon.png';
import profileIcon from '../../assets/profile-image.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

function NavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
      };

  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainContainerWrapper}>
            <div className={styles.subContainer}>
                 <div className={styles.logoContainer}>
                    <img src={logoIcon} alt="logo-icon"/>
                    <h3>Untitled UI</h3>
                 </div>
                 
                  {/* Desktop View */}
                 {!isMobile && (<div className={styles.navOptionsContainer}>
                    <nav><button>Home</button></nav>
                    <nav>
                        <button className={styles.navOptionCustom}>
                            <span>Products</span>
                            <img src={downArrow} alt="down-arrow"/> 
                        </button>
                    </nav>
                    <nav>
                        <button className={styles.navOptionCustom}>
                            <span>Resources</span>
                            <img src={downArrow} alt="down-arrow"/> 
                        </button>
                    </nav>
                    <nav><button>Pricing</button></nav>
                 </div>)}  
            </div>
            
            {/* Desktop Profile Image */}
            {!isMobile && (<div className={styles.profileImage}>
                <img src={profileIcon} alt="profile-icon"/>
            </div>)}


            {/* Mobile View - Menu Icon and Drawer */}
            {isMobile && (
          <>
            <IconButton className={styles.burgerIcon} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" 
            open={drawerOpen} 
            onClose={toggleDrawer(false)}
            sx={{ '& .MuiDrawer-paper': { width: '50vw' } }}>
              <div
                role="presentation"
                onKeyDown={toggleDrawer(false)}
              >
                {/* Nav Options in Drawer */}
                <List>
                    {/* Profile Image and Username in Drawer */}
                    <ListItem className={styles.drawerProfileContainer}>
                        <ListItemAvatar>
                        <Avatar alt="profile-icon" src={profileIcon} className={styles.drawerProfileImage}/>
                        </ListItemAvatar>
                        <ListItemText primary="Username" />
                    </ListItem>
                  <ListItem button className={styles.listItemNavOptions}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button className={styles.listItemNavOptions}>
                    <ListItemText primary="Products" />
                    <img src={downArrow} alt="down-arrow" />
                  </ListItem >
                  <ListItem button className={styles.listItemNavOptions}>
                    <ListItemText primary="Resources" />
                    <img src={downArrow} alt="down-arrow" />
                  </ListItem>
                  <ListItem button className={styles.listItemNavOptions}>
                    <ListItemText primary="Pricing" />
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </>
        )}
        </div>
    </div>
  )
}

export default NavBar