import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => createStyles({
    main: {
        paddingLeft: '50px',
        paddingRight: '50px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px',
            paddingRight: '0px',
            display: 'block'
        }
    },
    Wrapper1: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    container1: {
        padding: '20px'
    },
    text1: {
        fontSize: '32px',
        lineHeight: '1.2',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: '16px',
        lineHeight: '1.8',
        marginTop: '30px',
        marginBottom: '30px'
    },
    button: {
        backgroundColor: '#30d5c8',
        color:'white'
    },
    container2: {
        marginTop: '-40px',
        position: 'relative',
        left: 80,
        bottom: 30,
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
            position: 'relative',
            left: 0,
            bottom: 0,
            paddingLeft: '10px',
            paddingRight: '10px',
        }
    },

    blue: {
        position: 'absolute',
        left: '850px',
        top: '0px',
        zIndex: -1,
        backgroundColor: '#DDF8F6',
        width: '540px',
        height: '560px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'white',
        }
    },

    Wrapper2: {
        marginTop: '100px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    // Wrapper2Img: {
    //     webkitBoxShaow: '-22px 38px 0px 11px #DDF8F6',
    //     boxShadow: '-22px 38px 0px 11px #DDF8F6',
    //     paddingLeft: '0px',
    //     paddingRight: '0px',
    //     [theme.breakpoints.down('sm')]: {
    //         paddingLeft: '10px',
    //         paddingRight: '10px',
    //         webkitBoxShaow: '0px 0px 0px 0px #DDF8F6',
    //         boxShadow: '0px 0px 0px 0px #DDF8F6;',
    //     }
    // },
    // Wrapper2Text: {
    //     fontWeight: 600,
    //     fontSize: '16px',
    //     paddingLeft: '60px',
    //     marginTop: '0px',
    //     [theme.breakpoints.down('sm')]: {
    //         marginTop: '20px',
    //     }
    // }
}))