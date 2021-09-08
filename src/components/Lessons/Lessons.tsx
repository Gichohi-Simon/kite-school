import {Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import Image from 'next/image';
import SimpleModal from '../Modal/SimpleModal';
import SimpleModal1 from '../Modal/SimpleModal1';
import SimpleModal2 from '../Modal/SimpleModal2';

export default function Lessons() {
    const classes = useStyles()
    return (
        <div className={classes.main} id="lessons">
            <Typography className={classes.lessonsTitle}>
                Lessons
            </Typography>
            <div>        
                <Grid container spacing={6} className={classes.grid}>
                    <Grid item key="1" xs={12} md={6} lg={4}>
                        <div className={classes.card}>
                            <Image
                                src="/assets/kite-surfing-trainee-in-action.jpg"
                                width="230px"
                                height="180px"
                            />
                        </div>
                        <br />
                        <div className={classes.buttonContainer}>
                            <SimpleModal />
                            
                        </div>
                        <Typography className={classes.description}>
                        For this choice you get a personalized one on one trainig session. This lesson is targeted to specific topics requsted by you.
                        </Typography>

                        <div className={classes.blue}>

                        </div>
                    </Grid>

                    <Grid item key="2" xs={12} md={6} lg={4}>
                        <div className={classes.card}>
                            <Image
                                src="/assets/two-men-holding-kite-on-beach.jpg"
                                width="230px"
                                height="180px"
                            />
                        </div>
                        <br />
                        <div className={classes.buttonContainer}>
                            <SimpleModal1 />
                        </div>
                        <Typography className={classes.description}>
                        For this package you get to share a trainer with another trainee thereby saving on the training cost. 
                        </Typography>

                        <div className={classes.blue1}>

                        </div>
                    </Grid>


                    <Grid item key="3" xs={12} md={6} lg={4}>
                        <div className={classes.card}>
                            <Image
                                src="/assets/open-beach-with-kites.jpg"
                                width="230px"
                                height="180px"
                            />
                        </div>
                        <br />
                        <div className={classes.buttonContainer}>
                            <SimpleModal2 />
                        </div>
                        <Typography className={classes.description}>
                        We offer rental of kite surfing equipments at very competitive rates as listed below.
                        </Typography>
                        <div className={classes.blue2}>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
