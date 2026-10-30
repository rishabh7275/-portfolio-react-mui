import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { portfolioData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.categoryType === selectedCategory;
  });

  const handleOpenDetails = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box component="section" id="projects" className="section projects-section">
      <Container maxWidth="lg">
        <Typography component="span" className="section-label">
          03 / SELECTED WORK
        </Typography>

        <Box className="section-heading-row">
          <Box>
            <Typography variant="h2" className="section-title">
              Projects with <span className="highlight-text">purpose.</span>
            </Typography>
            <Typography color="text.secondary" className="heading-aside" sx={{ mt: 1 }}>
              Real-world web applications and digital platforms showcasing responsive frontend engineering and modern web development.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} className="project-filter-tabs">
            <Button
              variant={selectedCategory === 'all' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setSelectedCategory('all')}
              className="filter-pill-btn"
            >
              All ({projects.length})
            </Button>
            {projects.some((p) => p.categoryType === 'frontend') && (
              <Button
                variant={selectedCategory === 'frontend' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSelectedCategory('frontend')}
                className="filter-pill-btn"
              >
                Frontend & Web
              </Button>
            )}
            {projects.some((p) => p.categoryType === 'backend') && (
              <Button
                variant={selectedCategory === 'backend' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSelectedCategory('backend')}
                className="filter-pill-btn"
              >
                Backend & Systems
              </Button>
            )}
          </Stack>
        </Box>

        <Box className="projects-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} elevation={0} className="project-card">
              <Box className={`project-card-banner banner-${project.number}`}>
                {project.previewImage ? (
                  <Box className="project-preview-wrapper">
                    <Box
                      component="img"
                      src={project.previewImage}
                      alt={`${project.title} Preview`}
                      className="project-preview-image"
                      loading="lazy"
                    />
                    <Box className="project-overlay-glow" />
                  </Box>
                ) : (
                  <Box className={`project-art art-${project.number}`}>
                    <span className="project-glyph">{project.icon}</span>
                    <Box className="art-lines">
                      <span />
                      <span />
                      <span />
                    </Box>
                  </Box>
                )}

                <Box className="project-header-meta">
                  <span className="project-number">{project.number} / PROJECT</span>
                  {project.statusBadge && (
                    <Chip
                      label={project.statusBadge}
                      size="small"
                      className="project-status-chip"
                    />
                  )}
                </Box>
              </Box>

              <CardContent className="project-card-content">
                <Typography className="project-category">{project.category}</Typography>

                <Typography variant="h5" className="project-title">
                  {project.title}
                </Typography>

                <Typography color="text.secondary" className="project-description">
                  {project.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.8} sx={{ mt: 2 }}>
                  {project.tech.map((item) => (
                    <Chip key={item} label={item} size="small" className="project-chip" />
                  ))}
                </Stack>

                <Divider sx={{ my: 2.2 }} />

                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Stack direction="row" spacing={1}>
                    {project.live && (
                      <Button
                        size="small"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchRoundedIcon fontSize="small" />}
                        className="project-action-link"
                      >
                        Live Demo
                      </Button>
                    )}

                    {project.github && (
                      <Button
                        size="small"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon fontSize="small" />}
                        className="project-action-link"
                      >
                        Code
                      </Button>
                    )}

                    {!project.github && !project.live && (
                      <Tooltip title="Configure GitHub URL in src/data/portfolioData.ts">
                        <Typography variant="caption" className="unconfigured-link-note">
                          Repo link coming soon
                        </Typography>
                      </Tooltip>
                    )}
                  </Stack>

                  <Button
                    size="small"
                    variant="text"
                    onClick={() => handleOpenDetails(project)}
                    endIcon={<ArrowOutwardRoundedIcon fontSize="small" />}
                    startIcon={<InfoOutlinedIcon fontSize="small" />}
                    sx={{ fontWeight: 700 }}
                  >
                    Details
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <ProjectModal
        project={activeProject}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};
