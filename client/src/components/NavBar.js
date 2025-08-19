import { AppBar, Container, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import resumePDF from '../assets/resume.pdf';

// The hyperlinks in the NavBar contain a lot of repeated formatting code so a
// helper component NavText local to the file is defined to prevent repeated code.
function NavText({ href, text, isMain, isMobile }) {
  return (
    <Typography
      variant={isMain ? (isMobile ? 'h6' : 'h5') : (isMobile ? 'body2' : 'h7')}
      noWrap
      sx={{
        marginRight: isMobile ? '0px' : '30px',
        marginBottom: isMobile ? '16px' : '0px',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: isMobile ? '.1rem' : '.3rem',
        fontSize: isMobile ? '0.875rem' : 'inherit'
      }}
    >
      <NavLink
        to={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {text}
      </NavLink>
    </Typography>
  )
}

// Mobile menu item component
function MobileNavItem({ href, text, isExternal, onClick }) {
  return (
    <ListItem sx={{ py: 1 }}>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          width: '100%',
        }}
      >
        {isExternal ? (
          <a 
            href={href}
            target="_blank"
            onClick={onClick}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {text}
          </a>
        ) : (
          <NavLink
            to={href}
            onClick={onClick}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {text}
          </NavLink>
        )}
      </Typography>
    </ListItem>
  );
}

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position='static' sx={{ paddingY: isMobile ? 1.5 : 3, backgroundColor: 'black' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Name + Title */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            marginRight: isMobile ? '0px' : '30px',
            flexGrow: isMobile ? 1 : 0
          }}>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: isMobile ? '.1rem' : '.3rem',
              }}
            >
              ARJUN MAHAL
            </Typography>
            <Typography
              variant={isMobile ? "body2" : "subtitle1"}
              sx={{
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: isMobile ? '.1rem' : '.2rem',
              }}
            >
              Software Engineer
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
              <Typography
                variant="h7"
                noWrap
                style={{
                  marginRight: '30px',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                }}
              >
                <a 
                  href="https://www.linkedin.com/in/arjun-mahal" 
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  LINKEDIN
                </a>
              </Typography>
              
              <Typography
                variant="h7"
                noWrap
                style={{
                  marginRight: '30px',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                }}
              >
                <a 
                  href="https://github.com/a-mahal" 
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  GITHUB
                </a>
              </Typography>

              <Typography
                variant="h7"
                noWrap
                style={{
                  marginRight: '30px',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                }}
              >
                <a 
                  href={resumePDF}
                  download="Arjun_Mahal_Resume.pdf"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  RESUME
                </a>
              </Typography>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        <Box sx={{ pt: 2, px: 2 }}>
          <List>
            <MobileNavItem
              href="https://www.linkedin.com/in/arjun-mahal"
              text="LINKEDIN"
              isExternal
              onClick={handleDrawerClose}
            />
            <MobileNavItem
              href="https://github.com/a-mahal"
              text="GITHUB"
              isExternal
              onClick={handleDrawerClose}
            />
            <MobileNavItem
              href={resumePDF}
              text="RESUME (Download)"
              isExternal
              onClick={handleDrawerClose}
            />
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}