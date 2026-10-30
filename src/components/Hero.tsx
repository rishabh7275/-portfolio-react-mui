import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { portfolioData } from '../data/portfolioData';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

export const Hero: React.FC = () => {
  const { personal, socials } = portfolioData;

  return (
    <Box id="home" className="hero-section" component="section">
      <Container maxWidth="lg">
        <Box className="hero-grid">
          <Box className="hero-copy animate-fade-in-up">
            <Chip
              icon={<span className="status-dot" />}
              label={personal.availability}
              className="availability-chip"
              size="medium"
            />

            <Typography component="p" className="eyebrow">
              {personal.eyebrow}
            </Typography>

            <Typography variant="h1" className="hero-title">
              {personal.title} <span className="highlight-text">{personal.highlightWord}</span>
            </Typography>

            <Typography className="hero-description">
              {personal.bio}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              className="hero-actions"
            >
              <Button
                variant="contained"
                href="#projects"
                endIcon={<EastRoundedIcon />}
                size="large"
              >
                Explore my work
              </Button>

              {personal.resumeUrl && (
                <>
                  <Button
                    variant="outlined"
                    component="a"
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<VisibilityRoundedIcon />}
                    size="large"
                    className="hero-resume-button"
                  >
                    View Resume
                  </Button>

                  <Button
                    variant="contained"
                    component="a"
                    href={personal.resumeUrl}
                    download={personal.resumeFileName}
                    startIcon={<DownloadRoundedIcon />}
                    size="large"
                  >
                    Download Resume
                  </Button>
                </>
              )}

              <Button
                variant="outlined"
                href="#contact"
                className="outline-button"
                size="large"
              >
                Get in touch
              </Button>
            </Stack>

            <Stack direction="row" spacing={1.2} className="social-links" alignItems="center">
              {socials.github && (
                <Tooltip title="View GitHub Profile">
                  <IconButton
                    component="a"
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="social-icon-btn"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              )}

              {socials.linkedin && (
                <Tooltip title="Connect on LinkedIn">
                  <IconButton
                    component="a"
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-icon-btn"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              )}

              {socials.email && (
                <Tooltip title={`Send email to ${socials.email}`}>
                  <IconButton
                    component="a"
                    href={`mailto:${socials.email}`}
                    aria-label="Email"
                    className="social-icon-btn"
                  >
                    <EmailRoundedIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </Box>

          <Box className="hero-visual animate-fade-in-right">
            <Box className="visual-orbit orbit-one" />
            <Box className="visual-orbit orbit-two" />

            <Box className="hero-photo-frame">
              <Avatar
                src={personal.avatarUrl}
                alt={personal.name}
                variant="rounded"
                className="hero-avatar"
              >
                RT
              </Avatar>
            </Box>

            <Box className="floating-card floating-code">
              <CodeRoundedIcon />
              <Box>
                <Typography className="float-title">Clean Code</Typography>
                <Typography className="float-subtitle">React & TypeScript</Typography>
              </Box>
            </Box>

            <Box className="floating-card floating-role">
              <TerminalRoundedIcon />
              <Box>
                <Typography className="float-title">Core Java</Typography>
                <Typography className="float-subtitle">DSA & OOP Fundamentals</Typography>
              </Box>
            </Box>

            <Box className="floating-card floating-badge-edu">
              <SchoolRoundedIcon />
              <Box>
                <Typography className="float-title">AKGEC Ghaziabad</Typography>
                <Typography className="float-subtitle">B.Tech IT (2023–2026)</Typography>
              </Box>
            </Box>

            <Box className="hero-stamp">
              <span>BUILD</span>
              <span>•</span>
              <span>LEARN</span>
              <span>•</span>
              <span>GROW</span>
            </Box>
          </Box>
        </Box>

        <Box className="hero-bottom">
          <Typography variant="body2" className="hero-tagline">
            CURIOUS BY NATURE. BUILDER BY CHOICE.
          </Typography>
          <Box component="a" href="#about" className="scroll-hint" aria-label="Scroll down to About section">
            Scroll to explore <span aria-hidden="true">↓</span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
