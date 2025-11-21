import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Navbar({ onToggle, isDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 240 }}>
      <List>
        {['Products', 'Pricing', 'Blog'].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 700, letterSpacing: '.1rem' }}
          >
            FOUNDER-SUPPORT
          </Typography>

          {/* Desktop links + toggle */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {['Products', 'Pricing', 'Blog'].map(page => (
                <Typography
                  key={page}
                  variant="body1"
                  sx={{ cursor: 'pointer', fontWeight: 500 }}
                >
                  {page}
                </Typography>
              ))}
              <IconButton sx={{ ml: 2 }} onClick={onToggle} color="inherit">
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}

          {/* Mobile menu + toggle */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={onToggle} color="inherit">
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;