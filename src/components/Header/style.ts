import {Theme} from '@material-ui/core'
import {makeStyles,createStyles} from '@material-ui/core/styles'

export default makeStyles((theme:Theme) => createStyles({
    main:{
        display:'flex',
    },
    linkItems:{
        display:'flex'
    },
    links:{
       listStyle:'none',
       paddingLeft:'20px',
       fontSize:'32px',
       fontWeight:'bold',
       textTransform:'uppercase'
    },
    linkText:{
       textDecoration:'none',
       color:'black'
    },
    color:{
        width:'597px',
        height:'500px',
        backgroundColor:'#ddf8f6',
        marginLeft:'40px'
    },
}))