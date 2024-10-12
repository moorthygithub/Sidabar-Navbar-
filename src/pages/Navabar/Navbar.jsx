import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, alpha } from "@mui/material/styles";
import logo from "../../Icons/logo.png";
import Profile from "../../Icons/Profile";
import LogoutIcon from "../../Icons/LogoutIcon";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const HoverIconButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(94, 53, 177)",
  backgroundColor: alpha("rgb(94, 53, 177)", 0.1),
  borderRadius: "6px",
  "&:hover": {
    color: "white",
    backgroundColor: "rgb(94, 53, 177)",
  },
}));

const StyledMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    padding: "4px",
  },
});

const StyledMenuItem = styled(MenuItem)(({ theme, isSelected }) => ({
  width: "311px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  backgroundColor: isSelected ? alpha("#6200ee", 0.1) : "white",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: alpha("#6200ee", 0.1),
  },
}));

const Header = ({ handleLeftDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    handleMenuClose();
  };

  const renderMenuItems = () => (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "8px", mx: "10px" }}
    >
      <StyledMenuItem
        isSelected={selectedItem === "profile"}
        onClick={() => handleMenuItemClick("profile")}
      >
        <Profile />
        <Typography sx={{ marginLeft: "10px" }}>Profile</Typography>
      </StyledMenuItem>
      <StyledMenuItem
        isSelected={selectedItem === "logout"}
        onClick={handleLogout}
      >
        <LogoutIcon />
        <Typography sx={{ marginLeft: "10px" }}>Logout</Typography>
      </StyledMenuItem>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        padding: "16px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: isSmallScreen ? "none" : "flex",
            alignItems: "center",
            flexGrow: 0,
          }}
        >
          <img
            src={logo}
            style={{ height: "50px", width: "50px" }}
            alt="Logo"
          />
          <h2>MagMovies</h2>
        </Box>

        <Box sx={{ marginLeft: isSmallScreen ? "0px" : "5rem" }}>
          <HoverIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerToggle}
          >
            <MenuIcon />
          </HoverIconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            ml: isSmallScreen ? 0 : 15,
            justifyContent: isSmallScreen ? "flex-end" : "flex-end",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <HoverIconButton
              size="large"
              aria-label="settings"
              color="inherit"
              onClick={handleMenuClick}
              sx={{ padding: "5px" }}
            >
              <Avatar sx={{ height: "30px", width: "30px" }} />
              <SettingsIcon sx={{ ml: 2, height: "35px", width: "30px" }} />
            </HoverIconButton>
            <StyledMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {renderMenuItems()}
            </StyledMenu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
