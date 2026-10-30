import React from 'react';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby="project-modal-title"
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: { xs: 1, sm: 2 },
        },
      }}
    >
      <DialogTitle
        id="project-modal-title"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 1,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em' }}
          >
            {project.category}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
            {project.title}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="Close project details" size="medium">
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 3 }}>
        {project.previewImage && (
          <Box
            sx={{
              borderRadius: 2.5,
              overflow: 'hidden',
              mb: 3,
              border: '1px solid rgba(112, 87, 232, 0.15)',
              maxHeight: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background.default',
            }}
          >
            <Box
              component="img"
              src={project.previewImage}
              alt={`${project.title} screenshot`}
              loading="lazy"
              sx={{
                width: '100%',
                height: '100%',
                maxHeight: 340,
                objectFit: 'contain',
              }}
            />
          </Box>
        )}

        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Overview
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          {project.detailedOverview}
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            <LayersRoundedIcon color="primary" fontSize="small" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Technologies & Frameworks
            </Typography>
          </Stack>
          <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
            {project.tech.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.dark',
                  fontWeight: 700,
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            <CheckCircleRoundedIcon color="primary" fontSize="small" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Key Features & Architectural Highlights
            </Typography>
          </Stack>
          <Stack spacing={1}>
            {project.features.map((feature, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Box
                  component="span"
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    mt: 1.1,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {project.challenges && (
          <>
            <Divider sx={{ my: 2.5 }} />
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                <LightbulbRoundedIcon color="primary" fontSize="small" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Engineering Challenges & Solutions
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {project.challenges}
              </Typography>
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1.5}>
          {project.live ? (
            <Button
              variant="contained"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowOutwardRoundedIcon />}
            >
              Open Live Demo
            </Button>
          ) : null}

          {project.github ? (
            <Button
              variant="outlined"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              View GitHub Repo
            </Button>
          ) : (
            <Chip
              label="Repository: Local / Coming Soon"
              variant="outlined"
              size="medium"
              sx={{ alignSelf: 'center' }}
            />
          )}
        </Stack>

        <Button onClick={onClose} color="inherit">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
