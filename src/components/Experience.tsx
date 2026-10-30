import React from 'react';
import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <Box component="section" id="experience" className="section experience-section">
      <Container maxWidth="lg">
        <Typography component="span" className="section-label">
          04 / EXPERIENCE
        </Typography>

        <Box className="section-heading-row">
          <Box>
            <Typography variant="h2" className="section-title">
              Internship <span className="highlight-text">experience.</span>
            </Typography>
            <Typography color="text.secondary" className="heading-aside" sx={{ mt: 1 }}>
              Hands-on software engineering responsibilities, full-stack modules, and collaborative development.
            </Typography>
          </Box>
          <BusinessCenterRoundedIcon className="education-heading-icon" />
        </Box>

        <Box sx={{ mt: 4 }}>
          {experience.map((exp) => (
            <Card key={exp.id} elevation={0} className="timeline-card experience-card" sx={{ mb: 3 }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={1.5}
                  sx={{ mb: 1.5 }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap alignItems="center">
                    <Box className="timeline-score-badge">
                      <span>{exp.duration}</span>
                    </Box>
                    <Box className="timeline-score-badge" sx={{ backgroundColor: 'action.hover' }}>
                      <span>{exp.workArrangement}</span>
                    </Box>
                  </Stack>
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 3 }}
                  sx={{ color: 'text.secondary', mb: 2 }}
                >
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <CalendarTodayOutlinedIcon sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
                    <Typography variant="body2">{exp.period}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <LocationOnOutlinedIcon sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
                    <Typography variant="body2">{exp.workArrangement}</Typography>
                  </Stack>
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                  {exp.description}
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                  Key Responsibilities:
                </Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                      <CheckCircleOutlineRoundedIcon
                        sx={{ fontSize: '1.1rem', color: 'primary.main', mt: 0.3, flexShrink: 0 }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {resp}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {exp.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" className="soft-chip" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
