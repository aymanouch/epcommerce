import React from 'react'
import useStyle from "./style";
import {Container, Grid, Typography} from "@material-ui/core";
import {Facebook, Instagram, Twitter } from "@material-ui/icons";
import {Link} from "react-router-dom";
import logo from "../../assets/commerce.png";
const Footer = () => {
    const classes = useStyle();
    return (
        <footer className={classes.footer}>
            <Container>
            <Grid container justifyContent="center" spacing={4}>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                    <h2 className={classes.titlesFooter}>product</h2>
                        <ul className={classes.list}>
                            <li><a href="" className={classes.linkItem}>Templates</a></li>
                            <li><a href="" className={classes.linkItem}>Explore</a></li>
                            <li><a href="" className={classes.linkItem}>Features</a></li>
                            <li><a href="https://aymanouch.netlify.app/" target="_blank" className={classes.linkItem}>Website Builder</a></li>
                        </ul>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                    <h2 className={classes.titlesFooter}>COMPANY</h2>
                        <ul className={classes.list}>
                            <li><a href="" className={classes.linkItem}>About Wix</a></li>
                            <li><a href="" className={classes.linkItem}>epcommerce jobs</a></li>
                            <li><a href="" className={classes.linkItem}>Privacy Policy </a></li>
                            <li><a href="https://aymanouch.netlify.app/" target="_blank" className={classes.linkItem}>Contact Us</a></li>
                        </ul>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                    <h2 className={classes.titlesFooter}>COMMUNITY</h2>
                        <ul className={classes.list}>
                            <li><a href="" className={classes.linkItem}>epcommerce blog</a></li>
                            <li><a href="" className={classes.linkItem}>Partner Community</a></li>
                        </ul>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="epcommerce" height="25px" className={classes.image} />
                        </Typography>
                        <p className={classes.paragraphe}>
                            this a website for shopping give the best prices and 
                            the best product you can find in the world just buy anything you want from us we will give you the great se
                        </p>
                        <ul className={classes.mediaIcons}>
                            <li><a href="" className={classes.IconsItem}><Instagram /></a></li>
                            <li><a href="" className={classes.IconsItem}><Facebook /></a></li>
                            <li><a href="" className={classes.IconsItem}><Twitter /></a></li>
                        </ul>
                   </Grid>
            </Grid>
            </Container>
        </footer>
    )
}

export default Footer
