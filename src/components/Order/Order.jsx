import React from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography, Container } from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import FormInput from "../CheckoutForm/CustomTextField";
import useStyle from "./style";
const Order = ({ product , handleEmptyCart}) => {
    const classes = useStyle();
    const methods = useForm();
    const handleSubmit = (e, product) => {
         var d = new Date();
         e.preventDefault();
         const form = document.getElementById("form");
         let productName;
         if(product.line_items!==undefined) {
             productName="";
             for(let i=0;i<product.line_items.length; i++) {
                 if(i!==product.line_items.length - 1) {
                     productName= productName + product.line_items[i].name + "-";
                 } else {
                    productName= productName + product.line_items[i].name;
                 }
             }
         } else {productName=product.name}
         let obj={
             fullname:form.fullname.value,
             phone:form.phone.value,
             address:form.address.value,
             productName:productName,
             productId:product.id,
             price:product.line_items===undefined ? `${product.price.formatted} MAD` : `${product.subtotal.formatted} + MAD`,
             quatitiy:"1",
             date:`${d.getDate()}-${d.getMonth()}-${d.getFullYear()} hours: ${d.getHours()}:${d.getMinutes()}`,
             userAgent:navigator.userAgent
         }
         sendOrder(obj, handleEmptyCart);
    }
    return (
        <Container className={classes.order_page}>
            <Typography variant="h1" gutterBottom className={classes.center_text + " " + classes.title}> Order shipping</Typography>
            {product.line_items===undefined && <div className={classes.imageProduct}>
                <img alt={product.name} src={product.assets[0].url} className={classes.img_width}/>
            </div> }
            
            <br />
            <Grid container spacing={2} className={classes.gridInfo}>
               <Typography variant="h6" gutterBottom> {product.line_items ===undefined ? product.name : "total "} </Typography>
               <Typography variant="h6" gutterBottom>  {product.line_items ===undefined ? product.price.formatted : product.subtotal.formatted} MAD</Typography>
            </Grid>
            <FormProvider {...methods}>
                <form  id="form" onSubmit={(e)=> handleSubmit(e, product)}>
                    <Grid container spacing={3}>
                            <FormInput required id="fullname" name="fullname" label="Full name" />
                            <FormInput required id="phone" name="phone" label="Phone" />
                            <FormInput required id="address" name="address" label="Address" />
                    </Grid>
                    <br /><br />
                    <div>
                    <Button type="submit" variant="contained" color="primary"> demander</Button>
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}
function sendOrder(obj, handleEmptyCart) {
  
  fetch(process.env.REACT_APP_API_KEY_SHEET, {
	method: "POST",
	body: JSON.stringify({"data": obj}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
    console.log("success :)");
    window.location="/";
    handleEmptyCart();
	}
	else{
		// ERROR
    console.error("error with sending Data!")
	}
})
}
export default Order
