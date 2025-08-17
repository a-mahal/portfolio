import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import F1Logo from '../images/F1_logo.png';
import headshot from '../images/Headshot.png';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import TechnicalSkillsSection from '../components/TechnicalSkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import IntroSection from '../components/IntroSection';


export default function HomePage() {
  return (
    <Box>

      <IntroSection/>
    
      <PortfolioSection/>
      
    </Box>



  );
}