'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar as OriginalAppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { RxHamburgerMenu } from 'react-icons/rx';

const title = 'ureo.jp';
const drawerWidth = 240;
const navItems = {
  Home: '/',
  Apps: '/apps',
  Skills: '/skills',
};

interface AppBarProps {
  title: string;
  children?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = (props) => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {Object.keys(navItems).map((key) => (
          <Link key={key} href={navItems[key as keyof typeof navItems]}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={key} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <OriginalAppBar component="nav" sx={{ bgcolor: '#111' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <RxHamburgerMenu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.keys(navItems).map((key) => (
              <Link key={key} href={navItems[key as keyof typeof navItems]}>
                <Button sx={{ color: '#fff' }}>
                  {key}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </OriginalAppBar>
      <Box component="nav">
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h4" align="center" mt={2} mb={3}>{props.title}</Typography>
        {props.children}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          m="4rem auto 2rem">
          &copy; ureo All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};
