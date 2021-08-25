import { Theme } from "@material-ui/core";
import { createStyles,makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme:Theme) => createStyles({
   main:{
       width:'80%',
       textAlign:'center',
       margin:'auto',
       maxWidth:'1200px',
      [theme.breakpoints.down('sm')]:{
        width:'100%'
    }
   } 
}))

