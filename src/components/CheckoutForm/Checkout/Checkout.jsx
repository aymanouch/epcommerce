import React, { useState, useEffect } from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CricularProgress, Divider, Button} from '@material-ui/core';
import useStyles from "./Styles";
import {commerce} from "../../../lib/commerce";
import AdressForm from "../AdressForm";
import PaymentForm from "../PaymentForm";

const steps = ["shipping adress", "Payment details"];
const Checkout = ({cart,  order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckOutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    useEffect(()=> {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
                console.log(token);
                setCheckOutToken(token);
            } catch (error) {
                console.log(error);
            }
        }
        generateToken();
    }, [cart]);
    
    const nextStep = () => setActiveStep((prevState) => prevState + 1);
    const backStep = () => setActiveStep((prevState) => prevState - 1);
    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => <div>confirmation</div>;
    const Form = () => activeStep === 0 ? <AdressForm checkoutToken={checkoutToken} next={next} /> 
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout}/>;
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
               <Paper className={classes.paper} >
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                       {steps.map(step  => (
                           <Step key={step}>
                              <StepLabel>
                                  {step}
                              </StepLabel>
                           </Step>
                       ))}      
                    </Stepper>
                    {activeStep===steps.lentgh ? <Confirmation /> : checkoutToken && <Form />}
               </Paper>
            </main>
        </>
    )
}

export default Checkout
