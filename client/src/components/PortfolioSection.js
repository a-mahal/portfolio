import React from 'react';
import { Box, Chip, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import F1Logo from '../images/F1_logo.png';
import portfolio_img from '../images/portfolio_image.png'
import reelroots from '../images/ReelRoots.mp4'

// Add the missing projects data
const projects = [
  {
    title: 'Portfolio Website',
    description: 'Created a static website utilizing my skills with frontend development, specifically with the following technologies.',
    image: portfolio_img,
    link: '/project1',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
  {
    title: 'Formula One Dashboard',
    description: 'Template page 2',
    image: F1Logo,
    link: '/formula1',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
  {
    title: 'Full Stack Application',
    description: 'Built a full stack website utilizing a postgrsql database hosted on AWS and user authentication to showcase the trees and film history in San Francisco.',
    image: reelroots,
    link: '/project3',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
  {
    title: 'Sudoku Solver via Machine Learning',
    description: 'Template page 4',
    image: '/static/images/cards/project4.jpg',
    link: '/project4',
    skills: ['Javascript', 'HTML', 'React', 'Material UI'],
  },
];

export default function PortfolioSection() {
  return (
      <Box sx={{ padding: 6, backgroundColor: 'black', minHeight: '100vh' }}>
        <Box>
            {/* ---------- Section: Portfolio Header ---------- */}
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, marginBottom: 4, textAlign: 'center', color: 'white'}}
          >
            PROJECTS
          </Typography>
        </Box>
        

        {/* ---------- Section: Portfolio Cards Container (Vertical Stack) ---------- */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',  // Stack cards vertically
            alignItems: 'center',
            gap: 4, // spacing between cards
          }}
        >
          {/* ---------- Section: Individual Cards ---------- */}
          {projects.map((project, index) => (
            

            <Card
              key={index}
              sx={{
                width: '100%',            // Full width
                maxWidth: '1400px',        // Maximum width for readability
                height: '400px',          // Fixed height for banner style
                display: 'flex',
                flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',     // Horizontal layout
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.02)' }, // Subtle hover effect
                backgroundColor: 'grey.800',
              }}
            >
              {/* ---------- Section: Left Side of card ---------- */}
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: '50%',          // Fixed width for image
                  height: '100%',          // Full height of card
                  objectFit: 'contain',
                  paddingX: 4

                }}
              />

              {/* ---------- Section: Right Side Content ---------- */}
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

                {/* ---------- Section: Card Content / Text ---------- */}
                <CardContent
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 3,
                    textAlign: 'center',    // Left align text
                }}
                >
                <Typography
                    variant="h4"
                    sx={{ 
                    fontWeight: 600, 
                    marginBottom: 2,
                    wordBreak: 'break-word', 
                    whiteSpace: 'normal',
                    color: 'white'
                    }}
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ wordBreak: 'break-word', whiteSpace: 'normal', color: 'white' }}
                >
                    {project.description}
                </Typography>

                {/* TODO: Add a section with the technologies used */}
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1.5,
                    marginTop: 2
                }}>
                    {project.skills.map((skill) => (
                    <Chip
                        key={skill}
                        label={skill}
                        sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        '&:hover': {
                            backgroundColor: '#4CAF50',
                            transform: 'translateY(-2px)',
                            transition: 'all 0.2s ease'
                        }
                        }}
                    />
                    ))}
                </Box>

                {/* This brings you to the project page */}
                <Button 
                    size="small" 
                    color="secondary"
                    textAlign="right"
                    onClick={() => window.location.href = `${process.env.PUBLIC_URL}${project.link}`}
                    sx={{paddingY: 2}}
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