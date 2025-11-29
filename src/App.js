// DealCartHome.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Paper, Grid, Chip, Button,
  Skeleton, Slide, Snackbar, Badge, Container, Card, CardContent, CardActions,
  Avatar, Divider, List, ListItem, ListItemText, Link, TextField, Drawer,
  useMediaQuery, Menu, MenuItem, Fade, CssBaseline,
} from '@mui/material';
import {
  Search, ShoppingCart, Person, LocationOn, FlashOn, PhoneAndroid, Kitchen,
  LocalGroceryStore, EmojiFoodBeverage, Spa, Checkroom, LaptopMac, Storefront,
  MoreHoriz, Favorite, Share, LocalOffer, TrendingUp, ArrowForward, ShoppingBasket,
  CreditCard, RocketLaunch, ArrowRightAlt, Facebook, Twitter, Instagram,
  LinkedIn, Email, Phone, Security, Payment, LocalShipping,
  SupportAgent, Download, Apple, Android, Menu as MenuIcon, Close, ExpandMore,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/* ------------------------------------------------------------------ */
/* 1.  THEME                                                          */
/* ------------------------------------------------------------------ */
const theme = createTheme({
  palette: {
    primary: { main: '#6366f1', light: '#e0e7ff', dark: '#4f46e5' },
    secondary: { main: '#f59e0b', light: '#fef3c7', dark: '#d97706' },
    grey: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 900: '#18181b' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif' },
  components: {
    MuiPaper: { styleOverrides: { root: { boxShadow: '0 4px 20px rgba(0,0,0,.05)', borderRadius: 16 } } },
    MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 12, fontWeight: 600 } } },
  },
});

/* ------------------------------------------------------------------ */
/* 2.  TINY GLOBAL STATE                                              */
/* ------------------------------------------------------------------ */
const CartCtx = createContext();
const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const add = (id) => setItems((p) => (p.includes(id) ? p : [...p, id]));
  const qty = items.length;
  return <CartCtx.Provider value={{ add, qty }}>{children}</CartCtx.Provider>;
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
        autoHideDuration={1200}
        message={msg}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </ToastCtx.Provider>
  );
};
const useToast = () => useContext(ToastCtx);

