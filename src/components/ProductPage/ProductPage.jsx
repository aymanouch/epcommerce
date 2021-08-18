import React, {useState, useEffect} from 'react'
import useStyles from "./styles";
import CarouselComponent from './CarouselComponent';
import { Typography, Button } from "@material-ui/core";
import {Order} from "../index";
import $ from "jquery";
const ProductInfo = ({product, onHandleClick}) => {
    const classes=useStyles();
    useEffect(()=> {
        $('html, body').animate({scrollTop:0}, 5);
    })
    return (<div className={classes.product_page} >
        <div className={classes.grid_container__product_page}>
            <div className={classes.left_side__product_page}><CarouselComponent assets={product.assets}/></div>
            <div className={classes.right_side__product_page}>
                <Typography variant="h1" className={classes.product_title}>{product.name}</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={{__html:product.description}} gutterBottom />
                <Typography variant="h2">{product.price.formatted} MAD</Typography>
                <Button color="primary" type="button" variant="contained" size="large" onClick={onHandleClick}>demander</Button>
            </div>
        </div>
    </div>);
};
const ProductPage = ({ product }) => {
    const [orderSteps, setOrderSteps] = useState(0);
    const handleClick = () => {
        setOrderSteps(orderSteps+1);
    }
    if(product===undefined) return "loading ...";
    console.log(product);
    if(orderSteps===0) {
        return <ProductInfo product={product} onHandleClick={handleClick}/>;
    } else if(orderSteps===1){
        return <Order product={product} />
    }
}

export default ProductPage
