import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography, Button, Box, useTheme } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/* ---------- keyframes ---------- */
const fadeIn = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;
const breathe = keyframes`0%,100%{box-shadow:0 0 20px -10px #10b981}50%{box-shadow:0 0 40px 0 #10b981}`;
const pulse = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.03)}`;
const marquee = keyframes`0%{transform:translateX(0)}100%{transform:translateX(-50%)}`;

const Sparkle = ({ x, y }) => (
  <Box
    sx={{
      position: 'absolute',
      left: x,
      top: y,
      width: 6,
      height: 6,
      bgcolor: '#fff',
      borderRadius: '50%',
      animation: 'pop .6s forwards',
      pointerEvents: 'none',
      '@keyframes pop': { '0%': { transform: 'scale(0)', opacity: 1 }, '100%': { transform: 'scale(3)', opacity: 0 } },
    }}
  />
);

export default function GridContainer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const benefits = [
    { emoji: '🔥', title: 'Daily curated deals', desc: "Hand-picked offers you won't find elsewhere" },
    { emoji: '💰', title: 'Exclusive discounts', desc: 'Cash-back and member-only price cuts' },
    { emoji: '⚡', title: 'Early-bird drops', desc: 'Get in before items sell out' },
    { emoji: '📊', title: 'Community picks', desc: 'Recommendations from verified founders' },
  ];

  /* ---------- auto-type headline ---------- */
  const [txt, setTxt] = useState('');
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= 15) {
        setTxt('Founder Support'.slice(0, i));
        i++;
      } else clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  /* ---------- sparkle ---------- */
  const [sparks, setSparks] = useState([]);
  const btnRef = useRef(null);
  const addSpark = (e) => {
    const r = btnRef.current?.getBoundingClientRect();
    if (!r) return;
    const id = Date.now();
    setSparks((p) => [...p, { x: e.clientX - r.left, y: e.clientY - r.top, id }]);
    setTimeout(() => setSparks((s) => s.filter((v) => v.id !== id)), 700);
  };

  /* ---------- live counter ---------- */
  const [count, setCount] = useState(3412);
  useEffect(() => {
    const int = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 3)), 2500);
    return () => clearInterval(int);
  }, []);

  const brands = ['Shopify', 'Notion', 'Stripe', 'Vercel', 'Linear', 'Figma', 'Loom', 'Raycast', 'Supabase', 'Tailwind'];

  return (
    <Box
      sx={{
        background: isDark ? 'linear-gradient(135deg,#000,#111)' : 'linear-gradient(135deg,#fff,#f5f5f5)',
        color: 'text.primary',
        py: 10,
        px: 2,
        animation: `${fadeIn} 1s ease both`,
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {/* LEFT: all content */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* GREEN headline */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                background: 'linear-gradient(135deg,#10b981,#34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
                lineHeight: 1.05,
              }}
            >
              {txt}|
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
              Join our WhatsApp group for exclusive deals and insider tips.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#10b981', fontWeight: 700, animation: `${pulse} 2s infinite` }}>
              {count.toLocaleString()} founders already inside 🎉
            </Typography>

            {/* benefits – glass 3-D cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, my: 4 }}>
              {benefits.map((b, i) => (
                <Box
                  key={i}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all .4s',
                    '&:hover': {
                      transform: 'translateY(-8px) rotateX(5deg)',
                      boxShadow: '0 20px 40px -10px rgba(16,185,129,.35)',
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1, color: '#10b981' }}>{b.emoji} {b.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{b.desc}</Typography>
                </Box>
              ))}
            </Box>

            {/* GREEN CTA */}
            <Box position="relative" display="inline-block" onClick={addSpark}>
              <Button
                ref={btnRef}
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 4,
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  textTransform: 'none',
                  animation: `${breathe} 3s infinite`,
                  backgroundColor: '#10b981',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#059669' },
                  overflow: 'visible',
                }}
              >
                Join Now & Grab Deals 🚀
                {sparks.map((s) => (
                  <Sparkle key={s.id} x={s.x} y={s.y} />
                ))}
              </Button>
            </Box>

            {/* brand marquee with blur edges */}
            <Box mt={8} sx={{ position: 'relative', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 60,
                  background: `linear-gradient(90deg, ${theme.palette.background.paper} 0%, transparent 100%)`,
                  zIndex: 2,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: 60,
                  background: `linear-gradient(90deg, transparent 0%, ${theme.palette.background.paper} 100%)`,
                  zIndex: 2,
                }}
              />
              <Box sx={{ display: 'inline-flex', animation: `${marquee} 25s linear infinite` }}>
                {[...brands, ...brands].map((b, i) => (
                  <Typography key={i} variant="h5" sx={{ mx: 6, color: 'text.secondary', fontWeight: 700 }}>
                    {b}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT: high-quality image (no Three.js) */}
          <Box
            sx={{
              ml: { xs: 0, md: 4 },
              flexShrink: 0,
              width: { xs: '100%', md: 400 },
              height: 400,
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,.25)',
              transition: 'transform .4s',
              '&:hover': { transform: 'rotateX(8deg) rotateY(-6deg) scale(1.03)' },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop"
              alt="Team collaboration"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}