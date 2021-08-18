import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=> ({
    product_page:{
         paddingTop:"80px",
    },
    grid_container__product_page:{
        display:"grid",
        gridTemplateColumns:"50% 50%",
        [theme.breakpoints.down(750)]:{
            gridTemplateColumns:"100%"
        }
    },
    left_side__product_page:{
        
    }, 
    right_side__product_page:{
        paddingLeft:"32px",
        [theme.breakpoints.down(750)]:{
            paddingTop:"32px",
            paddingLeft:"16px",
            paddingRight:"16px"
        }
    },
    product_title:{
        fontWeight:"bold",
        fontSize:"5rem",
        textTransform:"uppercase",
        [theme.breakpoints.down(750)]:{
            fontSize:"3.5rem"
        }
    },
    
}))