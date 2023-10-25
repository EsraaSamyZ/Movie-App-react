import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Container, Hidden, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  appBar: {
    backgroundColor: 'white',
    color: 'black',
  },
  logo: {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    marginRight: '10px',
    width: '200px',
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Container>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component={Link} to="/" style={styles.logo}>
                <img
                  src="../logo.svg"
                  alt="Logo"
                  style={styles.logoImage}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Hidden smDown>
                {/* Display on screens larger than or equal to 'sm' (small) */}
                <Button color="inherit" component={Link} to="/movies">
                  Movies
                </Button>
                <Button color="inherit" component={Link} to="/pages">
                  Pages
                </Button>
                <Button color="inherit" component={Link} to="/tv-shows">
                  TV Shows
                </Button>
                <Button color="inherit" component={Link} to="/celebs">
                  Celebs
                </Button>
                <Button color="inherit" component={Link} to="/blog">
                  Blog
                </Button>
              </Hidden>
              <Hidden mdUp>
                {/* Display on screens smaller than 'md' (medium) */}
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleMobileMenu}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={isMobileMenuOpen} onClose={closeMobileMenu}>
                  <List>
                    <ListItem button component={Link} to="/movies" onClick={closeMobileMenu}>
                      <ListItemText primary="Movies" />
                    </ListItem>
                    <ListItem button component={Link} to="/pages" onClick={closeMobileMenu}>
                      <ListItemText primary="Pages" />
                    </ListItem>
                    <ListItem button component={Link} to="/tv-shows" onClick={closeMobileMenu}>
                      <ListItemText primary="TV Shows" />
                    </ListItem>
                    <ListItem button component={Link} to="/celebs" onClick={closeMobileMenu}>
                      <ListItemText primary="Celebs" />
                    </ListItem>
                    <ListItem button component={Link} to="/blog" onClick={closeMobileMenu}>
                      <ListItemText primary="Blog" />
                    </ListItem>
                  </List>
                </Drawer>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
