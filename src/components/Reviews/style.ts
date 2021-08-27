import {makeStyles, createStyles} from "@material-ui/core/styles"
import {Theme} from '@material-ui/core'

export default makeStyles((theme:Theme) => createStyles({
    main:{
        paddingRight:'50px',
        padingLeft:'50px',
        [theme.breakpoints.down('sm')]:{
            paddingRight:'0px',
            padingLeft:'0px',
        }
    },
    mainHeading:{
        fontSize:'25px',
        fontWeight:'bold',
        textAlign:'center'
    },
    reviews:{
        marginTop:'80px',
        marginLeft:'40px'
    },
    name:{
        fontSize:'16px',
        marginBottom:'20px',
        color:'#78E3DA',
        fontWeight:700
    },
    review:{
        fontSize:'16px',
        fontWeight:600,
        marginBottom:'20px',
    },
    rating:{
        color:'#78E3DA'
    }
}))

