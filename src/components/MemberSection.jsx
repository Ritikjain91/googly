import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent, Rating, Avatar, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MemberSection = () => {
  const theme = useTheme();

  const products = [
    { id: 1, title: 'Startup Planner Journal', price: 'R1,499', img: 'https://picsum.photos/300/200?random=1' },
    { id: 2, title: 'Wireless Keyboard & Mouse Combo', price: 'R499', img: 'https://picsum.photos/300/200?random=2' },
    { id: 3, title: 'Noise Cancelling Headphones', price: 'R2,499', img: 'https://picsum.photos/300/200?random=3' },
  ];

  const reviews = [
    { name: 'Aisha Patel', avatar: 'https://i.pravatar.cc/60?u=a', rating: 5, text: 'Insider tips saved me hours of research. Worth every cent!' },
    { name: 'Levi Adams', avatar: 'https://i.pravatar.cc/60?u=b', rating: 5, text: 'Deals are legit. Got my journal 40% cheaper than anywhere else.' },
    { name: 'Sipho M', avatar: 'https://i.pravatar.cc/60?u=c', rating: 4, text: 'Great community. Found my co-founder here!' },
  ];

  return (
    <Box sx={{ background: 'transparent' }}>
      {/* heading: NO colour set – you control it externally */}
      <Typography variant="h3" align="center" sx={{ fontWeight: 900,color:'success.main', fontSize: { xs: '2rem', md: '3rem' }, mb: 8 }}>
        What Members Are Saying
      </Typography>

      {/* testimonials */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mb: 10 }}>
        {reviews.map((r) => (
          <Card
            key={r.name}
            sx={{
              maxWidth: 340,
              background: 'rgba(255,255,255,.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 4,
              p: 4,
              transition: 'all .4s',
              '&:hover': { transform: 'translateY(-6px)', boxShadow: (t) => `0 20px 40px -10px ${t.palette.divider}30` },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src={r.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>{r.name}</Typography>
                <Rating value={r.rating} readOnly size="small" sx={{ color: 'text.primary' }} />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              “{r.text}”
            </Typography>
          </Card>
        ))}
      </Box>

      {/* products */}
      <Typography variant="h3" align="center" sx={{ fontWeight: 900,color:'success.main', fontSize: { xs: '2rem', md: '3rem' }, mb: 6 }}>
        Related Products
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        {products.map((p) => (
          <Card
            key={p.id}
            sx={{
              width: 280,
              background: 'rgba(255,255,255,.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 4,
              overflow: 'hidden',
              transition: 'all .4s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: (t) => `0 25px 50px -15px ${t.palette.divider}40` },
            }}
          >
            <CardMedia component="img" height="180" image={p.img} alt={p.title} />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>{p.title}</Typography>
              <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 800, mb: 2 }}>{p.price}</Typography>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  borderColor: 'divider',
                  '&:hover': { backgroundColor: 'text.primary', color: 'background.paper' },
                }}
              >
                View Deal
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MemberSection;