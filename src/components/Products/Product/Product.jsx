import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import {AddShoppingCart, CallMissedSharp} from "@material-ui/icons"
import { Link } from "react-router-dom";
import useStyles from "./styles";
function Product({product, onAddToCart}) {
    const classes=useStyles();
    return (
          <Card className={classes.root}>
                <Link to={`/productpage-${product.name}-${product.id}`}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                </Link>
                <CardContent>
                    <div className={classes.cardContent} >
                        <Typography variant="h5" gutterBottom >
                             {product.name}
                        </Typography>
                        <Typography variant="h6" size={12}>
                             {product.price.formatted} MAD
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions} >
                    <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
                
          </Card>
    )
}

export default Product
