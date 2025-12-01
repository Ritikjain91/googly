
import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Paper, Grid, Chip, Button,
  Skeleton, Slide, Snackbar, Badge, Container, Card, CardContent, CardActions,
  Avatar, Divider, List, ListItemButton, ListItemText, Link, Drawer,
  useMediaQuery, CssBaseline,
} from '@mui/material';
import {
  Search, ShoppingCart, Person, LocationOn, FlashOn, PhoneAndroid, Kitchen,
  LocalGroceryStore, EmojiFoodBeverage, Spa, Checkroom, LaptopMac, MoreHoriz,
  Favorite, ArrowForward, ArrowRightAlt, Android, Apple, Menu as MenuIcon,
  Close, Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocalShipping,
  SupportAgent, LocalOffer, Security, Payment, RocketLaunch, ShoppingBasket, CreditCard,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/* THEME */
const theme = createTheme({
  palette: {
    primary: { main: '#6366f1', light: '#e0e7ff', dark: '#4f46e5' },
    secondary: { main: '#f59e0b', light: '#fef3c7', dark: '#d97706' },
    grey: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 900: '#18181b' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif',
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,.05)',
          borderRadius: 16,
          overflow: 'hidden'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          }
        }
      }
    },
  },
});

/* TINY GLOBAL STATE */
const CartCtx = createContext();
const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const add = (id) => setItems((p) => (p.includes(id) ? p : [...p, id]));
  const remove = (id) => setItems((p) => p.filter(item => item !== id));
  const qty = items.length;
  return <CartCtx.Provider value={{ add, remove, qty, items }}>{children}</CartCtx.Provider>;
};
const useCart = () => useContext(CartCtx);

const ToastCtx = createContext();
const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const toast = (m) => { setMsg(m); setOpen(true); };
  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Slide}
        autoHideDuration={2000}
        message={msg}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            borderRadius: 3,
            fontWeight: 600,
          }
        }}
      />
    </ToastCtx.Provider>
  );
};
const useToast = () => useContext(ToastCtx);

/* DATA */
const categories = [
  { label: 'Grocery', icon: <LocalGroceryStore /> },
  { label: 'Beauty', icon: <Spa /> },
  { label: 'Fashion', icon: <Checkroom /> },
  { label: 'Lifestyle', icon: <MoreHoriz /> },
  { label: 'Electronics', icon: <LaptopMac /> },
];

const phones = [
  { id: 1, title: 'Infinix Hot 50i (6GB,128GB)', price: 'Rs. 31,249', oldPrice: 'Rs. 33,493', img: 'https://m.media-amazon.com/images/I/61fjjv-EOeL._SL1500_.jpg', off: '7% OFF' },
  { id: 2, title: 'Infinix Smart 9 (4GB,128GB)', price: 'Rs. 26,777', oldPrice: 'Rs. 28,574', img: 'https://m.media-amazon.com/images/I/61qN3kLBPCL._SL1500_.jpg', off: '7% OFF' },
  { id: 3, title: 'Itel S25 (6GB,128GB)', price: 'Rs. 29,060', oldPrice: 'Rs. 31,086', img: 'https://m.media-amazon.com/images/I/71zF9+C1GRL._SL1500_.jpg', off: '7% OFF' },
  { id: 4, title: 'Samsung Galaxy A05s', price: 'Rs. 35,409', oldPrice: 'Rs. 38,069', img: 'https://m.media-amazon.com/images/I/71HI1kmPGUL._SL1500_.jpg', off: '7% OFF' },
];

const games = [
  { id: 5, title: 'Silent Hill F PS5', price: 'Rs. 21,510', oldPrice: 'Rs. 25,000', img: 'https://m.media-amazon.com/images/I/71pSxuZrmLL._SL1500_.jpg', off: '14% OFF' },
  { id: 6, title: 'Jurassic World Evolution 2 PS5', price: 'Rs. 16,910', oldPrice: 'Rs. 20,000', img: 'https://m.media-amazon.com/images/I/71W7Uz7DnkL._SL1500_.jpg', off: '16% OFF' },
  { id: 7, title: 'Paw Patrol PS4', price: 'Rs. 12,080', oldPrice: 'Rs. 15,000', img: 'https://m.media-amazon.com/images/I/81iJCfQ4hRl._SL1500_.jpg', off: '20% OFF' },
  { id: 8, title: 'Ninja Gaiden 4 PS5', price: 'Rs. 22,080', oldPrice: 'Rs. 25,000', img: 'https://m.media-amazon.com/images/I/81R9VjA36LL._SL1500_.jpg', off: '12% OFF' },
];

