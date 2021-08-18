import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem';
import useStyles from "./styles";
import {Link} from "react-router-dom";
const Cart = ({ cart, handleUpdateQt, handleRemoveFromCart, handleEmptyCart }) => {
    const classes= useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">
              You have no items in your shopping cart,
              <Link to="/" className={classes.link}>start adding some</Link>!
        </Typography>
    );
    const FieldCart = () => (
              <>
              <Grid container spacing={3}>
                    {cart.line_items.map(item => {
                       return (
                        <Grid item xs={12} sm={4} key={item.id}> 
                           <CartItem item={item} onUpdateQt={handleUpdateQt} onRemoveFromCart={handleRemoveFromCart}/>
                        </Grid>
                       );
                    })}
              </Grid>

              <div className={classes.cardDetails}> 
                  <Typography variant="h4">
                      subtotal : {cart.subtotal.formatted} MAD
                  </Typography>
                  <Button className={classes.emptyButton} size="larger" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                          Empty Cart
                  </Button>
                  <Button component={Link} to="/checkout" className={classes.checkoutButton} size="larger" type="button" variant="contained" color="primary" >
                          Checkout
                  </Button>
              </div>
              </>
    );
    if(!cart.line_items) return "lodaing...";
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FieldCart />}
        </Container>
    )
}

export default Cart
