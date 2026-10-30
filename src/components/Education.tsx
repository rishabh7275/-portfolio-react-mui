import React from 'react';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <Box component="section" id="education" className="section education-section">
      <Container maxWidth="lg">
        <Typography component="span" className="section-label">
          05 / EDUCATION
        </Typography>

        <Box className="section-heading-row">
          <Box>
            <Typography variant="h2" className="section-title">
              Learning is a <span className="highlight-text">journey.</span>
            </Typography>
            <Typography color="text.secondary" className="heading-aside" sx={{ mt: 1 }}>
              Academic foundations in computer science, software engineering principles, and systems development.
            </Typography>
          </Box>
          <SchoolRoundedIcon className="education-heading-icon" />
        </Box>

        <Box className="timeline-container">
          <Box className="timeline-track" />
          <Stack spacing={3.5} className="timeline-items-list">
            {education.map((item) => (
              <Box key={item.period + item.degree} className="timeline-node">
                <Box className="timeline-node-dot" />
                <Card elevation={0} className="timeline-card">
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent="space-between"
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      spacing={1}
                      sx={{ mb: 1 }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarTodayOutlinedIcon
                          fontSize="small"
                          sx={{ color: 'primary.main', fontSize: '0.9rem' }}
                        />
                        <Typography className="timeline-date">{item.period}</Typography>
                      </Stack>

                      {item.score && (
                        <Box className="timeline-score-badge">
                          <span>{item.score}</span>
                        </Box>
                      )}
                    </Stack>

                    <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
                      {item.degree}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}
                    >
                      {item.institution}
                    </Typography>

                    {item.location && (
                      <Stack
                        direction="row"
                        spacing={0.5}
                        alignItems="center"
                        sx={{ mt: 0.5, color: 'text.secondary' }}
                      >
                        <LocationOnOutlinedIcon sx={{ fontSize: '0.95rem' }} />
                        <Typography variant="body2">{item.location}</Typography>
                      </Stack>
                    )}

                    {item.description && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1.5, lineHeight: 1.7 }}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
