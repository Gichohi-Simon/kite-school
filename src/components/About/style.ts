import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => createStyles({
    main: {
        marginTop:'200px',
        paddingLeft: '50px',
        paddingRight: '50px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop:'70px',
        }
    },
    title: {
        textAlign: 'center',
        fontSize:'25px',
        fontWeight:700,
       
    },
    mainSection: {
        marginTop:'100px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
           display:'block',
           marginTop:'50px',
        }
    },
    heading: {
        fontSize: '32px',
        fontWeight: 700,
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize:'25px'
          }

    },
    container1:{
        paddingLeft:'250px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0px'
          }
    },

    blue: {
        position: 'absolute',
        left: '530px',
        top: '1600px',
        zIndex: -1,
        backgroundColor: '#DDF8F6',
        width: '600px',
        height: '500px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'white',
        }
    },
    container1Text:{
        fontSize:'16px',
        fontWeight:600,
        marginTop:'80px',
        [theme.breakpoints.down('xs')]: {
            marginTop:'40px',
        }
    },

    maps:{
        marginTop:'100px',
        [theme.breakpoints.down('xs')]: {
            marginTop:'50px',
        }
        
    },

    container2Text:{
        fontSize:'16px',
        fontWeight:600,
        marginTop:'20px'
    }
}))