import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => createStyles({
    main: {
        paddingLeft: '50px',
        paddingRight: '50px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
        }
    },
    title: {
        textAlign: 'center',
        fontSize:'25px',
        fontWeight:700,
       
    },
    mainSection: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
           display:'block'
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
    container1Text:{
        fontSize:'16px',
        fontWeight:600,
        marginTop:'50px'
    },
    container2:{
       display:'flex',
       marginTop:'100px',
       [theme.breakpoints.down('sm')]: {
        display:'block'
      } 
       
    },
    container2Image:{
        // backgroundColor:'red',
        paddingRight:'100px',
        display:'flex'
    },
    container2Text:{
       paddingLeft:'250px',
       fontSize:'16px',
       fontWeight:600,
       marginTop:'20px',
       [theme.breakpoints.down('sm')]: {
        paddingLeft:'0px'
      } 
    }
}))