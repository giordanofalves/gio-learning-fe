import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Link from '@mui/material/Link';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

export default function KubicleAppBar() {
  const pages = ['Library'];

  return (
      <AppBar position="absolute">
        <Toolbar>
          <LocalLibraryIcon sx={{ marginRight: "0.5em" }}/>
          <Typography variant="h6" component="div" sx={{ marginRight: "2em" }}>
            Kubicle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Link component={RouterLink} to="library">
              <Button sx={{color: 'white', display: 'block' }}>
                Library
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
}