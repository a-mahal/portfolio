import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import headshot from '../images/Headshot.png';
import TechnicalSkillsSection from '../components/TechnicalSkillsSection';

export default function IntroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      padding: isMobile ? 2 : 6, 
      backgroundColor: 'black'
      // minHeight: '85vh' 
    }}>
      {/* Container for content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        height: '100%',
        gap: isMobile ? 3 : 4
      }}>
        
        {/* Left Section: Text */}
        <Box sx={{ 
          flex: 1,
          paddingRight: isMobile ? 0 : 2,
          order: isMobile ? 2 : 1  // On mobile, put text after image
        }}>
          {/* Intro Text */}
          <Typography
            variant={isMobile ? "body1" : "h5"}
            sx={{ 
              fontWeight: 700, 
              marginBottom: isMobile ? 3 : 4, 
              textAlign: 'center', 
              color: 'white',
              fontSize: isMobile ? '1rem' : 'inherit',
              lineHeight: isMobile ? 1.6 : 'inherit'
            }}
          >
            Thank you for stopping by! I am a motivated full stack developer who enjoys the outdoors 
            and sports. Below are some of the projects I have completed and am currently working on.
          </Typography>
          
          {/* Technical Skills Component */}
          <TechnicalSkillsSection />
        </Box>

        {/* Right Section: Image */}
        <Box sx={{ 
          flex: isMobile ? 'none' : 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          order: isMobile ? 1 : 2,  // On mobile, put image first
          width: isMobile ? '100%' : 'auto'
        }}>
          <img 
            src={headshot}
            alt="Profile or project image"
            style={{
              width: isMobile ? '80%' : '100%',
              maxWidth: isMobile ? '300px' : '600px',
              height: 'auto',
              borderRadius: '8px'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}