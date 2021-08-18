import React, {useState, useEffect} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import FormInput from "./CustomTextField";
import {commerce} from "../../lib/commerce";
import {Link} from "react-router-dom";


const AdressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name])=>({id:code, label:name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name])=>({id:code, label:name}));
    const options= shippingOptions.map(sO => ({id:sO.id, label:`${sO.description} - (${sO.price.formatted} MAd)`}));
    console.log(shippingOptions);
    const fetchShippingCountries = async (checkoutTokenId) => {
          const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
          setShippingCountries(countries);
          setShippingCountry(Object.keys(countries)[0])
    }
    const fetchSubdivisions = async (countryCode) => {
          const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

          setShippingSubdivisions(subdivisions);
          setShippingSubdivision(Object.keys(subdivisions)[0]);
    }
    const fetchOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
        console.log(options);
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }
    useEffect(()=> {
          fetchShippingCountries(checkoutToken.id);
    }, []);
    useEffect(()=> {
         if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);
    useEffect(()=> {
         if(setShippingSubdivision) fetchSubdivisions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    return (
        <>
            <Typography variant="h6" gutterBottom> shipping Address </Typography>
            <FormProvider {...methods}>
                 <form onSubmit={methods.handleSubmit((data)=> next({...data, 
                 shippingCountry:shippingCountry,
                 shippingSubdivision:shippingSubdivision,
                 setShippingOption:shippingOption.length > 0 ? shippingOption : ""}))}>
                     <Grid container spacing={3}>
                            <FormInput required name="firstname" label="First name" />
                            <FormInput required name="lastname" label="Last name" />
                            <FormInput required name="adress1" label="Adress" />
                            <FormInput required name="email" label="Email" />
                            <FormInput required name="city" label="City" />
                            <FormInput required name="zip" label="ZIP / Adress code" />
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Country</InputLabel>
                                <Select value={shippingCountry} fullWidth onChange={(e)=> {setShippingCountry(e.target.value)}}>
                                    {countries.map(country => (
                                        <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                    ))}
                                </Select>
                           </Grid>
                           <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Subdivision</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e)=> {setShippingSubdivision(e.target.value)}}>
                                    {
                                        subdivisions.map(sub => (
                                            <MenuItem key={sub.id} value={sub.id}>
                                                      {sub.label}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                          </Grid>
                         {
                             shippingOptions.lentgh > 0  && (<Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={setShippingOption} fullWidth onChange={(e)=> {setShippingSubdivision(e.target.value)}}>
                                  {
                                        options.map(op => (
                                            <MenuItem key={op.id} value={op.id}>
                                                      {op.label}
                                            </MenuItem>
                                        ))
                                    }
                            </Select>
                        </Grid>)
                         }
                     </Grid>
                     <br />
                     <div style={{display:"flex", justifyContent:"space-between"}}>
                              <Button component={Link} to="/cart" variant="outlined"> Back to cart</Button>
                              <Button type="submit" variant="contained" color="primary"> Next</Button>
                     </div>
                 </form>
            </FormProvider>
        </>
    )
}

export default AdressForm
