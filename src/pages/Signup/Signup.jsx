import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  Checkbox,
  InputAdornment,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReusableTextField from "../common/ReusableTextField";
import ReusableButton from "../common/ReusableButton";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPasswordStrength(
      password.length >= 8
        ? password.match(/[A-Z]/) && password.match(/\d/)
          ? "strong"
          : "medium"
        : "weak"
    );
    formik.handleChange(event);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    agree: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agree: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.grey[200],
        width: "100vw",
        px: isSmallScreen ? 1 : 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          p: isSmallScreen ? 2 : 4,
          padding: isSmallScreen ? "16px" : "32px",
          width: isSmallScreen ? "100%" : "400px",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          textAlign: "center",
          margin: isSmallScreen ? "5px" : "50px",
        }}
      >
        <Typography
          component="h1"
          variant={isSmallScreen ? "h5" : "h4"}
          sx={{
            color: "#673ab7",
            mb: 1,
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          Sign Up
        </Typography>
        <Typography component="h2" variant="h6" sx={{ color: "grey", mb: 2 }}>
          Enter your credentials to continue
        </Typography>

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <ReusableTextField
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Added onBlur for validation
                name="firstName"
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                } // Check for error
                helperText={formik.touched.firstName && formik.errors.firstName} // Helper text
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ReusableTextField
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Added onBlur for validation
                name="lastName"
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                } // Check for error
                helperText={formik.touched.lastName && formik.errors.lastName} // Helper text
              />
            </Grid>
          </Grid>
          <ReusableTextField
            label="Email Address/Username"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            error={formik.touched.email && Boolean(formik.errors.email)} // Check for error
            helperText={formik.touched.email && formik.errors.email} // Helper text
          />
          <ReusableTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={handlePasswordChange}
            onBlur={formik.handleBlur}
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)} // Check for error
            helperText={formik.touched.password && formik.errors.password} // Helper text
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {passwordStrength && (
            <Typography
              variant="body2"
              sx={{
                color: passwordStrength === "strong" ? "green" : "red",
                mb: 2,
              }}
            >
              Password is {passwordStrength}
            </Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Checkbox
              id="agree"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.agree && Boolean(formik.errors.agree)} // Check for error
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              I agree to the terms and conditions
            </Typography>
          </Box>
          <ReusableButton label="Sign Up" fullWidth></ReusableButton>
          <Divider sx={{ my: 2 }} />
          <Typography
            component={Link}
            to="/login"
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              color: "primary.main",
              mt: 2,
              textAlign: "center",
            }}
          >
            Already have an account?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
