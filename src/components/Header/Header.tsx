import React from 'react'
import useStyles from './style'
import {
    Tabs, Tab, Typography,useMediaQuery, useTheme, Avatar
} from '@material-ui/core'
import DrawerComponent from '../DrawerComponent/DrawerComponent'
import Image from 'next/image'

export default function Header() {
    const classes = useStyles()

    //BreakPoints
    //gives us an instance of the default theme inside our theme
    const theme = useTheme()

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.main}>
                    <Typography className={classes.logo}>
                        <Image 
                            src="/assets/Surfer1.svg"
                            height="100px"
                            width="200px"
                            alt="surfing_logo"
                        />
                        
                    </Typography>

                    <div className={classes.navLinks}>
                    {isMatch ? <DrawerComponent /> : (
                        <div className={classes.linkItems}>
                            <Tabs>
                                <Tab label="Home" />
                            </Tabs>
                            <Tabs>
                                <Tab label="Lessons" />
                            </Tabs>
                            <Tabs>
                                <Tab label="About Us" />
                            </Tabs>
                            <Tabs>
                                <Tab label="Contact" />
                            </Tabs>
                        </div>
                    )}
                    </div>
        </div>

    )
}

