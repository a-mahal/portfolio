import React from 'react';
import { Box, Chip, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';

import F1Logo from '../images/F1_logo.png';
import portfolio_img from '../images/portfolio_image.png'
import reelroots from '../images/ReelRoots.mp4'
import sudoku from '../images/sudoku.png';

// Add the missing projects data
const projects = [
  {
    title: 'Portfolio Website',
    description: 'Created a static website utilizing my skills with frontend development, specifically with the following technologies.',
    image: portfolio_img,
    link: '/#/portfolio',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
  {
    title: 'Formula One Dashboard',
    description: 'Template page 2',
    image: F1Logo,
    link: '/#/F1',
    skills: ['React', 'Javascript', 'PostgreSQL', 'AWS', 'Firebase Authenticator', 'DataGrip', 'Node.js'],
  },
  {
    title: 'Full Stack Application',
    description: 'Built a full stack website utilizing a postgrsql database hosted on AWS and user authentication to showcase the trees and film history in San Francisco.',
    image: reelroots,
    link: '/#/reelroots',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
  {
    title: 'Sudoku Solver via Machine Learning',
    description: 'Template page 4',
    image: sudoku,
    link: '/#/sudoku',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
];

export default function PortfolioSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      padding: isMobile ? 2 : 6, 
      backgroundColor: 'black', 
      minHeight: '100vh' 
    }}>
      <Box>
        {/* Section: Portfolio Header */}
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{ 
            fontWeight: 700, 
            marginBottom: isMobile ? 3 : 4, 
            textAlign: 'center', 
            color: 'white',
            fontSize: isSmallMobile ? '2rem' : '3rem'
          }}
        >
          PROJECTS
        </Typography>
      </Box>
      
      {/* Section: Portfolio Cards Container (Vertical Stack) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? 3 : 4,
        }}
      >
        {/* Section: Individual Cards */}
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              maxWidth: isMobile ? '100%' : '1400px',
              height: isMobile ? 'auto' : 'auto',
              display: 'flex',
              flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
              transition: '0.3s',
              '&:hover': { 
                transform: isMobile ? 'none' : 'scale(1.02)' 
              },
              backgroundColor: 'grey.800',
            }}
          >
            {/* Section: Image */}
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                width: isMobile ? '100%' : '50%',
                height: isMobile ? '200px' : '400px',
                objectFit: 'contain',
                padding: isMobile ? 2 : 4,
              }}
            />

            {/* Section: Content */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1,
              minHeight: isMobile ? 'auto' : 'inherit'
            }}>
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: isMobile ? 2 : 3,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{ 
                    fontWeight: 600, 
                    marginBottom: isMobile ? 1.5 : 2,
                    wordBreak: 'break-word', 
                    whiteSpace: 'normal',
                    color: 'white',
                    fontSize: isSmallMobile ? '1.5rem' : 'inherit'
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  color="text.secondary"
                  sx={{ 
                    wordBreak: 'break-word', 
                    whiteSpace: 'normal', 
                    color: 'white',
                    marginBottom: isMobile ? 2 : 0,
                    lineHeight: isMobile ? 1.5 : 'inherit'
                  }}
                >
                  {project.description}
                </Typography>

                {/* Skills/Technologies Section */}
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: isMobile ? 1 : 1.5,
                  marginTop: isMobile ? 1.5 : 2
                }}>
                  {project.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size={isSmallMobile ? 'small' : 'medium'}
                      sx={{
                        backgroundColor: 'tan',
                        color: 'black',
                        fontWeight: 500,
                        fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '0.9rem',
                        '&:hover': {
                          backgroundColor: '#4CAF50',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.2s ease'
                        }
                      }}
                    />
                  ))}
                </Box>

                {/* View Project Button */}
                <Button 
                  size={isMobile ? "medium" : "small"}
                  color="secondary"
                  variant={isMobile ? "outlined" : "text"}
                  onClick={() => window.location.href = `${process.env.PUBLIC_URL}${project.link}`}
                  sx={{
                    paddingY: isMobile ? 1.5 : 2,
                    marginTop: isMobile ? 2 : 1,
                    fontSize: isMobile ? '0.9rem' : 'inherit',
                    borderColor: isMobile ? 'white' : 'inherit',
                    color: isMobile ? 'white' : 'secondary',
                    '&:hover': {
                      borderColor: isMobile ? '#4CAF50' : 'inherit',
                      backgroundColor: isMobile ? 'rgba(76, 175, 80, 0.1)' : 'inherit'
                    }
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}