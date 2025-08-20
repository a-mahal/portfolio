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
  { name: 'React.js', category: 'Frontend Framework', description: 'User interface and component management' },
  { name: 'Leaflet.js', category: 'Mapping Library', description: 'Interactive map visualization' },
  { name: 'Firebase', category: 'Authentication', description: 'Google and GitHub OAuth integration' },
  { name: 'PostgreSQL', category: 'Database', description: 'Relational database management' },
  { name: 'AWS', category: 'Cloud Platform', description: 'Database hosting and infrastructure' },
  { name: 'Node.js', category: 'Backend Runtime', description: 'Server-side JavaScript execution' },
  { name: 'RESTful APIs', category: 'Architecture', description: 'Backend communication layer' },
  { name: 'DataGrip', category: 'Database Tool', description: 'Database development and management' }
];

const keyFeatures = [
  {
    title: 'Interactive Mapping',
    description: 'Leaflet-based map with marker clustering, custom tree icons, and comprehensive filtering by genre, year, tree age, film rating, and species.'
  },
  {
    title: 'Multi-Modal Authentication',
    description: 'Four authentication methods including traditional login, account creation, Google OAuth, and GitHub OAuth integration.'
  },
  {
    title: 'Tree Discovery System',
    description: 'Detailed tree pages with species information, film connections, comparative statistics, and nearest tree navigation.'
  },
  {
    title: 'Performance Optimization',
    description: 'Materialized views, strategic indexing, and query optimization reducing execution time from 59s to 22s.'
  },
  {
    title: 'Data Integration',
    description: 'Seamless combination of San Francisco street tree data, film location records, and IMDB movie information.'
  },
  {
    title: 'User Progress Tracking',
    description: 'Personal tree collection system allowing users to mark trees as "seen" and track exploration progress.'
  }
];

const performanceMetrics = [
  { query: 'Tree Detail Query', before: '37s', after: '985ms', optimization: 'Materialized Views' },
  { query: 'Tree Diameter Comparison', before: '59s', after: '22s', optimization: 'Indexing + Materialized Views' },
  { query: 'Closest Tree Query', before: '687ms', after: '687ms', optimization: 'No optimization needed' },
  { query: 'Director Filmography', before: '354ms', after: '354ms', optimization: 'No optimization needed' }
];

