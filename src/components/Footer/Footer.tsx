import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import useStyles from './style'
import Link from 'next/link'
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall";
import {IoLogoFacebook} from "@react-icons/all-files/io/IoLogoFacebook";
import {ImInstagram} from "@react-icons/all-files/im/ImInstagram";

export default function Footer() {
    const classes = useStyles()

    return (
        <div className={classes.main} id="contact">
            <Typography className={classes.title}>
                Contact Us
            </Typography>

            <div>
                <Grid container spacing={6} className={classes.mainGrid}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Typography className={classes.gridText}>
                           Interact with us
                        </Typography>

                        <Typography className={classes.gridDescription}>
                            We look forward to seeing you soon.
                            Have a nice day.
                        </Typography>

                        <List>
                            <ListItem className={classes.list}>
                                <ListItemText>
                                    <a href="https://www.facebook.com/pg/goodluckkite/ads/"> <IoLogoFacebook color="#4267B2" className={classes.icons} /></a>
                                </ListItemText>
                                <ListItemText>
                                    <a href="https://www.instagram.com/kenya_kitesurfing_school/">
                                    <ImInstagram  color="#fbad50" className={classes.icons} />
                                    </a>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Typography className={classes.gridText}>
                            Useful Links
                        </Typography>

                        <List>
                            <ListItem className={classes.list}>
                                <ListItemText>
                                    <Link href="/">
                                        <a className={classes.siteIcons}>
                                        Home
                                        </a>
                                    </Link>
                                </ListItemText>
                                <ListItemText>
                                    <Link href="#lessons">
                                    <a className={classes.siteIcons}>
                                    Lessons
                                    </a>
                                    </Link>
                                </ListItemText>
                                <ListItemText>
                                    <Link href="#about">
                                    <a className={classes.siteIcons}>
                                    About
                                    </a>
                                    </Link>
                                </ListItemText>
                                <ListItemText>
                                    <Link href="#contact">
                                    <a className={classes.siteIcons}>
                                    Contacts
                                    </a>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Typography className={classes.gridText}>
                            Contacts
                        </Typography>

                        <List>
                            <ListItem className={classes.list}>
                                <ListItemText >
                                <GoLocation color="#FF6347"/> Diani
                                </ListItemText>
                                <ListItemText >
                                <AiOutlineMail color="#FFA500"/> Diani
                                </ListItemText>
                                <ListItemText>
                                <FiPhoneCall /> +254 721 173 699
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.footer}>
                <Typography className={classes.footerText}>
                Developed By <a href="/" className={classes.footerLink}>Gichohi Simon</a>
                </Typography>
            </div>
        </div>
    )
}

