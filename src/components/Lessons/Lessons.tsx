import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import { packages } from '../../constants/constants';
import Image from 'next/image';
import Modal from '../Modal/Modal';
import {confirmDialog} from '../Modal/Modal';



export default function Lessons() {
    const classes = useStyles()
    const handleSubmit = () => console.log('Okay');
    
    return (
        <div className={classes.main} id="lessons">
            <Typography className={classes.lessonsTitle}>
                Lessons
            </Typography>

            <div>
                <Grid container spacing={3}>
                    {packages.map((lesson) => (
                        <Grid item key={lesson.title} xs={12} md={6} lg={4}>
                        <div className={classes.card}>
                           <Image 
                            src={lesson.image}
                            width="250px"
                            height="200px"
                        />
                         </div>
                        <br />
                        <div className={classes.buttonContainer}>
                        <Button 
                        variant="contained" 
                        className={classes.button}
                        onClick={() => confirmDialog('Are you sure that you would like to delete this post', handleSubmit)}
                        >
                            {lesson.title}
                        </Button>
                        <Modal />
                        </div>
                        <Typography className={classes.description}>
                            {lesson.description}
                        </Typography>
                       </Grid> 
                    ))}
                </Grid>
            </div>

            <div className={classes.lessonVideo}>
                <Image 
                    src="/assets/sand.jpg"
                    width="600px"
                    height="300px"
                />

                <Typography className={classes.lessonText}>
                    Watch one of our clients transition from beginner to pro
                </Typography>
            </div>
        </div>
    )
}
