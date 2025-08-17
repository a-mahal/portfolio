import { Box, Typography } from '@mui/material';
import headshot from '../images/Headshot.png';


import TechnicalSkillsSection from '../components/TechnicalSkillsSection';


export default function IntroSection() {
  return (
    <Box sx={{ padding: 6, backgroundColor: 'black', minHeight: '80vh' }}>
        {/* ---------- Container for left text and right image ---------- */}
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            height: '100%',
            gap: 4  // Space between text and image
        }}>
            
            {/* ---------- Left Section: Text ---------- */}
            <Box sx={{ 
            flex: 1,
            paddingRight: 2
            }}>
            {/* Intro Text */}
            <Typography
                variant="h5"
                sx={{ 
                fontWeight: 700, 
                marginBottom: 4, 
                textAlign: 'center', 
                color: 'white'
                }}
            >
                Thank you for stopping by! I am a motivated full stack developer who enjoys the outdoors 
                and sports. Below are some of the projects I have completed and am currently working on.
            </Typography>
            
            {/* Technical Skills Component */}
            <TechnicalSkillsSection />
            </Box>

            {/* ---------- Right Section: Image ---------- */}
            <Box sx={{ 
            flex: 1,  // Takes up equal space as text
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <img 
                src={headshot}
                alt="Profile or project image"
                style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                borderRadius: '8px'  // Optional: rounded corners
                }}
            />
            </Box>
            
        </Box>
    </Box>

  );
}