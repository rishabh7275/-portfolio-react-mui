import React from 'react';
import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  frontend: <CodeRoundedIcon fontSize="large" />,
  backend: <TerminalRoundedIcon fontSize="large" />,
  tools: <BuildRoundedIcon fontSize="large" />,
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <Box component="section" id="skills" className="section skills-section">
      <Container maxWidth="lg">
        <Typography component="span" className="section-label">
          02 / TOOLKIT
        </Typography>

        <Box className="section-heading-row">
          <Typography variant="h2" className="section-title">
            Skills I bring <span className="highlight-text">to the table.</span>
          </Typography>
          <Typography color="text.secondary" className="heading-aside">
            A focused toolkit spanning client-side interfaces, backend data access, and modern developer workflows.
          </Typography>
        </Box>

        <Box className="skills-grid">
          {skills.map((skill, index) => (
            <Card key={skill.title} elevation={0} className="skill-card">
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                <Box className="skill-icon-wrap">
                  {iconMap[skill.categoryKey] || <CodeRoundedIcon fontSize="large" />}
                </Box>

                <Typography variant="h6" className="skill-title">
                  {skill.title}
                </Typography>

                <Typography color="text.secondary" className="skill-caption">
                  {skill.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} sx={{ mt: 2.5 }}>
                  {skill.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      className="skill-chip"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Typography className="skill-index" aria-hidden="true">
                  0{index + 1}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
