import React, { useState, useEffect } from 'react';
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
  Paper,
  Stack,
  useScrollTrigger,
  Slide,
  Fade,
  Zoom
} from '@mui/material';
import {
  Menu,
  Close,
  TrendingUp,
  FlashOn,
  AttachMoney,
  People,
  ShoppingBag,
  EmojiEvents,
  WhatsApp,
  ChevronRight
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7',
      light: '#c084fc',
      dark: '#7e22ce',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#be185d',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function FounderSupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const navigation = ['Home', 'About', 'Categories', 'Blog', 'Contact'];

  const benefits = [
    {
      icon: <EmojiEvents />,
      text: "Daily curated deals you won't find anywhere else",
      color: '#f97316'
    },
    {
      icon: <AttachMoney />,
      text: "Exclusive discounts and cashback opportunities",
      color: '#10b981'
    },
    {
      icon: <FlashOn />,
      text: "Quick access to popular products before they sell out",
      color: '#fbbf24'
    },
    {
      icon: <TrendingUp />,
      text: "Recommendations from trusted community members",
      color: '#3b82f6'
    }
  ];

  const products = [
    {
      title: "Startup Planner Journal",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      price: "₹499",
      badge: "Popular",
      badgeColor: "error"
    },
    {
      title: "Wireless Keyboard & Mouse",
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
  ];

  const testimonials = [
    {
      name: "Priya",
      location: "Mumbai",
      text: "I found incredible deals on premium gadgets at 50% off! This group has become my go-to for smart shopping.",
      avatar: "P",
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
    },
    {
      name: "Arjun",
      location: "Delhi",
      text: "Daily notifications keep me updated on flash sales. The deals are verified and authentic - saved thousands!",
      avatar: "A",
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
    },
    {
      name: "Sneha",
      location: "Bangalore",
      text: "The community recommendations are spot-on. I discover products I never knew I needed. Absolutely love it!",
      avatar: "S",
      gradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Orbs */}
        <Box sx={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <Box sx={{
            position: 'absolute',
            top: '10%',
            left: '20%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.3 },
              '50%': { opacity: 0.6 }
            }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '40%',
            right: '15%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 5s ease-in-out infinite',
            animationDelay: '2s'
          }} />
          <Box sx={{
            position: 'absolute',
            bottom: '20%',
            left: '30%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 6s ease-in-out infinite',
            animationDelay: '4s'
          }} />
        </Box>

        {/* Header */}
        <AppBar 
          position="fixed"
          elevation={scrolled ? 4 : 0}
          sx={{ 
            background: scrolled 
              ? 'rgba(15, 23, 42, 0.9)' 
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            transition: 'all 0.3s ease',
            zIndex: 1200
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ py: 2 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  FS
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    display: { xs: 'none', sm: 'block' },
                    fontSize: '1.3rem'
                  }}
                >
                  Founder Support
                </Typography>
              </Stack>

              <Stack 
                direction="row" 
                spacing={1}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                {navigation.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      px: 2,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>

              <IconButton
                color="inherit"
                onClick={() => setMobileMenuOpen(true)}
                sx={{ 
                  display: { md: 'none' },
                  background: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)'
                  }
                }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          PaperProps={{
            sx: {
              width: 280,
              background: 'rgba(30, 41, 59, 0.95)',
              backdropFilter: 'blur(20px)'
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <List>
              {navigation.map((item) => (
                <ListItem key={item}>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      py: 1.5,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item} 
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ pt: 20, pb: 12, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={800}>
                <Box>
                  <Chip
                    label="🚀 Join 10,000+ Smart Shoppers"
                    sx={{
                      mb: 3,
                      background: 'rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      color: '#c084fc',
                      fontWeight: 600,
                      py: 2.5,
                      px: 1
                    }}
                  />

                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 'bold',
                      lineHeight: 1.2
                    }}
                  >
                    Founder{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Support
                    </Box>
                  </Typography>

                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 5, lineHeight: 1.7, fontSize: '1.2rem' }}
                  >
                    Join our <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Founder Support</Box> WhatsApp group and unlock exclusive deals, top-selling products, and insider tips to save big every day!
                  </Typography>

                  <Stack spacing={2} sx={{ mb: 5 }}>
                    {benefits.map((benefit, index) => (
                      <Zoom in timeout={800 + (index * 200)} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              transform: 'translateX(8px)'
                            }
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: benefit.color,
                              boxShadow: `0 8px 24px ${benefit.color}40`,
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)'
                              }
                            }}
                          >
                            {benefit.icon}
                          </Avatar>
                          <Typography variant="body1" color="text.secondary" sx={{ pt: 1 }}>
                            {benefit.text}
                          </Typography>
                        </Paper>
                      </Zoom>
                    ))}
                  </Stack>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp />}
                    endIcon={<ChevronRight />}
                    sx={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(16, 185, 129, 0.5)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Join Now & Grab Deals
                  </Button>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Zoom in timeout={1000}>
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    borderRadius: 6,
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -2,
                      background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
                      borderRadius: 6,
                      zIndex: -1,
                      opacity: 0.6,
                      filter: 'blur(20px)'
                    },
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Founder meeting"
                    sx={{
                      width: '100%',
                      height: { xs: 300, md: 450 },
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Container>

        {/* Group Info */}
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&::before': {
                    opacity: 0.3
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 300,
                  height: 300,
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transition: 'opacity 0.3s ease',
                  opacity: 0.15
                }
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  <People sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h3" fontWeight="bold">
                  Founder Support Group
                </Typography>
              </Stack>
              <Typography variant="h6" color="text.secondary">
                Connect directly with founders and get insider guidance on products and services.
              </Typography>
            </Paper>
          </Fade>
        </Container>

        {/* Products Section */}
        <Container maxWidth="lg" sx={{ py: 10, position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                margin: '0 auto 16px',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
              }}
            >
              <ShoppingBag sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Related Products
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Handpicked deals just for you
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Zoom in timeout={800 + (index * 200)}>
                  <Card
                    elevation={0}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s ease',
                      transform: hoveredCard === index ? 'translateY(-12px)' : 'translateY(0)',
                      '&:hover': {
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={product.image}
                        alt={product.title}
                        sx={{
                          transition: 'transform 0.5s ease',
                          transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />
                      <Chip
                        label={product.badge}
                        color={product.badgeColor}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontWeight: 'bold',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                          opacity: hoveredCard === index ? 1 : 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {product.title}
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          variant="h5"
                          sx={{
                            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold'
                          }}
                        >
                          {product.price}
                        </Typography>
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{
                            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #7e22ce 0%, #be185d 100%)'
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials */}
        <Container maxWidth="lg" sx={{ py: 10, position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 8 }}>
            What Members Are Saying
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in timeout={1000 + (index * 200)}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)'
                      }
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          background: testimonial.gradient,
                          fontWeight: 'bold',
                          fontSize: '1.5rem',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
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
                    </Stack>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontStyle: 'italic', lineHeight: 1.8 }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Final CTA */}
        <Box sx={{ py: 12, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  animation: 'pulse 3s ease-in-out infinite'
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                >
                  Don't Miss Out on Today's Exclusive Deals!
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 5 }}>
                  Click the button below to join the{' '}
                  <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    Founder Support
                  </Box>{' '}
                  WhatsApp group and start saving instantly.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsApp />}
                  endIcon={<ChevronRight />}
                  sx={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    py: 2.5,
                    px: 6,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 12px 48px rgba(16, 185, 129, 0.5)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Join Now & Save
                </Button>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 6,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body1" textAlign="center" color="text.secondary">
              © 2024 Founder Support. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}