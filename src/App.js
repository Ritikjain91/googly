import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import {
  Camera,
  AttachMoney, // Use AttachMoney instead of DollarSign
  FlashOn, // Use FlashOn instead of Zap
  People,
  Menu,
  ShoppingBag,
  Close,
  WhatsApp,
  EmojiEvents,
  Security,
  TrendingUp
} from '@mui/icons-material';

// Separate content configuration
const content = {
  header: {
    logo: "FS",
    brandName: "Founder Support",
    navigation: ['Home', 'About', 'Categories', 'Blog', 'Contact Us']
  },
  hero: {
    title: "Founder Support",
    subtitle: "Join our",
    highlight: "Founder Support",
    description: "WhatsApp group and unlock exclusive deals, top-selling products, and insider tips to save big every day!",
    ctaButton: "Join Now & Grab Deals",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  benefits: [
    {
      icon: <EmojiEvents sx={{ color: '#ff6b35' }} />,
      text: "Daily curated deals you won't find anywhere else",
      emoji: "🔥"
    },
    {
      icon: <AttachMoney sx={{ color: '#4caf50' }} />, // Changed from DollarSign to AttachMoney
      text: "Exclusive discounts and cashback opportunities",
      emoji: "💰"
    },
    {
      icon: <FlashOn sx={{ color: '#ffc107' }} />, // Changed from Zap to FlashOn
      text: "Quick access to popular products before they sell out",
      emoji: "⚡"
    },
    {
      icon: <TrendingUp sx={{ color: '#2196f3' }} />,
      text: "Recommendations from our trusted community members",
      emoji: "📊"
    }
  ],
  groupInfo: {
    title: "Founder Support Group",
    description: "Connect directly with founders and get insider guidance on products and services."
  },
  products: [
    {
      title: "Startup Planner Journal",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      price: "₹499",
      badge: "Popular",
      badgeColor: "error"
    },
    {
      title: "Wireless Keyboard & Mouse Combo",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
      price: "₹1,499",
      badge: "Sale",
      badgeColor: "success"
    },
    {
      title: "Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop",
      price: "₹2,499",
      badge: "Hot Deal",
      badgeColor: "warning"
    }
  ],
  testimonials: [
    {
      name: "Priya",
      location: "Mumbai",
      text: "I found incredible deals on premium gadgets at 50% off! This group has become my go-to for smart shopping.",
      avatar: "P"
    },
    {
      name: "Arjun",
      location: "Delhi",
      text: "Daily notifications keep me updated on flash sales. The deals are verified and authentic - saved thousands!",
      avatar: "A"
    },
    {
      name: "Sneha",
      location: "Bangalore",
      text: "The community recommendations are spot-on. I discover products I never knew I needed. Absolutely love it!",
      avatar: "S"
    }
  ],
  finalCTA: {
    title: "Don't Miss Out on Today's Exclusive Deals!",
    subtitle: "Click the button below to join the",
    highlight: "Founder Support",
    description: "WhatsApp group and start saving instantly.",
    buttonText: "Join Now & Save"
  }
};

export default function FounderSupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar 
        position="sticky" 
        elevation={1}
        sx={{ 
          bgcolor: 'background.paper',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 48,
                  height: 48,
                  fontWeight: 'bold'
                }}
              >
                {content.header.logo}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {content.header.brandName}
              </Typography>
            </Stack>

            {/* Desktop Navigation */}
            <Stack 
              direction="row" 
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {content.header.navigation.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {content.header.navigation.map((item) => (
              <ListItem key={item} component={Button} sx={{ width: '100%' }}>
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              {content.hero.title}
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              {content.hero.subtitle}{' '}
              <Typography
                component="span"
                variant="h6"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                {content.hero.highlight}
              </Typography>{' '}
              {content.hero.description}
            </Typography>

            {/* Benefits List */}
            <Stack spacing={3} sx={{ mb: 4 }}>
              {content.benefits.map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ mt: 0.5 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {benefit.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* CTA Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              sx={{
                py: 2,
                px: 4,
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: 4,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {content.hero.ctaButton}
            </Button>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <Box
                component="img"
                src={content.hero.image}
                alt="Founder meeting"
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  objectFit: 'cover'
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Group Info Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #e8f5e8 0%, #e3f2fd 100%)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <People sx={{ color: 'primary.main', fontSize: 32 }} />
              <Typography variant="h4" component="h2" fontWeight="bold">
                {content.groupInfo.title}
              </Typography>
            </Box>
            <Typography variant="h6" color="text.secondary">
              {content.groupInfo.description}
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Related Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <ShoppingBag sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h2" fontWeight="bold">
            Related Products
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {content.products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <Chip
                    label={product.badge}
                    color={product.badgeColor}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                    {product.title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" color="primary.main" fontWeight="bold">
                      {product.price}
                    </Typography>
                    <Button variant="contained" size="medium">
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" mb={6}>
            What Members Are Saying
          </Typography>
          
          <Grid container spacing={3}>
            {content.testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 48,
                        height: 48,
                        fontWeight: 'bold'
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontStyle="italic"
                    sx={{ lineHeight: 1.6 }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
          py: 10,
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              mb={3}
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              {content.finalCTA.title}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {content.finalCTA.subtitle}{' '}
              <Typography
                component="span"
                variant="h6"
                sx={{ fontWeight: 'bold', color: 'white' }}
              >
                {content.finalCTA.highlight}
              </Typography>{' '}
              {content.finalCTA.description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                py: 2,
                px: 6,
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: 4,
                '&:hover': {
                  bgcolor: 'grey.100',
                  boxShadow: 8,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {content.finalCTA.buttonText}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: 'grey.900',
          color: 'white',
          py: 4
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" textAlign="center" color="grey.400">
            © 2024 Founder Support. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}