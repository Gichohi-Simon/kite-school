import React from 'react';
import useStyles from './style';
import {Modal,Button, Paper} from '@material-ui/core';

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
            <Button variant="contained" onClick={handleOpen}>
                Beginner
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {/* {body} */}
                <Paper
                 elevation={3}
                 variant="outlined"
                 className={classes.paper}
                 >
                    I am mr price modal
                </Paper>
            </Modal>
        </div>
    )
}

export default SimpleModal
