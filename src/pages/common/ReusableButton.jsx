import React from "react";
import { Button } from "@mui/material";

const ReusableButton = ({
  label,
  onClick,
  color = "primary",
  variant = "contained",
  fullWidth,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
