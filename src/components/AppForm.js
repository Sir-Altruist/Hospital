import React from 'react'
import { Box, Grid } from '@mui/material'
import { Form, Field } from 'react-final-form';
import CustomInputs from './CustomInputs'

const AppForm = () => {
    return (
        <Box component='div'>
                    <Form>
                    <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Field
                        name='name'
                        component={CustomInputs}
                        type='text'
                        required
                         />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Field
                        name='name'
                        component={CustomInputs}
                        type='text'
                        required
                         />
                    </Grid>
                    </Grid>
                    </Form>

            
        </Box>
    )
}

export default AppForm
