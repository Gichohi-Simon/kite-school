import React from 'react';
import useStyles from './style';
import {Modal,Button} from '@material-ui/core';

const SimpleModal: React.FC = () => {
    const classes = useStyles();

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }
    
    function getModalStyle() {
        const top = 0 + rand();
        const left = 0 + rand();
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translater(-${top}%, -${left}%)`,
        }
    }

    const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
         I am mr price model
        </p>
      </div>
    )

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Beginner
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default SimpleModal
