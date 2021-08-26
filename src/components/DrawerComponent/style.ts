import {Theme} from '@material-ui/core'
import {createStyles,makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme:Theme) => createStyles({
   main:{
       display:'flex',
       justifyContent:'flex-end',
   },
   burger:{
      paddingLeft:'150px', 
   },
   list:{
      marginLeft:'30px',
      marginRight:'30px'
   }
}))



