/* eslint-disable no-nested-ternary */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { authSelector } from '../../../store/auth';
import AuthService from '../../../services/auth-service';
import routes from '../../../routing/routes';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'Burgers', link: '/burgers' },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.black,
  textTransform: 'capitalize',
  fontWeight: '100',
  fontSize: '1.2rem',
  textDecoration: 'none',
  transform: 0,
  '&.active': {
    borderBottom: `1px solid ${theme.palette.common.black}`,
    transform: 1,
  },
}));

const Navbar = () => {
  const auth = useSelector(authSelector);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const anchorRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    AuthService.logout();
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ title }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOREM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ title, link }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <StyledNavLink to={link}>{title}</StyledNavLink>
              </Button>
            ))}
            <Button>
              {!auth.loggedIn
                ? <StyledNavLink to="/login">Login</StyledNavLink>
                : <StyledNavLink onClick={handleLogout} to="/">Logout</StyledNavLink>}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpen}
                sx={{ p: 0 }}
                ref={anchorRef}
              >
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {auth.loggedIn
              ? (
                auth.user?.role === 'USER'
                  ? (
                    <Menu
                      anchorEl={anchorRef.current}
                      anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'bottom',
                      }}
                      transformOrigin={{
                        horizontal: 'right',
                        vertical: 'top',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <StyledNavLink to={routes.ProfilePage}>
                          <Typography textAlign="center">PROFILE</Typography>
                        </StyledNavLink>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">LOGOUT</Typography>
                      </MenuItem>
                    </Menu>
                  ) : (
                    <Menu
                      anchorEl={anchorRef.current}
                      anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'bottom',
                      }}
                      transformOrigin={{
                        horizontal: 'right',
                        vertical: 'top',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <StyledNavLink to={routes.DashboardPage}>
                          <Typography textAlign="center">DASHBOARD</Typography>
                        </StyledNavLink>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">LOGOUT</Typography>
                      </MenuItem>
                    </Menu>
                  ))
              : (
                <Menu
                  anchorEl={anchorRef.current}
                  anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom',
                  }}
                  transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <StyledNavLink to={routes.LoginPage}>
                      <Typography textAlign="center">LOGIN</Typography>
                    </StyledNavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <StyledNavLink to={routes.SignUpPage}>
                      <Typography textAlign="center">REGISTER</Typography>
                    </StyledNavLink>
                  </MenuItem>
                </Menu>
              )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
