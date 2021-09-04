import {createStyles,makeStyles} from '@material-ui/core/styles'
import {Theme} from '@material-ui/core'

export default makeStyles((theme:Theme) =>createStyles({
    main:{
        marginTop:'200px',
        paddingLeft:'50px',
        paddingRight:'50px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'70px',
            paddingLeft:'10px',
            paddingRight:'10px',
        }
    },
    grid:{
        marginTop:'100px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'50px'
        }
    },
    lessonsTitle:{
        fontSize:'25px',
        fontWeight:700,
        textAlign:'center',
        marginBottom:'80px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'40px',
            marginBottom:'40px',
        }
    },
    card:{
        marginTop:'0px',
        marginBottom:'20px',
        paddingLeft:'0px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'30px',
            marginBottom:'20px',
            paddingLeft:'50px',
        }
       
    },
    buttonContainer:{
        textAlign:'start',
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
        }
    },

    description:{
       fontWeight:600, 
    },

    blue: {
        position: 'absolute',
        left: '300px',
        top: '860px',
        zIndex: -1,
        backgroundColor: '#DDF8F6',
        width: '230px',
        height: '250px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'white',
        }
    },
    blue1: {
        position: 'absolute',
        left: '680px',
        top: '860px',
        zIndex: -1,
        backgroundColor: '#DDF8F6',
        width: '230px',
        height: '250px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'white',
        }
    },
    blue2:{
        position: 'absolute',
        left: '1060px',
        top: '860px',
        zIndex: -1,
        backgroundColor: '#DDF8F6',
        width: '230px',
        height: '250px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'white',
        }
    },
}))