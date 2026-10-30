import React from 'react';
import { Box, Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2.5}
        >
          <Box
            component="a"
            href="#home"
            className="brand footer-brand"
            aria-label="Back to top"
          >
            <span className="brand-mark">R</span>
            <span>
              {personal.shortName}
              <span className="brand-dot">.</span>
            </span>
          </Box>

          <Typography color="text.secondary" className="footer-copy" variant="body2">
            Designed & Built with React, TypeScript & Material UI
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            {socials.github && (
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            {socials.linkedin && (
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            {socials.email && (
              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href={`mailto:${socials.email}`}
                  size="small"
                  aria-label="Email Raunak"
                >
                  <EmailRoundedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            <Tooltip title="Back to top">
              <IconButton
                onClick={scrollToTop}
                size="small"
                aria-label="Scroll back to top"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.main',
                  ml: 1,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#ffffff',
                  },
                }}
              >
                <KeyboardArrowUpRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        <Box sx={{ mt: 2.5, pt: 2, borderTop: '1px solid rgba(112, 87, 232, 0.08)', textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
