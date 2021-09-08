import React from 'react';
import useStyles from './style';
import { Modal, Button, Paper, Typography } from '@material-ui/core';

const SimpleModal2: React.FC = () => {
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
                Kite and Board Rentals
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
                        <Typography className={classes.modalTitleText}>Rental</Typography>
                    </div>

                    <div className={classes.modalBody}>
                        <Typography className={classes.modalBodyText}>We offer rental of kite surfing equipments at very competitive rates as listed below:
                        </Typography>
                        <div className={classes.modalPrice}>
                            <Typography className={classes.modalPriceText}>  €25 1 Hour Full Rig.</Typography>
                            <Typography className={classes.modalPriceText}>€50 Half Day (3Hrs) Full Rig..</Typography>
                            <Typography className={classes.modalPriceText}>€250 5 Days (3Hrs) Full Rig.</Typography>
                            <Typography className={classes.modalPriceText}>€10 Hour Board Only.</Typography>
                            <Typography className={classes.modalPriceText}> €20 Half a Day Board Only.</Typography>
                            <Typography className={classes.modalPriceText}>€40 Daily Board Only.</Typography>
                            <Typography className={classes.modalPriceText}> €150 A week Board Only.</Typography>
                        </div>
                    </div>
                </Paper>
            </Modal>
        </div>
    )
}

export default SimpleModal2
