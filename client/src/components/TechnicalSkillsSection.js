import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const skillsData = {
  Languages: ['Python', 'Java', 'C', 'HTML/CSS', 'SQL', 'Java Script'],
  Frameworks: ['React', 'Node.js', 'Express','Prisma', 'Docker', 'Git', 'Fastify', 'Material UI', 'Tailwind CSS'],
  Backend: ['Node.js', 'MongoDB', 'Postgresql', 'NoSQL', 'AWS', 'Graph']
};

export default function TechnicalSkillsSection() {
  return (
    <Box sx={{ 
      padding: 4,
      backgroundColor: '#2c2c2c',
      borderRadius: 2,
      height: 'fit-content'
    }}>
      {Object.entries(skillsData).map(([category, skills]) => (
        <Box key={category} sx={{ marginBottom: 3 }}>
          {/* Category Header */}
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 600,
              marginBottom: 2,
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              display: 'inline-block'
            }}
          >
            {category}
          </Typography>
          
          {/* Skills Chips */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            marginTop: 2
          }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  backgroundColor: '#404040',
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
        </Box>
      ))}
    </Box>
  );
}