export default function ReelRootsProjectPage() {
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
            ReelRoots
          </Typography>
          
          <Typography 
            variant={isMobile ? "h6" : "h5"}
            sx={{ 
              textAlign: 'center',
              marginBottom: 3,
              color: 'grey.300',
              fontStyle: 'italic'
            }}
          >
            Connecting San Francisco's Urban Forest with Film History
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1,
            flexWrap: 'wrap',
            marginBottom: 3
          }}>
            <Chip 
              label="React.js" 
              sx={{ 
                backgroundColor: '#61DAFB',
                color: 'black',
                fontWeight: 600
              }}
            />
            <Chip 
              label="PostgreSQL" 
              sx={{ 
                backgroundColor: '#336791',
                color: 'white',
                fontWeight: 600
              }}
            />
            <Chip 
              label="Firebase" 
              sx={{ 
                backgroundColor: '#FFCA28',
                color: 'black',
                fontWeight: 600
              }}
            />
            <Chip 
              label="AWS" 
              sx={{ 
                backgroundColor: '#FF9900',
                color: 'black',
                fontWeight: 600
              }}
            />
          </Box>

          <Typography 
            variant="subtitle1" 
            sx={{ 
              textAlign: 'center',
              color: 'grey.300'
            }}
          >
            Group Project | Database Systems Course
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
            sx={{ lineHeight: 1.7, marginBottom: 2, fontStyle: 'italic' }}
          >
            "I think cinema, movies, and magic have always been closely associated. The very earliest people who 
            made films were magicians." - Francis Ford Coppola
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            ReelRoots is an interactive web application that connects San Francisco's urban forest with its rich 
            film history. Users are invited to explore the city while appreciating both its cultural heritage and 
            natural landscape. This experience is designed to be both fun and educational, a collectible adventure 
            that promotes awareness of San Francisco's urban forest while celebrating the city's important role 
            in film and entertainment.
          </Typography>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            The project demonstrates advanced database design and optimization techniques, combining multiple 
            datasets through complex queries, implementing performance optimizations via indexing and materialized 
            views, and incorporating modern web technologies including React.js, Leaflet.js, and Firebase authentication.
          </Typography>
        </Paper>

        {/* Architecture & Features */}
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
            Key Features
          </Typography>
          
          <Grid container spacing={3}>
            {keyFeatures.map((feature, index) => (
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

        {/* Data Integration */}
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
            Data Integration & Processing
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The project combines three major datasets to create a comprehensive urban exploration experience:
          </Typography>

          <Box sx={{ paddingLeft: 2, marginBottom: 3 }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>1. San Francisco Street Trees Dataset:</strong> Complete inventory of city street trees including 
              plant dates, diameter measurements, GPS coordinates, and species information.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>2. San Francisco Film Locations Dataset:</strong> Historical record of movie filming locations 
              in San Francisco from 1915 onwards, provided by the City of San Francisco.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>3. IMDB Movie Database:</strong> Seven interconnected datasets containing movie ratings, cast 
              information, director details, and genre classifications.
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            <strong>Data Processing Challenges:</strong> The team performed extensive data cleaning including removing 
            records with missing GPS coordinates, converting data types, enforcing primary key constraints, eliminating 
            duplicates, and filtering outliers.
          </Typography>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            <strong>Location Linking Algorithm:</strong> A critical innovation involved creating a locations table that 
            links every tree to its nearest filming location through geospatial calculations, enabling the core functionality 
            of connecting urban forest data with film history.
          </Typography>
        </Paper>

        {/* Database Design */}
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
            Database Architecture
          </Typography>
          
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Schema Design Process
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The database design began with comprehensive Entity-Relationship (ER) diagram development, identifying 
            core entities and their relationships. The team implemented a normalized schema adhering to Third Normal 
            Form (3NF) to minimize redundancy and maintain data integrity.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Database Scale & Performance
          </Typography>
          
          <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#4CAF50', fontWeight: 700 }}>
                    856K
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Movies
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#4CAF50', fontWeight: 700 }}>
                    14.2M
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Actor Records
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#4CAF50', fontWeight: 700 }}>
                    195K
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Street Trees
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#4CAF50', fontWeight: 700 }}>
                    9.7M
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Movie Principals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            The database schema includes eight core tables with complex relationships, supporting both one-to-one 
            and many-to-many associations between movies, locations, trees, and users. All relations maintain 3NF 
            compliance through careful dependency analysis and primary key design.
          </Typography>
        </Paper>

        {/* Performance Optimization */}
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
            Performance Optimization
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 3 }}
          >
            The team implemented comprehensive performance optimizations to handle the large-scale dataset efficiently. 
            Initial query execution times exceeded 15 seconds for complex operations, requiring strategic optimization approaches.
          </Typography>

          <Grid container spacing={2}>
            {performanceMetrics.map((metric, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ backgroundColor: '#404040' }}>
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      sx={{ color: 'white', fontWeight: 600, marginBottom: 1 }}
                    >
                      {metric.query}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1 }}>
                      <Typography variant="body2" sx={{ color: '#ff6b6b' }}>
                        Before: {metric.before}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#4CAF50' }}>
                        After: {metric.after}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'grey.300' }}>
                      Optimization: {metric.optimization}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Optimization Techniques
          </Typography>

          <Box sx={{ paddingLeft: 2 }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Materialized Views:</strong> Pre-computed aggregations for actor ratings and movie rankings, 
              eliminating runtime calculations.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Strategic Indexing:</strong> Targeted indexes on frequently queried columns including actor names 
              and category-specific partial indexes.
            </Typography>
            <Typography variant="body1">
              <strong>Query Restructuring:</strong> Optimization of join orders and selection criteria to minimize 
              data scanning and improve execution plans.
            </Typography>
          </Box>
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
            Technology Stack
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
                      sx={{ color: '#4CAF50', marginBottom: 1 }}
                    >
                      {tech.category}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'grey.300', lineHeight: 1.4 }}
                    >
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Technical Challenges */}
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
            Technical Challenges & Solutions
          </Typography>
          
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Large Dataset Management
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The original movie_principals dataset was too large for the AWS instance constraints. The team resolved 
            this by implementing intelligent filtering, reducing the dataset to only movies present in the database 
            while maintaining data integrity, resulting in a manageable 9.7 million row table.
          </Typography>

          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3, marginBottom: 2 }}
          >
            Frontend Performance Optimization
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            Initial attempts to load all trees simultaneously caused browser crashes due to overwhelming the rendering 
            engine. The solution involved implementing neighborhood-based loading, though this created dense visualization 
            problems where entire neighborhoods appeared as solid green blobs.
          </Typography>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            <strong>Final Solution:</strong> Implementation of map marker clustering significantly improved both 
            performance and user readability, creating an optimal balance between data density and visual clarity.
          </Typography>
        </Paper>

        {/* Authentication System */}
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
            Advanced Authentication Integration
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The project implements Firebase Authentication with multiple OAuth providers, supporting traditional 
            email/password authentication alongside Google and GitHub integration. This required registering the 
            application with both Google Cloud and GitHub developer portals to obtain proper client credentials.
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            The authentication system seamlessly handles user session management, profile retrieval, and secure 
            token handling. Firebase's built-in security features protect against common authentication vulnerabilities 
            while providing a smooth user experience through popup-based OAuth flows.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontStyle: 'italic',
              color: 'grey.300'
            }}
          >
            ReelRoots demonstrates advanced full-stack development capabilities, combining complex database optimization, 
            modern web technologies, and user-centered design to create an engaging exploration platform connecting 
            San Francisco's natural and cultural heritage.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}