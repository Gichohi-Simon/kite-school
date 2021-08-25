import React from 'react'
import useStyles from './style'
import {
    AppBar, Tabs, Tab, Typography, Toolbar, useMediaQuery, useTheme
} from '@material-ui/core'
import DrawerComponent from '../DrawerComponent/DrawerComponent'

export default function Header() {
    const classes = useStyles()

    //BreakPoints
    //gives us an instance of the default theme inside our theme
    const theme = useTheme()

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.main}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography>
                        Logo
                    </Typography>

                    {isMatch ? <DrawerComponent /> : (
                        <>
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
                                <Tab label="Contact Us" />
                            </Tabs>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>

    )
}

