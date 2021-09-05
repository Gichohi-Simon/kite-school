import {createStyles,makeStyles,Theme} from '@material-ui/core/styles'

export default makeStyles((theme:Theme) => createStyles({
    main: {
        marginTop:'200px',
        paddingLeft: '50px',
        paddingRight: '50px',
        marginBottom:'50px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop:'70px',
            marginBottom:'50px',
        }
    },
    title:{
        textAlign:'center',
        fontSize:'25px',
        fontWeight:700,
    },
    mainGrid:{
        marginTop:'50px',
        [theme.breakpoints.down('sm')]: {
            marginBottom:'0px',
        }
    },
    gridText:{
        fontSize:'16px',
        fontWeight:600,
        textAlign:'center',
        textTransform:'uppercase'
        
    },
    gridDescription:{
        marginTop:'20px',
        fontSize:'16px',
        fontWeight:600,
        textAlign:'center',
      
    },
    list:{
        display:'block',
        textAlign:'center',
    },
    siteIcons:{
        textDecoration:'none',
    },
    icons:{
        fontSize:'20px'
    },
    footer:{
        textAlign:'center',
    },
    footerText:{
        marginTop:'50px',
        fontSize:'16px',
        fontWeight:700,
        [theme.breakpoints.down('sm')]: {
            marginTop:'20px',
        }
    }
}));