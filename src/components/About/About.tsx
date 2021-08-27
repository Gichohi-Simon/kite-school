import React from 'react'
import useStyles from './style'
import { Typography } from '@material-ui/core';
import Image from 'next/image';

export default function style() {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Typography className={classes.title}>
                About Us
            </Typography>

            <div className={classes.mainSection}>
                <Typography className={classes.heading}>
                    Meet the team!
                </Typography>

                <div className={classes.container1}>
                    <Image
                        src="/assets/team.jpg"
                        width="600px"
                        height="400px"
                    />

                    <Typography className={classes.container1Text}>
                        Diani Kitesurfing shcool was established in 2013
                        with the aim to provide an affordable kiteboarding and surfing holiday for kitesurfers of all ages who are keen to learn the exhilarating sport.
                        Our schools has a team of friendly,proffesional instructors who are always on hand to give you the best possible holiday by teaching you the sport in the safest way possible whilst making sure you have fun a long the way
                    </Typography>
                </div>
            </div>

            <div className={classes.container2}>
                <div className={classes.container2Image}>
                    <Image
                        src="/assets/sand.jpg"
                        width="600px"
                        height="400px"
                    />

                    <Typography className={classes.container2Text}>
                        Diani Kitesurfing shcool was established in 2013
                        with the aim to provide an affordable kiteboarding and surfing holiday for kitesurfers of all ages who are keen to learn the exhilarating sport.
                        Our schools has a team of friendly,proffesional instructors who are always on hand to give you the best possible holiday by teaching you the sport in the safest way possible whilst making sure you have fun a long the way
                    </Typography>
                </div>
            </div>
        </div>
    )
}

