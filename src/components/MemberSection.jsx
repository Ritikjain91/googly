import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent, Rating, Avatar, Button } from '@mui/material';

const MemberSection = () => {
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
    <Box sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
      {/* Heading */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#4CAF50', mb: 4 }}>
        What Members Are Saying
      </Typography>

      {/* Testimonials */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mb: 6 }}>
        {reviews.map((r) => (
          <Card
            key={r.name}
            sx={{
              maxWidth: 320,
              backgroundColor: '#fff',
              borderRadius: 3,
              boxShadow: 2,
              p: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src={r.avatar} sx={{ width: 48, height: 48, mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{r.name}</Typography>
                <Rating value={r.rating} readOnly size="small" sx={{ color: '#4CAF50' }} />
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              “{r.text}”
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Products */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#4CAF50', mb: 4 }}>
        Related Products
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
        {products.map((p) => (
          <Card
            key={p.id}
            sx={{
              width: 260,
              backgroundColor: '#fff',
              borderRadius: 3,
              boxShadow: 2,
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={p.img}
              alt={p.title}
              sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>{p.title}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{p.price}</Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#43a047' },
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