import React from 'react';
import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <CodeRoundedIcon color="primary" />,
      metric: '3 Projects',
      label: 'Featured Applications',
      detail: 'Built TaskFlow productivity app, GameHub mini-games platform, and Lidespy web platform.',
    },
    {
      icon: <SchoolRoundedIcon color="primary" />,
      metric: '74% Aggregate',
      label: 'Diploma in IT Foundation',
      detail: 'Graduated from MMPIT Chandauli prior to B.Tech IT at AKGEC Ghaziabad.',
    },
    {
      icon: <BusinessCenterRoundedIcon color="primary" />,
      metric: 'Internship',
      label: 'Software Engineer Intern',
      detail: 'Pronttera (3 Months, Hybrid) · Working on frontend and backend modules, API integration, database operations, debugging, and testing.',
    },
  ];

  return (
    <Box component="section" id="about" className="section about-section">
      <Container maxWidth="lg">
        <Box className="about-grid">
          <Box>
            <Typography component="span" className="section-label">
              01 / ABOUT ME
            </Typography>
            <Typography variant="h2" className="section-title">
              A little about <span className="highlight-text">what I do.</span>
            </Typography>
          </Box>

          <Box className="about-content">
            <Typography className="about-lead">
              Transforming complex requirements into clean, performant, and user-friendly software.
            </Typography>

            <Typography color="text.secondary" className="body-copy">
              {personal.detailedBio[0]}
            </Typography>

            <Typography color="text.secondary" className="body-copy" sx={{ mt: 1.5 }}>
              {personal.detailedBio[1]}
            </Typography>

            <Typography color="text.secondary" className="body-copy" sx={{ mt: 1.5 }}>
              {personal.detailedBio[2]}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
              <Chip label="Modern Frontend (React & TypeScript)" className="soft-chip" />
              <Chip label="Core Java & OOP" className="soft-chip" />
              <Chip label="Data Structures & Algorithms" className="soft-chip" />
              <Chip label="Relational Databases (MySQL)" className="soft-chip" />
              <Chip label="Responsive UI/UX" className="soft-chip" />
            </Stack>
          </Box>
        </Box>

        <Box sx={{ mt: 6 }} className="about-metrics-grid">
          {highlights.map((item) => (
            <Card key={item.metric} elevation={0} className="about-metric-card">
              <CardContent sx={{ p: 3 }}>
                <Box className="metric-icon-box">{item.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mt: 1.5 }}>
                  {item.metric}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
                  {item.detail}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
