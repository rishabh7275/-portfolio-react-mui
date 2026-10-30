import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { socials, contactConfig } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'needs_backend'>('idle');
  const [copyFeedback, setCopyFeedback] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopyFeedback(true);
  };

  const handleSendMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Raunak,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Check if real backend endpoint is configured
    if (contactConfig.formspreeEndpoint) {
      try {
        const response = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('needs_backend');
        }
      } catch {
        setSubmitStatus('needs_backend');
      } finally {
        setSubmitting(false);
      }
    } else {
      // Backend configuration is pending. Clearly explain without pretending.
      setTimeout(() => {
        setSubmitting(false);
        setSubmitStatus('needs_backend');
      }, 500);
    }
  };

  return (
    <Box component="section" id="contact" className="section contact-section">
      <Container maxWidth="lg">
        <Box className="contact-panel">
          <Box className="contact-decoration decoration-one" />
          <Box className="contact-decoration decoration-two" />

          <Typography component="span" className="section-label" sx={{ color: '#c4b8ff' }}>
            06 / GET IN TOUCH
          </Typography>

          <Typography variant="h2" className="contact-title">
            Have a project in mind?<br />
            <span className="highlight-text">Let&apos;s make it happen.</span>
          </Typography>

          <Typography className="contact-copy">
            I&apos;m actively seeking internships, full-time developer roles, and open-source collaborations.
            Feel free to send a direct message below or reach out via email.
          </Typography>

          <Box sx={{ mt: 5, position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
              {/* Direct Channels Card */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Card elevation={0} className="contact-info-card">
                  <CardContent sx={{ p: { xs: 3, sm: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>
                      Contact Channels
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      I typically respond within 24 hours.
                    </Typography>

                    <Stack spacing={2.5} sx={{ my: 'auto' }}>
                      <Box className="contact-channel-item">
                        <Box className="channel-icon-wrap">
                          <EmailRoundedIcon />
                        </Box>
                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                          <Typography variant="caption" color="text.secondary">
                            EMAIL
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 700, wordBreak: 'break-all' }}
                          >
                            {socials.email}
                          </Typography>
                        </Box>
                        <Tooltip title="Copy Email">
                          <IconButton size="small" onClick={handleCopyEmail} aria-label="Copy email address">
                            <ContentCopyRoundedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>

                      <Box className="contact-channel-item">
                        <Box className="channel-icon-wrap">
                          <LinkedInIcon />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            LINKEDIN
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            rishabhtiwari746425
                          </Typography>
                        </Box>
                        <IconButton
                          component="a"
                          href={socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          aria-label="Open LinkedIn profile"
                        >
                          <LaunchRoundedIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Box className="contact-channel-item">
                        <Box className="channel-icon-wrap">
                          <GitHubIcon />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            GITHUB
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            rishabh7275
                          </Typography>
                        </Box>
                        <IconButton
                          component="a"
                          href={socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          aria-label="Open GitHub profile"
                        >
                          <LaunchRoundedIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      {socials.whatsapp && (
                        <Box className="contact-channel-item">
                          <Box className="channel-icon-wrap">
                            <WhatsAppIcon />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              WHATSAPP
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              +91 6388746425
                            </Typography>
                          </Box>
                          <IconButton
                            component="a"
                            href={socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="Chat on WhatsApp"
                          >
                            <LaunchRoundedIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      )}

                      <Box className="contact-channel-item">
                        <Box className="channel-icon-wrap">
                          <LocationOnRoundedIcon />
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            LOCATION
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {socials.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>

                    {socials.whatsapp && (
                      <Button
                        variant="contained"
                        component="a"
                        href={socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                          mt: 3,
                          width: '100%',
                          py: 1.2,
                          fontWeight: 700,
                          borderRadius: 2,
                        }}
                      >
                        Chat on WhatsApp
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              {/* Accessible Form Card */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Card elevation={0} className="contact-form-card">
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>
                      Send a Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Fill out the form below or open your mail client with one click.
                    </Typography>

                    {submitStatus === 'needs_backend' && (
                      <Alert
                        severity="info"
                        icon={<InfoOutlinedIcon />}
                        sx={{ mb: 3, borderRadius: 2, textAlign: 'left' }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          Ready to send via your email client:
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                          To activate direct serverless submissions, configure your free Formspree endpoint in <code>portfolioData.ts</code>. In the meantime, click below to send directly via your mail client!
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleSendMailto}
                          startIcon={<EmailRoundedIcon />}
                          sx={{ mt: 1.5 }}
                        >
                          Open in Email App with Prefilled Text
                        </Button>
                      </Alert>
                    )}

                    {submitStatus === 'success' && (
                      <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                        Thank you for reaching out! Your message was sent successfully.
                      </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                            required
                            size="small"
                            autoComplete="name"
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            required
                            size="small"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={Boolean(errors.subject)}
                            helperText={errors.subject}
                            required
                            size="small"
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            error={Boolean(errors.message)}
                            helperText={errors.message}
                            required
                            placeholder="Tell me about your project, team, or opportunity..."
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mt: 1 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              disabled={submitting}
                              endIcon={
                                submitting ? <CircularProgress size={18} color="inherit" /> : <SendRoundedIcon />
                              }
                              sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                              {submitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            <Button
                              variant="outlined"
                              size="large"
                              onClick={handleSendMailto}
                              startIcon={<EmailRoundedIcon />}
                              sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                              Direct Email Client
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={copyFeedback}
        autoHideDuration={3000}
        onClose={() => setCopyFeedback(false)}
        message="Email copied to clipboard!"
      />
    </Box>
  );
};
