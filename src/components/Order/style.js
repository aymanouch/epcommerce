import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=> ({
    order_page:{
        paddingTop:"72px"
    },
    center_text:{
        textAlign:"center",
    },
    title:{
        [theme.breakpoints.down(750)]:{
            fontSize:"4rem",
        }
    },
    gridInfo:{
        marginTop:"16px",
        marginBottom:"16px",
        justifyContent:"space-between",
    },
    imageProduct:{
        width:"150px",
        height:"150px",
        margin:"auto"
    },
    img_width:{
        maxWidth:"100%",
    },

    
}))