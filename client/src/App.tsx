import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Photography from './pages/Photography';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Order from './pages/Order';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import AddProject from './pages/Admin/AddProject';
import AdminRoute from './components/AdminRoute';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CookieConsent from './components/CookieConsent';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans cursor-none md:cursor-default">
      <CustomCursor />
      <ScrollProgress />
      <CookieConsent />
      {!isAuthPage && <Header />}
      <ScrollToTop />
      {!isAuthPage && <ChatWidget />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/order" element={<Order />} />
          <Route path="/resources" element={<Blog />} />
          <Route path="/insights/:id" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="add-project" element={<AddProject />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
