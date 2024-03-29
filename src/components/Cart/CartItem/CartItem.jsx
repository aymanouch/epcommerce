import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './Styles';
const CartItem = ({item, onUpdateQt, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <Card>
           <CardMedia image={item.media.source} alt={item.name} className={classes.media}/> 
           <CardContent className={classes.cardContent}>
               <Typography varinat='h4'>
                   {item.name}
               </Typography>
               <Typography varinat='h5'>
                   {item.line_total.formatted} MAD
               </Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
                  <div className={classes.buttons}>
                  <Button type="button" size="small" onClick={()=> onUpdateQt(item.id, item.quantity - 1)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button type="button" size="small" onClick={()=> onUpdateQt(item.id, item.quantity + 1)}>+</Button>
                  </div>
                  <Button variant='contained' type="button" color="secondary" onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
           </CardActions>

        </Card>
    )
}

export default CartItem
