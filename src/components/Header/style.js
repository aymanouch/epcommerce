import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/fashion-img.jpg';
export default makeStyles((theme)=> ({
    header:{
        backgroundImage:`url(${img})`,
        width:"100wh",
        height:"100vh",
        backgroundSize:"cover",
        position:"relative"
    },
    overlay:{
        width:"100%",
        height:"100%",
        background:"#00000061"
    },
    title_intro:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -80%)",
        fontSize:"6rem",
        color:"white",
        textAlign:"center",
        textTransform:"uppercase",
        [theme.breakpoints.down(750)]:{
            fontSize:"3rem",
            margin:"auto",
        }
        

    },
    scrollBtn:{
        position:"absolute",
        top:"80%",
        left:"50%",
        transform:"translate(-50%, 0)",
        border:"2px solid #fff",
        color:"white",
        background:"none",
        outline:"none",
        borderRadius:"4px",
        fontSize:"1.5rem",
        padding:"16px 32px",
        cursor:"pointer",
        zIndex:"1",
        
    },
    overlayBtn:{
        width:0,
        height:"100%",
        background:"#fff",
        display:"block",
        position:"absolute",
        top:0,
        left:0,
        zIndex:'-1'
    }
    
}))