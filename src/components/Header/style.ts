import {Theme} from '@material-ui/core'
import {makeStyles,createStyles} from '@material-ui/core/styles'

export default makeStyles((theme:Theme) => createStyles({
    main:{
    //    backgroundColor:'#ddf8f6'
    },
    headerWrapper:{
        display:'flex',
        // [theme.breakpoints.down('sm')]:{
        //     display:'block'
        // }
    },
    linkItems:{
        display:'flex'
    },
    links:{
       listStyle:'none',
       paddingLeft:'30px',
       fontSize:'32px',
       fontWeight:'bold',
       textTransform:'uppercase'
    },
    linkText:{
       textDecoration:'none',
       color:'black'
    },
    heroSection:{
        marginTop:'40px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'0px'
        }
    }
}))