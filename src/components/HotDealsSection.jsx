import React from 'react';
import { Box, Typography, Button, Avatar, useTheme } from '@mui/material';

const HotDealsSection = () => {
  const theme = useTheme();

  const members = [
    { name: 'Aisha — Mumbai', text: 'I got my favorite products at 40% off! Joining this group was the best decision for smart shopping.' },
    { name: 'Rohit — Delhi', text: 'Daily alerts save me hours of browsing. Plus the deals are amazing and authentic.' },
    { name: 'Neha — Bengaluru', text: 'The community helps me discover hidden gems I wouldn\'t find on my own. Highly recommend!' },
  ];

  return (
    <Box sx={{ px: 2, py: 10, background: 'transparent', textAlign: 'center' }}>
      {/* headline */}
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, color: 'success.main', mb: 8 }}>
        What Members Are Saying
      </Typography>

      {/* testimonials */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mb: 10 }}>
        {members.map((m) => (
          <Box
            key={m.name}
            sx={{
              maxWidth: 360,
              p: 4,
              border: '1px solid',
              borderColor: 'success.',
              borderRadius: 4,
              background: 'rgba(255,255,255,.05)',
              backdropFilter: 'blur(10px)',
              transition: 'all .3s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: (t) => `0 20px 40px -10px ${t.palette.success.main}30` },
            }}
          >
            <Avatar sx={{ width: 56, height: 56, mx: 'auto', mb: 2, bgcolor: 'text.primary' }}>
              {m.name.charAt(0)}
            </Avatar>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
              {m.name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', fontSize: '1rem' }}>
              “{m.text}”
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA block */}
      <Box sx={{ maxWidth: 600, mx: 'auto', px: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 2 }}>
          Don't Miss Out on Today's Hot Deals!
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary', mb: 4 }}>
          Click the button below to join the Founder Support WhatsApp group and start saving instantly.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 2,
            borderRadius: 4,
            fontSize: '1.25rem',
            fontWeight: 800,
            textTransform: 'none',
            backgroundColor: 'success.main',
            color: 'success.contrastText',
            '&:hover': { backgroundColor: 'success.dark' },
          }}
        >
          Join Now & Save
        </Button>
      </Box>
    </Box>
  );
};

export default HotDealsSection;