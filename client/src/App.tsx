import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import ChatWidget from './components/ChatWidget'; // Import ChatWidget
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About'; // Import About
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import AddProject from './pages/Admin/AddProject';
import AdminRoute from './components/AdminRoute';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <ScrollToTop />
      <div className="fixed bottom-8 left-8 z-50">
        <ChatWidget />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="add-project" element={<AddProject />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
