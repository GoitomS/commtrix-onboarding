import React from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    businessName: yup.string().required('Business Name is required'),
    email: yup.string().email('Enter a valid email').matches(/@business\.com$/, 'Please enter a valid business email').required('Email is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    businessSize: yup.string().required('Business Size is required'),
    businessType: yup.string().required('Business Type is required'),
});

const CompanyOnboardingForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            businessName: '',
            email: '',
            firstName: '',
            lastName: '',
            businessSize: '',
            businessType: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={formStyle}>
            <Typography variant='h5' fontWeight={"bold"}>Start your Free 14 day trial</Typography>
            <Typography fontSize={13}>No credit card required. Upgrade at the end of the trial.</Typography>
            <Grid sx={{width: "100%"}}>
                <TextField
                    fullWidth
                    size="small"
                    id="businessName"
                    name="businessName"
                    label="Business Name"
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                    helperText={formik.touched.businessName && formik.errors.businessName}
                />
            </Grid>
            <Grid sx={{width: "100%"}}>
                <TextField
                    fullWidth
                    size="small"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>
            <Grid sx={{width: "100%", display: "flex", justifyContent: "center"}} gap={1}>
                <TextField
                    fullWidth
                    size="small"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    size="small"
                    id="lastName"
                    name="lastName"
                    label="last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
            </Grid>
            <Grid sx={{width: "100%"}}>
                <FormControl fullWidth
                size="small" error={formik.touched.businessSize && Boolean(formik.errors.businessSize)}>
                    <InputLabel>Business Size</InputLabel>
                    <Select
                        id="businessSize"
                        name="businessSize"
                        value={formik.values.businessSize}
                        onChange={formik.handleChange}
                        label="Business Size"
                    >
                        <MenuItem value=""><em>Select...</em></MenuItem>
                        <MenuItem value="solo">Solo</MenuItem>
                        <MenuItem value="2-10">2-10 employees</MenuItem>
                        <MenuItem value="11-50">11-50 employees</MenuItem>
                        <MenuItem value="50-200">50-200 employees</MenuItem>
                        <MenuItem value="200+">200+ employees</MenuItem>
                    </Select>
                    {formik.touched.businessSize && formik.errors.businessSize && (
                        <FormHelperText>{formik.errors.businessSize}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid sx={{width: "100%"}}>
                <TextField
                    fullWidth
                    size="small"
                    id="businessType"
                    name="businessType"
                    label="Business Type"
                    value={formik.values.businessType}
                    onChange={formik.handleChange}
                    error={formik.touched.businessType && Boolean(formik.errors.businessType)}
                    helperText={formik.touched.businessType && formik.errors.businessType}
                />
            </Grid>
            <Button variant="contained" fullWidth
            size="small" type="submit" sx={{padding: '10px 20px', textTransform: "none", boxShadow: "none", borderRadius: "30px", backgroundColor: "#27A74A", ":focus": {outline: "none", backgroundColor: ""}}}>
                Submit
            </Button>
        </form>
    );
};

// Styles
const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #D2FFDC',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    gap: '20px'
};


export default CompanyOnboardingForm;
