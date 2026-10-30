
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import { useColorTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeMenuAnchor, setResumeMenuAnchor] =
    useState<HTMLElement | null>(null);
  const [mobileResumeOpen, setMobileResumeOpen] = useState(false);

  const { mode, toggleTheme } = useColorTheme();
  const { personal } = portfolioData;

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleResumeMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setResumeMenuAnchor(event.currentTarget);
  };

  const handleResumeMenuClose = () => {
    setResumeMenuAnchor(null);
  };

  const handleResumeSelect = () => {
    handleResumeMenuClose();
    setMobileOpen(false);
    setMobileResumeOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="site-header"
      component="header"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="toolbar">

          {/* Brand */}
          <Box
            component="a"
            href="#home"
            className="brand"
            aria-label="Rishabh Tiwari Portfolio Home"
            onClick={handleNavClick}
          >
            <span className="brand-mark">R</span>
            <span>
              {personal.shortName}
              <span className="brand-dot">.</span>
            </span>
          </Box>

          {/* Desktop Navigation */}
          <Stack
            component="nav"
            direction="row"
            spacing={0.5}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="inherit"
                className="nav-link"
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">

            {/* Theme Toggle */}
            <Tooltip
              title={
                mode === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className="theme-toggle-btn"
                size="small"
              >
                {mode === 'dark' ? (
                  <LightModeRoundedIcon
                    fontSize="small"
                    sx={{ color: '#ffd166' }}
                  />
                ) : (
                  <DarkModeRoundedIcon
                    fontSize="small"
                    sx={{ color: '#7057e8' }}
                  />
                )}
              </IconButton>
            </Tooltip>

            {/* Desktop Resume Dropdown */}
            {personal.resumeUrl && (
              <>
                <Button
                  onClick={handleResumeMenuOpen}
                  variant="outlined"
                  size="small"
                  startIcon={<DescriptionRoundedIcon fontSize="small" />}
                  className="header-resume-btn"
                  aria-controls={
                    resumeMenuAnchor ? 'resume-menu' : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={Boolean(resumeMenuAnchor)}
                >
                  Resume
                </Button>

                <Menu
                  id="resume-menu"
                  anchorEl={resumeMenuAnchor}
                  open={Boolean(resumeMenuAnchor)}
                  onClose={handleResumeMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 190,
                      borderRadius: 2,
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <MenuItem
                    component="a"
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleResumeSelect}
                  >
                    <ListItemIcon>
                      <VisibilityRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    View Resume
                  </MenuItem>

                  <MenuItem
                    component="a"
                    href={personal.resumeUrl}
                    download={personal.resumeFileName}
                    onClick={handleResumeSelect}
                  >
                    <ListItemIcon>
                      <DownloadRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    Download Resume
                  </MenuItem>
                </Menu>
              </>
            )}

            {/* Contact Button */}
            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowOutwardRoundedIcon />}
              className="header-cta"
            >
              Let's talk
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              className="mobile-menu-button"
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
              edge="end"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            p: 3,
            backgroundColor:
              mode === 'dark' ? '#161228' : '#ffffff',
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Navigation
          </Typography>

          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close menu"
            size="small"
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>

        <Stack spacing={1} component="nav" aria-label="Mobile Navigation">

          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                py: 1.2,
                fontSize: '1rem',
                color: mode === 'dark' ? '#f4f2fb' : '#201b35',
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Mobile Resume Dropdown */}
          {personal.resumeUrl && (
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<DescriptionRoundedIcon />}
                onClick={() =>
                  setMobileResumeOpen((prev) => !prev)
                }
              >
                Resume
              </Button>

              {mobileResumeOpen && (
                <Stack spacing={1} sx={{ mt: 1, pl: 1 }}>
                  <Button
                    component="a"
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    startIcon={<VisibilityRoundedIcon />}
                    onClick={handleResumeSelect}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    View Resume
                  </Button>

                  <Button
                    component="a"
                    href={personal.resumeUrl}
                    download={personal.resumeFileName}
                    fullWidth
                    startIcon={<DownloadRoundedIcon />}
                    onClick={handleResumeSelect}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Download Resume
                  </Button>
                </Stack>
              )}
            </Box>
          )}

          <Button
            href="#contact"
            variant="contained"
            fullWidth
            onClick={handleNavClick}
            sx={{ mt: 1 }}
          >
            Get In Touch
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
};
