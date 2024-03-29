import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_CHEC_KEY_STRIPE);
const Payment = ({checkoutToken, backStep, shippingData, onCaptureCheckout, nextStep}) => {
    const handleSubmit = async (event, elements, stripe) => {
          event.preventDefault();

          if(!stripe || !elements) return;
          const cardElement = elements.getElement(CardElement);

          const { error, paymentMethod } = await stripe.createPaymentMethod({type:"card", card:cardElement});

          if(error) {
              console.log(error);
          } else {
              const orderData = {
                  list_items:checkoutToken.live.line_items,
                  customer:{firstname:shippingData.firseName, lastname:shippingData.lastName, email:shippingData.email},
                  shipping:{
                      name:"Primary", 
                      street:shippingData.address1,
                      town_city:shippingData.city,
                      county_state:shippingData.shippingSubdivision,
                      postal_zip_code:shippingData.zip,
                      country:shippingData.shippingCountry,
                    },
                    fullfillment:{
                        shippping_method:shippingData.shippingOption
                    },
                    payment:{
                        gateway:"stripe",
                        stripe:{
                            payment_method_id:paymentMethod.id
                        }
                    }
 
              }
              onCaptureCheckout(checkoutToken.id, orderData);
              nextStep();
          }
    }
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography varinat="h6" gutterBottom style={{margin:"20px 0"}}>Payament method</Typography>

            <Elements stripe={stripePromise} >
                <ElementsConsumer>
                    {({elements, stripe})=> (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br/> <br />
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                 <Button variant="outlined" onClick={backStep}>Back</Button>
                                 <Button type="submit" variant="contained" color="primary" disabled={!stripe}>Pay {checkoutToken.live.subtotal.formatted} MAD</Button>
                            </div>
                        </form>

                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default Payment
