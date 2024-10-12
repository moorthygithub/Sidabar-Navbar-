import React from "react";
import { TextField } from "@mui/material";

const ReusableTextField = ({
  label,
  value,
  onChange,
  name,
  type = "text",
  fullWidth = true,
  variant = "outlined",
  marginBottom = "20px",
  InputProps,
  onBlur,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      InputProps={InputProps}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      style={{ marginBottom }}
    />
  );
};

export default ReusableTextField;
