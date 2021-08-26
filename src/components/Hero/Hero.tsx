import React from 'react'
import useStyles from './style'
import { Button, Typography } from '@material-ui/core'
import Image from 'next/image'

export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <div className={classes.container1}>
                <Typography className={classes.text1}>
                    Welcome to Diani <br/>Kitesurfing School
                </Typography>

                <Typography className={classes.text2}>
                    A place to have fun, adventure,<br />
                    thrill and learn new skills for<br />
                    everyone interested in this rapidly<br/>  growing sport
                </Typography>

                <Button type="button" variant="contained" color="primary">
                    Get in Touch
                </Button>
            </div>
            <div className={classes.container2}>
                <Image 
                    src='/assets/fast.jpg'
                    alt="surfer_image"
                    width='550px'
                    height='400px'
                />
            </div>
        </div>
    )
}