/* ------------------------------------------------------------------ */
/* 3.  DATA  (identical to your file)                                */
/* ------------------------------------------------------------------ */
const categories = [
  { label: 'Grocery', icon: <LocalGroceryStore /> },
  { label: 'Beauty', icon: <Spa /> },
  { label: 'Fashion', icon: <Checkroom /> },
  { label: 'Lifestyle', icon: <MoreHoriz /> },
  { label: 'Electronics', icon: <LaptopMac /> },
];
const flash = [
  { label: 'Fruits & Breakfast', icon: <EmojiFoodBeverage /> },
  { label: 'Meat', icon: <Kitchen /> },
  { label: 'Monthly', icon: <Storefront /> },
  { label: 'Baby Care', icon: <Spa /> },
  { label: 'Mobile', icon: <PhoneAndroid /> },
  { label: '1 $ Store', icon: <FlashOn /> },
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
  { id: 9, title: 'Organic Bananas', price: 'Rs. 120', oldPrice: 'Rs. 150', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', off: '20% OFF' },
  { id: 10, title: 'Fresh Milk 1L', price: 'Rs. 85', oldPrice: 'Rs. 95', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', off: '11% OFF' },
  { id: 11, title: 'Whole Wheat Bread', price: 'Rs. 65', oldPrice: 'Rs. 75', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400', off: '13% OFF' },
  { id: 12, title: 'Free Range Eggs', price: 'Rs. 180', oldPrice: 'Rs. 200', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400', off: '10% OFF' },
];

/* ------------------------------------------------------------------ */
/* 4.  RE-USABLE UI PIECES                                            */
/* ------------------------------------------------------------------ */
const ProductCard = ({ img, title, price, oldPrice, off, id }) => {
  const [loaded, setLoaded] = useState(false);
  const [liked, setLiked] = useState(false);
  const { add } = useCart();
  const toast = useToast();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, border: '1px solid', borderColor: 'grey.100', transition: '.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
      <Chip label={off} color="primary" size="small" sx={{ position: 'absolute', top: -8, left: 12, zIndex: 2, fontWeight: 700 }} />
      <IconButton onClick={() => setLiked((v) => !v)} sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, bgcolor: 'rgba(255,255,255,.9)' }} size="small">
        <Favorite color={liked ? 'error' : 'action'} />
      </IconButton>

      <Box sx={{ p: 2, pb: 0 }}>
        <Box sx={{ height: 180, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!loaded && <Skeleton variant="rectangular" width="100%" height={180} sx={{ borderRadius: 3 }} />}
          <Box component="img" src={img} alt={title} onLoad={() => setLoaded(true)} sx={{ width: '100%', height: 180, objectFit: 'contain', display: loaded ? 'block' : 'none', borderRadius: 2 }} />
        </Box>
      </Box>

      <CardContent sx={{ p: 2, pb: 1, flexGrow: 1 }}>
        <Typography variant="body2" fontWeight={600} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', height: 40 }}>{title}</Typography>
        <Box display="flex" alignItems="baseline" gap={1} mt={1}>
          <Typography variant="h6" color="primary" fontWeight={700}>{price}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>{oldPrice}</Typography>
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
          sx={{ borderRadius: 3, py: 1.2, fontSize: '0.9rem', fontWeight: 600 }}
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
      <Box display="flex" alignItems="center" gap={1.5}>{icon}<Typography variant="h5" fontWeight={700}>{title}</Typography></Box>
      {action}
    </Box>
    <Grid container spacing={2.5}>{children}</Grid>
  </Box>
);

/* ------------------------------------------------------------------ */
/* 5.  HEADER                                                         */
/* ------------------------------------------------------------------ */
const Header = () => {
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawer, setDrawer] = useState(false);
  const { qty } = useCart();
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', color: 'text.primary', borderBottom: '1px solid', borderColor: 'grey.200' }}>
      <Container maxWidth="lg">
        {/* top promo bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1, borderBottom: '1px solid', borderColor: 'grey.100' }}>
          <Typography variant="body2" color="text.secondary">Free delivery on orders above ₹499</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button startIcon={<LocationOn sx={{ fontSize: 16 }} />} sx={{ color: 'text.secondary', fontSize: '0.8rem', minWidth: 'auto' }}>Karachi</Button>
            <Typography variant="body2" color="text.secondary">|</Typography>
            <Button sx={{ color: 'text.secondary', fontSize: '0.8rem', minWidth: 'auto' }}>Track Order</Button>
          </Box>
        </Box>

        {/* main bar */}
        <Toolbar disableGutters sx={{ py: 1.5 }}>
          <Typography variant="h4" fontWeight={800} sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #4f46e5 100%)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mr: { md: 4 } }}>DealCart</Typography>

          {/* search */}
          <Paper component="form" sx={{ p: '4px 16px', display: 'flex', alignItems: 'center', flex: 1, maxWidth: 600, mx: { md: 4 }, borderRadius: 3, border: '2px solid', borderColor: 'grey.200', '&:focus-within': { borderColor: 'primary.main' } }}>
            <Search sx={{ color: 'text.secondary', mr: 1 }} />
            <input type="text" placeholder="Search for products, brands and more..." style={{ border: 0, outline: 0, flex: 1, fontSize: 14 }} />
          </Paper>

          {/* actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
            {!isMd && <IconButton onClick={() => setDrawer(true)}><Search /></IconButton>}
            <IconButton sx={{ flexDirection: 'column', minWidth: 'auto', color: 'text.secondary' }}><Person /><Typography variant="caption">Profile</Typography></IconButton>
            <IconButton sx={{ flexDirection: 'column', minWidth: 'auto', color: 'text.secondary' }}>
              <Badge badgeContent={qty} color="primary"><ShoppingCart /></Badge>
              <Typography variant="caption">Cart</Typography>
            </IconButton>
            {!isMd && <IconButton onClick={() => setDrawer(true)}><MenuIcon /></IconButton>}
          </Box>
        </Toolbar>

        {/* category pills – desktop only */}
        {isMd && (
          <Box sx={{ display: 'flex', gap: 4, pb: 2, overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
            {categories.map((c) => (
              <Button key={c.label} startIcon={c.icon} sx={{ color: 'text.secondary', fontWeight: 600, borderRadius: 0, whiteSpace: 'nowrap' }}>
                {c.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>

      {/* mobile drawer */}
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" fontWeight={700}>Menu</Typography>
            <IconButton onClick={() => setDrawer(false)}><Close /></IconButton>
          </Box>
          <Divider />
          <List>
            {categories.map((c) => (
              <ListItem button key={c.label}>
                <ListItemText primary={c.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

/* ------------------------------------------------------------------ */
/* 6.  HERO CAROUSEL                                                  */
/* ------------------------------------------------------------------ */
const heroSlides = [
  { title: 'Save up to 45% on the app', desc: 'Install DealCart today', btn: 'Download App', bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600' },
  { title: 'Free delivery above ₹499', desc: 'Across Karachi', btn: 'Order Now', bg: 'https://images.unsplash.com/photo-1572584642822-6f8de02439c4?w=1600' },
  { title: 'Fresh groceries every morning', desc: 'Direct from farms', btn: 'Shop Produce', bg: 'https://images.unsplash.com/photo-1488459716781-31db52590fe9?w=1600' },
];
const Hero = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = heroSlides[idx];
  return (
    <Paper sx={{ height: { xs: 260, md: 380 }, borderRadius: 4, position: 'relative', backgroundImage: `url(${s.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', color: '#fff', mb: 4 }}>
      <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(99,102,241,.85) 0%, rgba(79,70,229,.92) 100%)` }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>{s.title}</Typography>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, fontSize: { xs: '1rem', md: '1.25rem' } }}>{s.desc}</Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, borderRadius: 3 }}>{s.btn}</Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

/* ------------------------------------------------------------------ */
/* 7.  PAGE                                                           */
/* ------------------------------------------------------------------ */
export default function DealCartHome() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <ToastProvider>
          <Header />
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Hero />

            {/* 3-step */}
            <Box sx={{ py: 6 }}>
              <Typography variant="h4" fontWeight={800} textAlign="center" gutterBottom>Grocery shopping in a few taps</Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>Experience the future of grocery shopping with our seamless three-step process</Typography>
              <Grid container spacing={4}>
                {[ { icon: <ShoppingBasket sx={{ fontSize: 48 }} />, title: 'Browse', desc: 'Select from a wide range of groceries, beauty products, and everyday essentials.', step: '1' }, { icon: <CreditCard sx={{ fontSize: 48 }} />, title: 'Order', desc: 'Checkout is super easy. Choose payment & delivery slots that work for you.', step: '2' }, { icon: <RocketLaunch sx={{ fontSize: 48 }} />, title: 'Enjoy', desc: 'We carefully pick and deliver to your door, so you have more time for what matters!', step: '3' } ].map((f) => (
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

            {/* LANEL */}
            <Paper sx={{ background: `linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)`, color: '#fff', borderRadius: 4, p: 4, mb: 4, textAlign: 'center' }}>
              <Typography variant="h4" fontWeight={800} gutterBottom>L A N E L</Typography>
              <Typography variant="h6" fontWeight={600} sx={{ opacity: .9 }}>TREAT YOURSELF TO BEAUTY</Typography>
              <Button variant="contained" color="secondary" size="large" endIcon={<ArrowForward />} sx={{ mt: 2, px: 4, borderRadius: 3 }}>Shop Now</Button>
            </Paper>

            {/* sections */}
            <Section title="Everyday Tools, Low Price" icon={<LocalGroceryStore color="primary" />} action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}>
              {everydayItems.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            <Section title="Top Mobile Phones" icon={<PhoneAndroid color="primary" />} action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}>
              {phones.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            <Section title="Gaming Deals" icon={<FlashOn color="primary" />} action={<Button endIcon={<ArrowRightAlt />} color="primary">See all</Button>}>
              {games.map((p) => (
                <Grid item xs={6} sm={4} md={3} key={p.id}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Section>

            {/* category circles – mobile friendly */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" fontWeight={700} mb={2}>Categories</Typography>
              <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
                {categories.map((c) => (
                  <Box key={c.label} sx={{ minWidth: 80, textAlign: 'center' }}>
                    <Avatar sx={{ bgcolor: 'grey.100', color: 'text.secondary', border: '2px solid', borderColor: 'grey.300', width: 64, height: 64, mx: 'auto', mb: 1 }}>{c.icon}</Avatar>
                    <Typography variant="caption" fontWeight={600}>{c.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* footer – same as you had, shortened */}
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Download the app</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Shop on the go, track orders, get exclusive deals</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button startIcon={<Android />} variant="outlined" sx={{ borderRadius: 3 }}>Android</Button>
                <Button startIcon={<Apple />} variant="outlined" sx={{ borderRadius: 3 }}>iOS</Button>
              </Box>
            </Box>
          </Container>
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}