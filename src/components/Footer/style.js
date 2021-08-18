import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=> ({
   footer:{
       width:"100%",
       height:"auto",
       paddingTop:"8rem",
       paddingBottom:"4rem"
   },
   titlesFooter:{
       fontFamily:'"anton", "arial", "sans-srief"',
   },
   list:{
       padding:0,
       margin:0,
       listStyle:"none",
       lineHeight:"2em",
   },
   linkItem:{
       textDecoration:"none",
       color:"#7b7b7b"
   },
   paragraphe:{
       lineHeight:"1.8em",
       color:"#3c3c3c",
       fontFamily:'"arial", "sans-srief"'
   },
   mediaIcons:{
       listStyle:"none",
       display:"flex",
       justifyContent:"left",
       padding:"0",
       margin:"16px 0"
   },
   IconsItem:{
       color:"#000",
       margin:"0 8px 0 0",
       textDecoration:"none",
       fontSize:"2,5em"
       
   }
    
}))