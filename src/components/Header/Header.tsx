import React from 'react'
import useStyles from './style'
import { AppBar, Tabs, Tab, Typography, Toolbar
 } from '@material-ui/core'
import DrawerComponent from '../DrawerComponent/DrawerComponent'

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <AppBar>
                <Toolbar>
                <Typography>
                    Logo
                </Typography>

                <Tabs>
                    <Tab label="Home"/>   
                </Tabs>
                <Tabs>
                    <Tab label="Lessons"/>
                </Tabs>
                <Tabs>
                    <Tab label="About Us"/>
                </Tabs>
                <Tabs>
                    <Tab label="Contact Us"/>
                </Tabs>

                <DrawerComponent />
                </Toolbar>l
            </AppBar>

          
        </div>

    )
} 

