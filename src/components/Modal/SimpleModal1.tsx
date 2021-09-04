import React from 'react';
import useStyles from './style';
import { Modal, Button, Paper, Typography } from '@material-ui/core';

const SimpleModal1: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.main}>
            <Button
                variant="contained"
                onClick={handleOpen}
                className={classes.modalButton}
            >
                Two People Per Instructor
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper
                    elevation={3}
                    variant="outlined"
                    className={classes.paper}
                >
                    <div className={classes.modalTitle}>
                        <Typography className={classes.modalTitleText}>  Two People Per Instructor</Typography>
                    </div>

                    <div className={classes.modalBody}>
                        <Typography>For this package you get to share a trainer with another trainee thereby saving on the training cost. the rates for the 2 people per instructor are as follows:
                            <br />
                            (prices are per person)
                        </Typography>
                        <div className={classes.modalPrice}>
                            <Typography>  €300 9Hrs Lesson Package - 3 Days.</Typography>
                            <Typography> €360 12Hrs Lesson Package - 4 Days.</Typography>
                            <Typography>€450 15 Hrs Lesson Package - 6 Days.</Typography>
                        </div>
                    </div>
                </Paper>
            </Modal>
        </div>
    )
}

export default SimpleModal1
