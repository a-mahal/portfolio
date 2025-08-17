import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material'
import { NavLink } from 'react-router-dom';

// The hyperlinks in the NavBar contain a lot of repeated formatting code so a
// helper component NavText local to the file is defined to prevent repeated code.
function NavText({ href, text, isMain }) {
  return (
    <Typography
      variant={isMain ? 'h5' : 'h7'}
      noWrap
      style={{
        marginRight: '30px',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
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

// Here, we define the NavBar. Note that we heavily leverage MUI components
// to make the component look nice. Feel free to try changing the formatting
// props to how it changes the look of the component.
export default function NavBar() {
  return (
    <AppBar position='static' sx={{ paddingY: 3, backgroundColor: 'black' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Stack Name + Title */}
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '30px' }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
              }}
            >
              ARJUN MAHAL
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: '.2rem',
              }}
            >
              Software Engineer
            </Typography>
          </Box>


          {/* Push the NavText items to the right */}
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
                href="/resume.pdf" 
                download="Arjun_Mahal_Resume.pdf"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                RESUME
              </a>
            </Typography>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
