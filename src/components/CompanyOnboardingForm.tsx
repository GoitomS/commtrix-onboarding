import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { createCompany } from "../api/endpoint";
// import {createCompany} from '../api/endpoints.ts'
const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, ''); // Remove all non-digit characters
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
  
    const [, area, prefix, line] = match;
    return [area, prefix, line].filter(Boolean).join('-');
  };
  
const validationSchema = yup.object({
  businessName: yup.string().required("Business Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
  businessSize: yup.string().required("Business Size is required"),
//   businessType: yup.string().required("Business Type is required"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

const CompanyOnboardingForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      email: "",
      firstName: "",
      lastName: "",
      businessSize: "",
      businessType: "",
      agreeToTerms: false,
      phone_number: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await createCompany(values).then(res => {
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={formStyle}>
      <Typography variant="h5" fontWeight={"bold"}>
        Start your 14 day Free trial
      </Typography>
      
      <Grid sx={{ width: "100%" }}>
        <TextField
          fullWidth
          size="small"
          id="businessName"
          name="businessName"
          label="Business Name *"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          error={
            formik.touched.businessName && Boolean(formik.errors.businessName)
          }
          helperText={formik.touched.businessName && formik.errors.businessName}
        />
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <TextField
          fullWidth
          size="small"
          id="email"
          name="email"
          label="Email *"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid sx={{ width: "100%" }}>
      <TextField
  fullWidth
  size="small"
  id="phone_number"
  name="phone_number"
  label="Phone Number"
  value={formik.values.phone_number}
  onChange={(e) => {
    const formatted = formatPhoneNumber(e.target.value);
    formik.setFieldValue('phone_number', formatted);
  }}
  slotProps={{
    input: {
        startAdornment: <Typography fontSize={14} color="white" sx={{backgroundColor: "lightGrey", padding: "3px 5px", borderRadius: "3px", mr: "10px"}}>us</Typography>
    }
  }}
/>
</Grid>
<Grid sx={{ width: "100%" }}>
  <TextField
    fullWidth
    size="small"
    id="address"
    name="address"
    label="Address"
    value={formik.values.address}
    onChange={formik.handleChange}
  />
</Grid>
<Grid sx={{ width: "100%", display: "flex", gap: 1 }}>
  <TextField
    fullWidth
    size="small"
    id="city"
    name="city"
    label="City"
    value={formik.values.city}
    onChange={formik.handleChange}
  />
  <TextField
    fullWidth
    size="small"
    id="state"
    name="state"
    label="State"
    value={formik.values.state}
    onChange={formik.handleChange}
  />
</Grid>
<Grid sx={{ width: "100%", display: "flex", gap: 1 }}>
  <TextField
    fullWidth
    size="small"
    id="zipcode"
    name="zipcode"
    label="Zip Code"
    value={formik.values.zipcode}
    onChange={formik.handleChange}
  />
  <TextField
    fullWidth
    size="small"
    id="country"
    name="country"
    label="Country"
    value={formik.values.country}
    onChange={formik.handleChange}
  />
</Grid>
      <Grid
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        gap={1}
      >
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
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Grid>
      <Grid sx={{ width: "100%", textAlign: "left" }}>
        <FormControl
          fullWidth
          size="small"
          error={
            formik.touched.businessSize && Boolean(formik.errors.businessSize)
          }
        >
          <InputLabel>Business Size *</InputLabel>
          <Select
            id="businessSize"
            name="businessSize"
            value={formik.values.businessSize}
            onChange={formik.handleChange}
            label="Business Size *"
          >
            <MenuItem value="">
              <em>Select...</em>
            </MenuItem>
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
      <Grid sx={{ width: "100%" }}>
        <TextField
          fullWidth
          size="small"
          id="businessType"
          name="businessType"
          label="Business Type"
          value={formik.values.businessType}
          onChange={formik.handleChange}
          error={
            formik.touched.businessType && Boolean(formik.errors.businessType)
          }
          helperText={formik.touched.businessType && formik.errors.businessType}
        />
      </Grid>
      <FormControl
        error={
          formik.touched.agreeToTerms && Boolean(formik.errors.agreeToTerms)
        }
        sx={{ width: "100%" }}
      >
        <Grid container alignItems="center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formik.values.agreeToTerms}
            onChange={formik.handleChange}
          />
          <label htmlFor="agreeToTerms" style={{  fontSize: "14px" }}>
            * I have read and agree to the{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>
            .
          </label>
        </Grid>
        {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
          <FormHelperText>{formik.errors.agreeToTerms}</FormHelperText>
        )}
      </FormControl>
      <Typography fontSize={13} color="success">
       * required fields are marked with an asterisk.
      </Typography>
      <Button
        variant="contained"
        fullWidth
        size="small"
        type="submit"
        sx={{
          padding: "10px 20px",
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "30px",
          backgroundColor: "#27A74A",
          ":focus": { outline: "none", backgroundColor: "" },
        }}
        disabled={!formik.isValid || !formik.dirty}
      >
        Submit
      </Button>
    </form>
  );
};

// Styles
const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "500px",
  marginLeft: "15px",
  marginRight: "15px",
  padding: "20px",
  border: "1px solid #D2FFDC",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  gap: "10px",
  backgroundColor: "#FFF",
};

export default CompanyOnboardingForm;
