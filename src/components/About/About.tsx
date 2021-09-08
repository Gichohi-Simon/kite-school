import React from 'react'
import useStyles from './style'
import { Typography } from '@material-ui/core';
import Image from 'next/image';

export default function About() {
    const classes = useStyles()

    return (
        <div className={classes.main} id="about">
            <Typography className={classes.title}>
                About Us
            </Typography>

            <div className={classes.mainSection}>
                <Typography className={classes.heading}>
                    Meet the team!
                </Typography>

                <div className={classes.container1}>
                   
                    <Image
                        src="/assets/tourist-holding-kite-on-beach.jpg"
                        width="600px"
                        height="400px"
                    />
                 
                   
                    <div className={classes.blue}>
                    </div>

                    <Typography className={classes.container1Text}>
                        Diani Kitesurfing shcool was established in 2013
                        with the aim to provide an affordable kiteboarding and surfing holiday for kitesurfers of all ages who are keen to learn the exhilarating sport.
                        Our schools has a team of friendly,proffesional instructors who are always on hand to give you the best possible holiday by teaching you the sport in the safest way possible whilst making sure you have fun a long the way
                    </Typography>

                    <Typography className={classes.container2Text}>
                        We are Open Daily from 9:00am t0 5:00pm.
                    </Typography>
                </div>
            </div>

            <div className={classes.maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5165.378077284496!2d39.55654197665545!3d-4.3621172126795775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18404c027c766b13%3A0xd8dba60878c0f449!2sKenya%20Kitesurfing%20School!5e0!3m2!1sen!2ske!4v1596204395022!5m2!1sen!2ske" width="100%" height="600"  style={{border:'0px'}}  aria-hidden="false" ></iframe>
            </div>
        </div>
    )
}

