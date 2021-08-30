import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    paper: {
        position: 'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3)
    }
}))