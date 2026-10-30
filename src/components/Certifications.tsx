import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { portfolioData } from '../data/portfolioData';
import type { CertificationItem } from '../types/portfolio';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const { certifications } = portfolioData;

  const handleOpenCertificate = (cert: CertificationItem) => {
    setSelectedCert(cert);
  };

  const handleClose = () => {
    setSelectedCert(null);
  };

  return (
    <Box component="section" id="certifications" className="section certifications-section">
      <Container maxWidth="lg">
        <Typography component="span" className="section-label">
          04 / CREDENTIALS
        </Typography>

        <Box className="section-heading-row">
          <Box>
            <Typography variant="h2" className="section-title">
              Certifications & <span className="highlight-text">coursework.</span>
            </Typography>
            <Typography color="text.secondary" className="heading-aside" sx={{ mt: 1 }}>
              Structured learning programs and skill evaluations in Data Structures, Algorithms, and Core Java.
            </Typography>
          </Box>
          <WorkspacePremiumRoundedIcon sx={{ fontSize: '3rem', color: 'primary.main', display: { xs: 'none', md: 'block' } }} />
        </Box>

        <Box className="certifications-grid">
          {certifications.map((cert) => (
            <Card key={cert.id} elevation={0} className="certification-card">
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box className="cert-icon-badge">
                    <VerifiedRoundedIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>
                      {cert.issuer}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.3 }}>
                      {cert.title}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.8} sx={{ mt: 2.5 }}>
                  {cert.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" className="cert-chip" />
                  ))}
                </Stack>

                {cert.image && (
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<VisibilityRoundedIcon />}
                      onClick={() => handleOpenCertificate(cert)}
                    >
                      View Certificate
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Dialog
        open={Boolean(selectedCert)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {selectedCert?.title} — {selectedCert?.issuer}
          </Typography>
          <IconButton onClick={handleClose} size="small" aria-label="Close certificate dialog">
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2, textAlign: 'center', backgroundColor: '#000' }}>
          {selectedCert?.image && (
            <Box
              component="img"
              src={selectedCert.image}
              alt={selectedCert.title}
              sx={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