const everydayItems = [
  { id: 9, title: 'Organic Bananas', price: 'Rs. 120', oldPrice: 'Rs. 150', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=1600', off: '20% OFF' },
  { id: 10, title: 'Fresh Milk 1L', price: 'Rs. 85', oldPrice: 'Rs. 95', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1600', off: '11% OFF' },
  { id: 11, title: 'Whole Wheat Bread', price: 'Rs. 65', oldPrice: 'Rs. 75', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1600', off: '13% OFF' },
  { id: 12, title: 'Free Range Eggs', price: 'Rs. 180', oldPrice: 'Rs. 200', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=1600', off: '10% OFF' },
];

/* PRODUCT CARD: images fill column (cover), consistent aspect ratio */
const ProductCard = ({ img, title, price, oldPrice, off, id }) => {
  const [loaded, setLoaded] = useState(false);
  const [liked, setLiked] = useState(false);
  const { add } = useCart();
  const toast = useToast();

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      border: '1px solid',
      borderColor: 'grey.100',
    }}>
      <Chip
        label={off}
        color="primary"
        size="small"
        sx={{
          position: 'absolute',
          top: 12,
          left: 12,
          zIndex: 3,
          fontWeight: 700,
          fontSize: '0.75rem'
        }}
      />
      <IconButton
        onClick={() => setLiked((v) => !v)}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 3,
          bgcolor: 'rgba(255,255,255,.9)',
          '&:hover': { bgcolor: 'rgba(255,255,255,1)' }
        }}
        size="small"
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        <Favorite color={liked ? 'error' : 'action'} />
      </IconButton>

      {/* Image container with fixed aspect ratio; image covers the area */}
      <Box sx={{ position: 'relative', width: '100%', pt: '100%', bgcolor: 'grey.50' }}>
        {!loaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" sx={{ position: 'absolute', inset: 0 }} />
        )}
        <Box
          component="img"
          src={img}
          alt={title}
          onLoad={() => setLoaded(true)}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: loaded ? 'block' : 'none'
          }}
        />
      </Box>

      <CardContent sx={{ p: 2, pb: 1 }}>
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: 40,
            lineHeight: 1.3
          }}
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="baseline" gap={1} mt={1}>
          <Typography variant="h6" color="primary" fontWeight={700}>
            {price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'line-through' }}
          >
            {oldPrice}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            add(id);
            toast('Added to cart');
          }}
          sx={{
            borderRadius: 3,
            py: 1.2,
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

const Section = ({ title, icon, children, action }) => (
  <Box sx={{ px: { xs: 2, sm: 3 }, py: 4 }}>
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
      <Box display="flex" alignItems="center" gap={1.5}>
        {icon}
        <Typography variant="h5" fontWeight={700}>{title}</Typography>
      </Box>
      {action}
    </Box>
    <Grid container spacing={2.5}>
      {children}
    </Grid>
  </Box>
);

/* HEADER */
const Header = () => {
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawer, setDrawer] = useState(false);
  const { qty } = useCart();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'grey.200'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'grey.100'
        }}>
          <Typography variant="body2" color="text.secondary">
            Free delivery on orders above ₹499
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              startIcon={<LocationOn sx={{ fontSize: 16 }} />}
              sx={{ color: 'text.secondary', fontSize: '0.8rem', minWidth: 'auto' }}
            >
              Karachi
            </Button>
            <Typography variant="body2" color="text.secondary">|</Typography>
            <Button sx={{ color: 'text.secondary', fontSize: '0.8rem', minWidth: 'auto' }}>
              Track Order
            </Button>
          </Box>
        </Box>

        <Toolbar disableGutters sx={{ py: 1.5, gap: 2 }}>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #4f46e5 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              flexShrink: 0
            }}
          >
            DealCart
          </Typography>

          {isMd && (
            <Paper
              component="form"
              sx={{
                p: '4px 16px',
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                maxWidth: 600,
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'grey.200',
                '&:focus-within': { borderColor: 'primary.main' }
              }}
            >
              <Search sx={{ color: 'text.secondary', mr: 1 }} />
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                style={{ border: 0, outline: 0, flex: 1, fontSize: 14, background: 'transparent' }}
              />
            </Paper>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
            {!isMd && (
              <IconButton onClick={() => setDrawer(true)} aria-label="open search">
                <Search />
              </IconButton>
            )}

            <IconButton sx={{ flexDirection: 'column', minWidth: 'auto', color: 'text.secondary' }} aria-label="profile">
              <Person />
              <Typography variant="caption">Profile</Typography>
            </IconButton>

            <IconButton sx={{ flexDirection: 'column', minWidth: 'auto', color: 'text.secondary' }} aria-label="cart">
              <Badge badgeContent={qty} color="primary">
                <ShoppingCart />
              </Badge>
              <Typography variant="caption">Cart</Typography>
            </IconButton>

            {!isMd && (
              <IconButton onClick={() => setDrawer(true)} aria-label="open menu">
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        {isMd && (
          <Box sx={{
            display: 'flex',
            gap: 4,
            pb: 2,
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            {categories.map((c) => (
              <Button
                key={c.label}
                startIcon={c.icon}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  borderRadius: 0,
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  px: 1
                }}
              >
                {c.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>

      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            p: 2
          }
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" fontWeight={700}>Menu</Typography>
            <IconButton onClick={() => setDrawer(false)} aria-label="close drawer">
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {categories.map((c) => (
              <ListItemButton key={c.label}>
                <ListItemText primary={c.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

/* HERO */
const heroSlides = [
  {
    title: 'Save up to 45% on the app',
    desc: 'Install DealCart today',
    btn: 'Download App',
    bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600'
  },
  {
    title: 'Free delivery above ₹499',
    desc: 'Across Karachi',
    btn: 'Order Now',
    bg: 'https://images.unsplash.com/photo-1572584642822-6f8de02439c4?w=1600'
  },
  {
    title: 'Fresh groceries every morning',
    desc: 'Direct from farms',
    btn: 'Shop Produce',
    bg: 'https://images.unsplash.com/photo-1488459716781-31db52590fe9?w=1600'
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const s = heroSlides[idx];

  return (
    <Paper
      sx={{
        height: { xs: 300, md: 400 },
        borderRadius: 4,
        position: 'relative',
        backgroundImage: `url(${s.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        mb: 4,
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, rgba(99,102,241,.85) 0%, rgba(79,70,229,.92) 100%)`
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {s.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                opacity: 0.95,
                fontSize: { xs: '1rem', md: '1.25rem' },
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              {s.desc}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              {s.btn}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

/* MAIN */
export default function DealCartHome() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <ToastProvider>
          <Header />
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Hero />

            {/* 3-step Process */}
            <Box sx={{ py: 6 }}>
              <Typography variant="h4" fontWeight={800} textAlign="center" gutterBottom>
                Grocery shopping in a few taps
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
              >
                Experience the future of grocery shopping with our seamless three-step process
              </Typography>

              <Grid container spacing={4}>
                {[
                  {
                    icon: <ShoppingBasket sx={{ fontSize: 48 }} />,
                    title: 'Browse',
                    desc: 'Select from a wide range of groceries, beauty products, and everyday essentials.',
                    step: '1'
                  },
                  {
                    icon: <CreditCard sx={{ fontSize: 48 }} />,
                    title: 'Order',
                    desc: 'Checkout is super easy. Choose payment & delivery slots that work for you.',
                    step: '2'
                  },
                  {
                    icon: <RocketLaunch sx={{ fontSize: 48 }} />,
                    title: 'Enjoy',
                    desc: 'We carefully pick and deliver to your door, so you have more time for what matters!',
                    step: '3'
                  }
                ].map((f) => (
                  <Grid item xs={12} md={4} key={f.title}>
                    <Paper sx={{ textAlign: 'center', p: 4, borderRadius: 4, height: '100%' }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>{f.icon}</Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>{f.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
                      <Chip label={f.step} sx={{ mt: 2, fontWeight: 700 }} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Promotion */}
            <Paper sx={{
              background: `linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)`,
              color: '#fff',
              borderRadius: 4,
              p: 4,
              mb: 4,
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={800} gutterBottom>L A N E L</Typography>
              <Typography variant="h6" fontWeight={600} sx={{ opacity: .9 }}>TREAT YOURSELF TO BEAUTY</Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ mt: 2, px: 4, borderRadius: 3 }}
              >
                Shop Now
              </Button>
            </Paper>

            {/* Sections with product cards (images now fill columns) */}
            <Section
              title="Everyday Tools, Low Price"
              icon={<LocalGroceryStore color="primary" />}
              action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}
            >
              {everydayItems.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            <Section
              title="Top Mobile Phones"
              icon={<PhoneAndroid color="primary" />}
              action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}
            >
              {phones.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            <Section
              title="Gaming Deals"
              icon={<FlashOn color="primary" />}
              action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}
            >
              {games.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            {/* Categories */}
            <Box sx={{ mb: 4, px: { xs: 2, sm: 3 } }}>
              <Typography variant="h5" fontWeight={700} mb={3}>Categories</Typography>
              <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2, px: 1 }}>
                {categories.map((c) => (
                  <Box key={c.label} sx={{ minWidth: 80, textAlign: 'center' }}>
                    <Avatar sx={{
                      bgcolor: 'grey.100',
                      color: 'text.secondary',
                      border: '2px solid',
                      borderColor: 'grey.300',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 1
                    }}>
                      {c.icon}
                    </Avatar>
                    <Typography variant="caption" fontWeight={600}>{c.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* App Download */}
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>Download the app</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
                Shop on the go, track orders, get exclusive deals and never miss an offer
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  startIcon={<Android />}
                  variant="outlined"
                  size="large"
                  sx={{ borderRadius: 3, px: 3, py: 1 }}
                >
                  Android
                </Button>
                <Button
                  startIcon={<Apple />}
                  variant="outlined"
                  size="large"
                  sx={{ borderRadius: 3, px: 3, py: 1 }}
                >
                  iOS
                </Button>
              </Box>
            </Box>

            {/* Why DealCart */}
            <Box sx={{ py: 6, px: { xs: 2, sm: 3 } }}>
              <Typography variant="h5" fontWeight={700} mb={4} textAlign="center">
                Why DealCart
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Free Delivery',
                    desc: 'Get FREE shipping straight to your doorstep.',
                    icon: <LocalShipping sx={{ fontSize: 40 }} />
                  },
                  {
                    title: 'Easy Returns',
                    desc: 'Hassle-free returns for eligible products.',
                    icon: <SupportAgent sx={{ fontSize: 40 }} />
                  },
                  {
                    title: 'Call Support',
                    desc: '24/7 support to help complete your order.',
                    icon: <Phone sx={{ fontSize: 40 }} />
                  },
                  {
                    title: 'Up to 45% Off',
                    desc: 'Best deals across thousands of products.',
                    icon: <LocalOffer sx={{ fontSize: 40 }} />
                  }
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Paper sx={{ p: 3, height: '100%', textAlign: 'center', borderRadius: 3 }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Latest Blogs */}
            <Box sx={{ py: 6, px: { xs: 2, sm: 3 } }}>
              <Typography variant="h5" fontWeight={700} mb={4}>
                Latest Blogs
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600',
                    title: 'How to make your leather boots last longer',
                    author: 'Admin'
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600',
                    title: 'Top 10 trending T-shirts to buy this season',
                    author: 'Admin'
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600',
                    title: 'Delicious recipes you must try at home',
                    author: 'Admin'
                  }
                ].map((blog, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card sx={{ height: '100%', borderRadius: 3 }}>
                      <Box
                        component="img"
                        src={blog.img}
                        alt={blog.title}
                        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          By {blog.author}
                        </Typography>
                        <Typography variant="h6" fontWeight={600}>
                          {blog.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 6, mt: 6 }}>
              <Container maxWidth="lg">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5" fontWeight={800} gutterBottom>
                      DealCart
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      Your one-stop shop for groceries, electronics, fashion, and more.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <Facebook />
                      </IconButton>
                      <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <Twitter />
                      </IconButton>
                      <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <Instagram />
                      </IconButton>
                      <IconButton sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <LinkedIn />
                      </IconButton>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Shop</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {['Grocery', 'Electronics', 'Fashion', 'Beauty', 'Home & Kitchen'].map((item) => (
                        <Box component="li" key={item} sx={{ mb: 1 }}>
                          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                            {item}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Information</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {['About Us', 'Contact Us', 'Careers', 'Track Order', 'Sitemap'].map((item) => (
                        <Box component="li" key={item} sx={{ mb: 1 }}>
                          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                            {item}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Customer Service</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {['Help Center', 'Returns', 'Product Recalls', 'Accessibility', 'Store Pickup'].map((item) => (
                        <Box component="li" key={item} sx={{ mb: 1 }}>
                          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                            {item}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3} md={3}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Support</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {['Help Center', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item) => (
                        <Box component="li" key={item} sx={{ mb: 1 }}>
                          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                            {item}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                        <Email sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                        support@dealcart.com
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        <Phone sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                        +92 300 1234567
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    © 2024 DealCart. All rights reserved.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Security sx={{ fontSize: 20 }} />
                    <Payment sx={{ fontSize: 20 }} />
                    <LocalShipping sx={{ fontSize: 20 }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Secure Payment & Delivery
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Container>
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
