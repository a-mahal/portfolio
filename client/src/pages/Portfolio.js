import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Chip,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent
} from '@mui/material';

const technologiesUsed = [
  { name: 'React', category: 'Frontend Framework' },
  { name: 'Material-UI', category: 'UI Library' },
  { name: 'React Router', category: 'Navigation' },
  { name: 'JavaScript ES6+', category: 'Programming Language' },
  { name: 'HTML5', category: 'Markup' },
  { name: 'CSS3', category: 'Styling' },
  { name: 'Responsive Design', category: 'Methodology' },
  { name: 'Git', category: 'Version Control' }
];

const features = [
  {
    title: 'Responsive Navigation',
    description: 'Mobile-first navigation with hamburger menu for smaller screens and traditional navigation for desktop users.'
  },
  {
    title: 'Project Showcase',
    description: 'Dynamic project cards with alternating layouts, hover effects, and detailed project information display.'
  },
  {
    title: 'Technical Skills Display',
    description: 'Interactive chips showcasing technical competencies organized by category with hover animations.'
  },
  {
    title: 'Mobile Optimization',
    description: 'Fully responsive design ensuring optimal viewing experience across all device sizes and orientations.'
  }
];

export default function PortfolioProjectPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      backgroundColor: 'black', 
      minHeight: '100vh',
      paddingY: isMobile ? 2 : 4
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Paper 
          elevation={3}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.900',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 2
            }}
          >
            Portfolio Website Development
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1,
            flexWrap: 'wrap',
            marginBottom: 2 
          }}>
            <Chip 
              label="React" 
              sx={{ 
                backgroundColor: '#61DAFB',
                color: 'black',
                fontWeight: 600
              }}
            />
            <Chip 
              label="Material-UI" 
              sx={{ 
                backgroundColor: '#0081CB',
                color: 'white',
                fontWeight: 600
              }}
            />
            <Chip 
              label="JavaScript" 
              sx={{ 
                backgroundColor: '#F7DF1E',
                color: 'black',
                fontWeight: 600
              }}
            />
          </Box>
          
          <Typography 
            variant="subtitle1" 
            sx={{ 
              textAlign: 'center',
              color: 'grey.300',
              fontStyle: 'italic'
            }}
          >
            A modern, responsive web application showcasing development skills and projects
          </Typography>
        </Paper>

        {/* Project Overview */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Project Overview
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            This portfolio website serves as a comprehensive showcase of my development skills and completed projects. 
            Built from the ground up using modern web technologies, the site demonstrates proficiency in frontend 
            development, responsive design principles, and user experience optimization.
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The project began with careful planning of the user interface and user experience, focusing on creating 
            a clean, professional appearance that would effectively communicate technical capabilities while remaining 
            accessible across all device types.
          </Typography>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            Key objectives included implementing a mobile-first responsive design, creating an intuitive navigation 
            system, and developing reusable components that could efficiently display project information and 
            technical skills.
          </Typography>
        </Paper>

        {/* Technical Implementation */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Technical Implementation
          </Typography>
          
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Frontend Architecture
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The application is built using React as the core framework, leveraging functional components and React Hooks 
            for state management. The component architecture follows a modular approach, with reusable components like 
            NavBar, IntroSection, PortfolioSection, and TechnicalSkillsSection that can be easily maintained and updated.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Responsive Design Strategy
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            Material-UI's responsive breakpoint system was extensively utilized to create a mobile-first design. 
            The implementation includes dynamic layout changes, such as converting the desktop navigation to a 
            hamburger menu on mobile devices, and restructuring project cards from horizontal layouts to vertical 
            stacks on smaller screens.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Component Design Patterns
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            Each major section was developed as an independent component with its own styling and logic. The project 
            cards implement alternating layouts for visual interest, while the technical skills section uses a 
            chip-based display with hover animations to create an engaging user interaction experience.
          </Typography>
        </Paper>

        {/* Technologies Used */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Technologies Used
          </Typography>
          
          <Grid container spacing={2}>
            {technologiesUsed.map((tech, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: '#404040', height: '100%' }}>
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ color: 'white', fontWeight: 600, marginBottom: 1 }}
                    >
                      {tech.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'grey.300' }}
                    >
                      {tech.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Key Features */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Key Features Implemented
          </Typography>
          
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ backgroundColor: '#404040', height: '100%' }}>
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      gutterBottom
                      sx={{ color: 'white', fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'grey.300', lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Development Process */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            marginBottom: 4,
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Development Process & Challenges
          </Typography>
          
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Mobile-First Approach
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            One of the primary challenges was ensuring the website provided an excellent user experience across 
            all device sizes. This required implementing responsive breakpoints, adjusting typography scales, 
            and completely restructuring layouts for mobile devices while maintaining the design integrity.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Performance Optimization
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            Attention was paid to performance optimization through efficient component structuring, proper use 
            of React hooks, and implementing smooth animations and transitions that enhance the user experience 
            without compromising loading times.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Code Organization
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            The project structure was organized to promote maintainability and scalability, with separate 
            directories for components, pages, and assets. Each component was designed to be self-contained 
            and reusable, following React best practices and clean code principles.
          </Typography>
        </Paper>

        {/* Future Enhancements */}
        <Paper 
          elevation={2}
          sx={{ 
            padding: isMobile ? 3 : 4, 
            backgroundColor: 'grey.800',
            color: 'white'
          }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 3
            }}
          >
            Future Enhancements
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            Planned improvements include implementing a dark/light theme toggle, adding animation libraries for 
            more sophisticated transitions, and integrating a contact form with backend functionality. Additionally, 
            performance metrics monitoring and SEO optimization are being considered for future iterations.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontStyle: 'italic',
              color: 'grey.300'
            }}
          >
            This portfolio website demonstrates proficiency in modern frontend development practices and serves 
            as a foundation for showcasing future projects and technical growth.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}