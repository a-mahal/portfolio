import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// You'll need to add your Sudoku image to your images folder
// import SudokuImage from '../images/Sudoku_Image.png';

const codeSnippet = `function AC-3(csp) # return the CSP, possibly with reduced domains
    inputs: csp, a binary csp with variables {X1, X2, ..., Xn}
    local variables: queue, a queue of arcs initially the arcs in csp
    while queue is not empty do:
        (Xi, Xj) = queue.pop()
        if REMOVE-INCONSISTENT-VALUES(Xi, Xj):
            for each Xk in NEIGHBORS[Xi] – {Xj}:
                add (Xk, Xi) to queue

function REMOVE-INCONSISTENT-VALUES(Xi, Xj) # return true iff we remove a value
    removed = false
    for each x in DOMAIN[Xi]:
        if no value y in DOMAIN[Xj] allows (x,y) to satisfy the constraints between Xi and Xj:
            delete x from DOMAIN[Xi]
            removed = True
    return removed`;

export default function SudokuSolverPage() {
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
            Sudoku Game Solver
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Chip 
              label="Python" 
              sx={{ 
                backgroundColor: '#4CAF50',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem' 
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
            October 20, 2024
          </Typography>
        </Paper>

        {/* Description Section */}
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
            Description of Game/Rules
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            Sudoku is a logic-based puzzle game played on a 9×9 grid divided into nine 3×3 subgrids, 
            or "boxes." Each row, column, and box must contain all numbers from 1 to 9 without repetition. 
            The puzzle begins with some cells pre-filled with numbers, called "givens," which serve as 
            clues to help players complete the grid. The challenge of Sudoku lies in deducing the values 
            of the empty cells based on the constraints imposed by the existing numbers.
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 3 }}
          >
            The objective of Sudoku is to fill every empty cell so that each number from 1 to 9 appears 
            only once in each row, column, and box. Players must use logic and process of elimination 
            rather than guesswork, analyzing the grid to deduce where each number can or cannot go. 
            Sudoku puzzles come in various levels of difficulty, ranging from easy, which require 
            straightforward deductions, to hard or expert levels, which may need advanced strategies to solve.
          </Typography>

          {/* Placeholder for Sudoku image - uncomment and adjust when you add the image */}
          {/* 
          <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 3 }}>
            <img 
              src={SudokuImage} 
              alt="Sudoku puzzle example" 
              style={{ 
                maxWidth: '300px', 
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </Box>
          */}
        </Paper>

        {/* Notable Aspects Section */}
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
            Notable Aspects of the Game Environment
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            This game setup can be represented as a constraint satisfaction problem, meaning we can set up 
            the environment with formal declarations of what is allowed and what is not allowed (constraints) 
            and implement a simple general purpose algorithm to follow these rules until it arrives at a solution. 
            Note that in these types of games, there is only one solution to the problem, therefore we do not 
            have to consider if the solution is optimal, just simply whether it is correct.
          </Typography>
          
          <Typography 
            variant="body1" 
            
            sx={{ lineHeight: 1.7, marginBottom: 2 }}
          >
            More formally, a CSP consists of:
          </Typography>

          <Box sx={{ paddingLeft: 2, marginBottom: 2 }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              • Finite set of variables X₁, X₂, ..., Xₙ
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              • Nonempty domain of possible values for each variable D₁, D₂, ..., Dₙ where Dᵢ = v₁, ..., vₖ
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              • Finite set of constraints C₁, C₂, ..., Cₘ
            </Typography>
            <Typography variant="body2" sx={{ paddingLeft: 2, color: 'grey.300' }}>
              Each constraint Cᵢ limits the values that variables can take, e.g., X₁ ≠ X₂
            </Typography>
            <Typography variant="body2" sx={{ paddingLeft: 2, color: 'grey.300' }}>
              A state is defined as an assignment of values to some or all variables.
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            
            sx={{ lineHeight: 1.7 }}
          >
            To clarify how this relates to this game, each position on the 9×9 board is a variable. 
            All variables given from the start will have a domain the size of one that consists of the 
            given number. All other variables will have a domain size of 9 portrayed as a set 1, 2, 3, 4, 5, 6, 7, 8, 9.
          </Typography>
        </Paper>

        {/* Algorithm Section */}
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
            Algorithm Used to Solve Sudoku
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7, marginBottom: 3 }}
          >
            Once we have the game board defined through the formal definition of a CSP, we can begin 
            implementing the algorithm AC-3 to solve. AC-3 in this situation takes pairs of variables 
            that would need to be checked for constraint issues, and conduct testing on their relationship. 
            If there is a domain in the first of the pair such that there is no domain for the second 
            pair to satisfy any constraints, then the domain element of the first pair is removed. 
            This is conducted until the queue of arch pairs to check is empty. Shown below is the 
            pseudo code for the algorithm.
          </Typography>

          <Box sx={{ marginY: 3 }}>
            <SyntaxHighlighter 
              language="python" 
              style={vscDarkPlus}
              customStyle={{
                borderRadius: '8px',
                fontSize: isMobile ? '0.8rem' : '0.9rem'
              }}
            >
              {codeSnippet}
            </SyntaxHighlighter>
          </Box>
        </Paper>

        {/* Improvements Section */}
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
            Handling "Hard/Extreme" Difficulty Sudoku Games
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ lineHeight: 1.7 }}
          >
            In the implementation so far, it is possible that we end up with variables that have a domain 
            greater than one, meaning the game is unfinished. To combat this issue, we will add another 
            layer of complexity to the overall solution. Now, we will have our algorithm run in a DFS 
            recursive loop where after the AC-3 has been conducted, we will then select a variable that 
            has a domain larger than one (has not been assigned a single digit yet) at random and 
            iteratively test out each possible domain value. By doing this in a DFS loop, we will be 
            able to see every variation of the game starting from the output of the original AC-3 algorithm.
          </Typography>
        </Paper>

        {/* Code Section */}
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
            Code
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontStyle: 'italic',
              color: 'grey.300'
            }}
          >
            Due to the nature of UPenn's Academic Integrity Policy, I am unable to publicly share the 
            code I developed or go in depth about the specifics of any type of implementation. I would 
            be happy to share my project privately to any recruiters or engineers that would like to 
            analyze my work in detail.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}