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
import Logo from "../../Icons/Berry";
import Profile from "../../Icons/Profile";
import AccountSetting from "../../Icons/AccountSetting";
import LogoutIcon from "../../Icons/LogoutIcon";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const HoverIconButton = styled(IconButton)({
  color: "rgb(94, 53, 177)",
  backgroundColor: alpha("rgb(94, 53, 177)", 0.1),
  borderRadius: "6px",
  "&:hover": {
    color: "white",
    backgroundColor: "rgb(94, 53, 177)",
  },
});

const HoverIconButton1 = styled(IconButton)({
  color: "rgb(33, 150, 243)",
  backgroundColor: alpha("rgb(50, 165, 249)", 0.1),
  borderRadius: "40px",
  "&:hover": {
    color: "rgb(227, 242, 253)",
    backgroundColor: "rgb(33, 150, 243)",
  },
});

const StyledMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    paddingLeft: "4px",
    paddingRight: "4px",
  },
});

const StyledMenuItem = styled((props) => <MenuItem {...props} />)(
  ({ theme, isSelected }) => ({
    width: "311px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    backgroundColor: isSelected ? alpha("#6200ee", 0.1) : "white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: alpha("#6200ee", 0.1),
    },
  })
);

const Header = ({ handleLeftDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        padding: "16px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 0,
            justifyContent: "flex-start",
            display: isSmallScreen ? "none" : "flex",
          }}
        >
          <Logo />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            ml: isSmallScreen ? 0 : 15,
            justifyContent: isSmallScreen ? "flex-start" : "flex-end",
            gap: isSmallScreen ? "16px" : "0",
          }}
        >
          {isSmallScreen ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  gap: "16px",
                }}
              >
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
                  gap: "16px",
                }}
              >
                <HoverIconButton1
                  size="large"
                  aria-label="settings"
                  color="inherit"
                  onClick={handleMenuClick}
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "30px",
                      width: "30px",
                    }}
                  />
                  <SettingsIcon
                    sx={{
                      ml: 2,
                      height: "35px",
                      width: "30px",
                    }}
                  />
                </HoverIconButton1>

                <StyledMenu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      mx: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        Good Morning ,
                      </Typography>
                      <Typography> Jhon Deo</Typography>
                    </Typography>
                    <Typography variant="caption">Project admin</Typography>

                    <StyledMenuItem
                      isSelected={selectedItem === "profile"}
                      onClick={() => handleMenuItemClick("profile")}
                    >
                      <Profile />
                      <Typography sx={{ marginLeft: "10px" }}>
                        {" "}
                        Profile{" "}
                      </Typography>
                    </StyledMenuItem>

                    <StyledMenuItem
                      isSelected={selectedItem === "account"}
                      onClick={() => handleMenuItemClick("account")}
                    >
                      <AccountSetting />
                      <Typography sx={{ marginLeft: "10px" }}>
                        Account Setting
                      </Typography>
                    </StyledMenuItem>
                    <StyledMenuItem
                      isSelected={selectedItem === "logout"}
                      onClick={() => handleLogout()}
                    >
                      <LogoutIcon />
                      <Typography sx={{ marginLeft: "10px" }}>
                        Logout
                      </Typography>
                    </StyledMenuItem>
                  </Box>
                </StyledMenu>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  gap: "16px",
                }}
              >
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
                  gap: "16px",
                }}
              >
                <Box>
                  <HoverIconButton1
                    size="large"
                    aria-label="settings"
                    color="inherit"
                    onClick={handleMenuClick}
                    sx={{
                      padding: "6px",
                    }}
                  >
                    <Avatar
                      sx={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                    <SettingsIcon
                      sx={{
                        ml: 2,
                        height: "35px",
                        width: "30px",
                      }}
                    />
                  </HoverIconButton1>
                  <StyledMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        width: isSmallScreen ? 200 : 350,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        mx: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          Good Morning ,
                        </Typography>
                        <Typography> Jhon Deo</Typography>
                      </Typography>
                      <Typography variant="caption">Project admin</Typography>

                      <StyledMenuItem
                        isSelected={selectedItem === "profile"}
                        onClick={() => handleMenuItemClick("profile")}
                      >
                        <Profile />
                        <Typography sx={{ marginLeft: "10px" }}>
                          {" "}
                          Profile
                        </Typography>
                      </StyledMenuItem>
                      <StyledMenuItem
                        isSelected={selectedItem === "account"}
                        onClick={() => handleMenuItemClick("account")}
                      >
                        <AccountSetting />
                        <Typography sx={{ marginLeft: "10px" }}>
                          Account Settings
                        </Typography>
                      </StyledMenuItem>
                      <StyledMenuItem
                        isSelected={selectedItem === "logout"}
                        onClick={() => handleLogout()}
                      >
                        <LogoutIcon />
                        <Typography sx={{ marginLeft: "10px" }}>
                          Logout
                        </Typography>
                      </StyledMenuItem>
                    </Box>
                  </StyledMenu>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
