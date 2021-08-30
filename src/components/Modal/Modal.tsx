import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button,Box,IconButton} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import create from 'zustand'

type ConfirmDialogStore = {
    message:string;
    onSubmit? :() => void;
    close: () => void
}

const useConfirmDialogStore = create<ConfirmDialogStore>((set) => ({
    message:'',
    onSubmit:undefined,
    close:() => set({
        onSubmit:undefined
    })
}))

export const confirmDialog = (message:string, onSubmit: () => void) => {
    useConfirmDialogStore.setState({
        message:message,
        onSubmit
    })
}

const Modal:React.FC = () => {
    const {message,onSubmit,close} = useConfirmDialogStore()

    return (
        <div>
            <Dialog
                open={Boolean(onSubmit)}
                onClose={close}
                maxWidth="sm" 
                fullWidth
            >
                <DialogTitle>
                    Confirm Action
                </DialogTitle>
                <Box 
                    position="absolute"
                    top={0}
                    right={0}
                >
                    <IconButton
                        onClick={close}
                    >
                        <Close />
                    </IconButton>
                </Box>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            if(onSubmit){
                                onSubmit()
                            }
                            close()
                        }}>
                            Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal
