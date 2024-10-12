import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import {
  Container,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReusableTextField from "../common/ReusableTextField";
import ReusableButton from "../common/ReusableButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(2, "Password should be of minimum 2 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "testuser",
      password: "5678",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      navigate("/dashboard");
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
        padding: 0,
        backgroundColor: grey[200],
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "400px",
          padding: isSmallScreen ? "16px" : "32px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
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
            Hi, Welcome Back
          </Typography>
          <Typography component="h2" variant="h6" sx={{ color: "grey", mb: 2 }}>
            Enter your credentials to continue
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Sign in with Email address
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <ReusableTextField
            label="Email Address/Username"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <ReusableTextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              Remember Me
            </Typography>
            <Typography
              component={Link}
              // to="/forgot-password"
              sx={{ cursor: "pointer", color: "primary.main" }}
            >
              Forgot Password?
            </Typography>
          </Box>
          <ReusableButton
            label="Sign In"
            onClick={formik.handleSubmit}
            fullWidth
          />
          <Typography
            component={Link}
            to="/signup"
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              color: "primary.main",
              mt: 2,
            }}
          >
            Don't have an account?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
