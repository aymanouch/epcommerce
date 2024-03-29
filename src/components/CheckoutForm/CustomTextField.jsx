import React from 'react'
import {TextField, Grid} from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";


const FormInput = ({id, name, label, required}) => {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({field}) => (
                    <TextField
                    fullWidth
                    label={label}
                    required
                    name={name}
                    id={id}
                    control={control}
                />
                )}
                
                
                
            />
        </Grid>
    )
}

export default FormInput
