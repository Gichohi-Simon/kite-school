import {Theme} from '@material-ui/core';
import { makeStyles,createStyles } from "@material-ui/core/styles";

export default makeStyles((theme:Theme) => createStyles({
    main:{
        display:'flex',
        paddingLeft:'50px',
        paddingRight:'50px',
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'0px',
            paddingRight:'0px',
            display:'block'
        }
    },
    container1:{
       padding:'20px'
    },
    text1:{
        fontSize:'32px',
        lineHeight:'1.2',
        fontWeight:'bold'
    },
    text2:{
        fontSize:'16px',
        lineHeight:'1.8',
        marginTop:'30px',
        marginBottom:'30px'
    },
    container2:{
        webkitBoxShaow:'50px 0px 12px 20px #DDF8F6',
        boxShadow:'50px 0px 12px 20px #DDF8F6;',
       marginTop:'-40px',
       position:'relative',
       left:60,
       bottom:50,
       paddingLeft:'0px',
       paddingRight:'0px',
       [theme.breakpoints.down('sm')]:{
        marginTop:'40px',
        position:'relative',
        left:0,
        bottom:0,
        paddingLeft:'10px',
        paddingRight:'10px',
       }
    }
}))