import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Dashboard from '../../Icons/Dashboard';
import Berry from '../../Icons/Berry';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import TableViewIcon from '@mui/icons-material/TableView';
import CustomListItem from './CustomListItem'; 

const Sidebar = ({ isCollapsed, handleDrawerToggle, openDrawer, setIsCollapsed }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md'));

  const handleListItemClick = (index) => {
    setSelectedIndex(index);

    if (isSmallScreen) {
      handleDrawerToggle(); 
    }

    if (!isSmallScreen && isMediumScreen) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      open={isSmallScreen ? openDrawer : true}
      onClose={isSmallScreen ? handleDrawerToggle : undefined}
      sx={{
        width: isSmallScreen ? 260 : isCollapsed ? 60 : 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isSmallScreen ? 260 : isCollapsed ? 60 : 260,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          marginTop: isSmallScreen ? 0 : '88px',
          border: 'none',
          boxShadow: 'none',
          transition: 'width 0.3s ease',
        },
        display: { xs: 'block', sm: 'block' },
      }}
    >
      <List sx={{ padding: '10px' }}>
        <Box
          sx={{
            display: isSmallScreen ? 'flex' : 'none',
            padding: '16px',
            mb: 2,
          }}
        >
          <Berry />
        </Box>

        <Typography
          sx={{
            display:
              isMediumScreen || isSmallScreen || isCollapsed ? 'none' : 'block',
            fontSize: 17,
            mb: 2,
          }}
        >
          Dashboard
        </Typography>

        <CustomListItem
          button
          isSelected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
          component={NavLink}
          to="/dashboard"
          isCollapsed={isCollapsed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{
              ml: 3,
              textAlign: 'left',
              color: '#5e35b1',
            }}
          />
        </CustomListItem>

        <CustomListItem
          button
          isSelected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
          component={NavLink}
          to="/register"
          isCollapsed={isCollapsed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <AppRegistrationIcon sx={{ color: '#5e35b3' }} />
          </ListItemIcon>
          <ListItemText
            primary="Register"
            sx={{
              ml: 3,
              textAlign: 'left',
              color: '#5e35b1',
            }}
          />
        </CustomListItem>

        <CustomListItem
          button
          isSelected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
          component={NavLink}
          to="/table"
          isCollapsed={isCollapsed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <TableViewIcon sx={{ color: '#5e35b3' }} />
          </ListItemIcon>
          <ListItemText
            primary="Table"
            sx={{
              ml: 3,
              textAlign: 'left',
              color: '#5e35b1',
            }}
          />
        </CustomListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
