import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();
  
  const routes = [
    { label: 'Home', path: '/' },
    { label: 'Add Book', path: '/add-book' },
  ];

  const currentRoute = routes.findIndex((route) => route.path === location.pathname);

  const styles = {
    content: {
      flexGrow: 1, 
      display: 'flex', 
      justifyContent: 'flex-end',
    },
    tab: {
      color: 'white',
      textDecoration: 'none',
    },
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={styles.content}>
          <Tabs value={currentRoute} indicatorColor="secondary" textColor="inherit">
            {routes.map((route, index) => (
              <Tab
                key={index}
                label={route.label}
                component={Link}
                to={route.path}
                sx={styles.tab}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
