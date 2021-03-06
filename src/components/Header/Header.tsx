import React from 'react'
import useStyles from './style'
import {
    Typography, useMediaQuery, useTheme
} from '@material-ui/core'
import DrawerComponent from '../DrawerComponent/DrawerComponent'
import Image from 'next/image'
import Hero from '../Hero/Hero';

export default function Header() {
    const classes = useStyles()
    //BreakPoints
    //gives us an instance of the default theme inside our theme
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={classes.main}>
            <div className={classes.headerWrapper}>
            <Typography>
                <Image
                    src="/assets/Surfer1.svg"
                    height="100px"
                    width="200px"
                    alt="surfing_logo"
                />
            </Typography>

            <div>
                {isMatch ? <DrawerComponent /> : (
                    <div >
                        <ul className={classes.linkItems}>
                            <li className={classes.links}>
                                <Typography>
                                    <a href="/" className={classes.linkText}>Home</a>
                                </Typography>
                            </li>
                            <li className={classes.links}>
                                <Typography>
                                    <a href="#lessons" className={classes.linkText}>Lessons</a>
                                </Typography>
                            </li>
                            <li className={classes.links}>
                                <Typography >
                                    <a href="#about" className={classes.linkText}>About</a>
                                </Typography>
                            </li>
                            <li className={classes.links}>
                                <Typography >
                                    <a href="#contact" className={classes.linkText}>Contact</a>
                                </Typography>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            </div>
            <div className={classes.heroSection}>
            <Hero />
            </div>
          
        </div>

    )
}

