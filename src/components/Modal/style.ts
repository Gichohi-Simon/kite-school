import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    main:{
       marginTop:'20px',
       marginBottom:'20px'
    },
    paper: {
        
        marginTop:'100px',
        position: 'relative',
        width:'80%',
        // boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
    }
}))