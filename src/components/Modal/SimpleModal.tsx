import React from 'react';
import useStyles from './style';
import { Modal, Button, Paper, Typography } from '@material-ui/core';

const SimpleModal: React.FC = () => {
    const classes = useStyles();
    const [open,setOpen] = React.useState(false);

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
                One one Kite Lessons
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
                     <Typography className={classes.modalTitleText}>One on One Kite Lessons</Typography>
                     </div>
                   
                   <div className={classes.modalBody}>
                   <Typography>For this choice you get a personalized one on one trainig session. This lesson is targeted to specific topics requsted by you. Below are our competitive prices:</Typography>
                   <div className={classes.modalPrice}>
                   <Typography> €60 1 Hr Lessons</Typography>
                    <Typography>€80 2 Hrs Lessons</Typography>
                   </div>
                   </div>
                </Paper>
            </Modal>
        </div>
    )
}

export default SimpleModal
