import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    main:{
       marginTop:'20px',
       marginBottom:'20px'
    },
    modalButton:{
        color:'white',
        backgroundColor:' #30d5c8',
        fontSize:'14px',
        [theme.breakpoints.down('xs')]:{
          fontSize:'12px'
        }
    },
    paper: {
        margin:'auto',
        marginTop:'100px',
        position: 'relative',
        width:'80%',
        height:'300px',   
        alignContent:'center',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            height:'300px',
        }
    },
    modalTitle:{
        backgroundColor:'#ddf8f6',
        width:'100%',
        height:'20%',
        textAlign:'center',
      
    },
    modalTitleText:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'10px',
        [theme.breakpoints.down('xs')]:{
           paddingTop:'20px' 
        }
    },
    modalBody:{
        padding:theme.spacing(2,4,3),
        textAlign:'center',
    },
    modalBodyText:{
        fontSize:'16px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'12px'
        }
    },
    modalPrice:{
        textAlign:'center',
        marginTop:'20px'
    },
    modalPriceText:{
        fontSize:'16px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'12px'
        }
    }
}))