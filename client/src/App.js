import { HashRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { indigo, amber } from '@mui/material/colors'
import { createTheme } from "@mui/material/styles";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import FormulaOneDashboard from './pages/FormulaOneProject';
import Sudoku from './pages/Sudoku';
import F1 from './pages/FormulaOneProject';
import Portfolio from './pages/Portfolio';
import ReelRoots from './pages/ReelRoots';
// import AlbumsPage from './pages/AlbumsPage';
// import SongsPage from './pages/SongsPage';
// import AlbumInfoPage from './pages/AlbumInfoPage'

// createTheme enables you to customize the look and feel of your app past the default
// in this case, we only change the color scheme
export const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
});

// App is the root component of our application and as children contain all our pages
// We use React Router's HashRouter and Routes components to define the pages for
// our application, with each Route component representing a page and the common
// NavBar component allowing us to navigate between pages (with hyperlinks)
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formula1" element={<FormulaOneDashboard />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="/F1" element={<F1 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reelroots" element={<ReelRoots />} />
          {/* <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/albums/:album_id" element={<AlbumInfoPage />} />
          <Route path="/songs" element={<SongsPage />} /> */}
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}