import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import F1Logo from '../images/F1_logo.png';
import portfolio_img from '../images/portfolio_image.png'
import reelroots from '../images/ReelRoots.mp4'

// Add the missing projects data
const projects = [
  {
    title: 'My Porfolio',
    description: 'This will be a section explaining the technology I used.',
    image: portfolio_img,
    link: '/project1',
  },
  {
    title: 'Formula One Dashboard',
    description: 'Template page 2',
    image: F1Logo,
    link: '/project2',
  },
  {
    title: 'Trees and Film of San Francisco',
    description: 'Template page 3',
    image: reelroots,
    link: '/project3',
  },
  {
    title: 'Project 4',
    description: 'Template page 4',
    image: '/static/images/cards/project4.jpg',
    link: '/project4',
  },
];

export default function PortfolioSection() {
  return (
      <Box sx={{ padding: 6, backgroundColor: 'grey.900', minHeight: '100vh' }}>
        <Box>
            {/* ---------- Section: Portfolio Header ---------- */}
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, marginBottom: 4, textAlign: 'left', color: 'white'}}
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
                {/* ---------- Section: Card Action Area (clickable content) ---------- */}
                <CardActionArea
                  href={`${process.env.PUBLIC_URL}${project.link}`}
                  sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'stretch'
                  }}
                >
                  {/* ---------- Section: Card Content / Text ---------- */}
                  <CardContent
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: 3,
                      textAlign: 'left',    // Left align text
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
                  </CardContent>
                </CardActionArea>

                {/* ---------- Section: Card Actions (Button) ---------- */}
                <CardActions sx={{ padding: 2, justifyContent: 'flex-end' }}>
                  <Button size="small" color="secondary">
                    View Project
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
  );
}