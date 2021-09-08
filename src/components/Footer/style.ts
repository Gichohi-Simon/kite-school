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
        [theme.breakpoints.down('sm')]: {
            fontSize:'20px',
        }
        
    },
    mainGrid:{
        marginTop:'50px',
        [theme.breakpoints.down('sm')]: {
            marginTop:'0px',
        }
    },
    gridText:{
        fontSize:'16px',
        fontWeight:600,
        textAlign:'center',
        textTransform:'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
        }
    },
    gridDescription:{
        marginTop:'20px',
        fontSize:'16px',
        fontWeight:600,
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
        }
    },
    list:{
        display:'block',
        textAlign:'center',
    },
    siteIcons:{
        fontSize:'16px',
        textDecoration:'none',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
        }
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
            fontSize:'14px',
        }
    },
    footerLink:{
        textDecoration:'none',
        fontSize:'16px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
        }
    }
}));