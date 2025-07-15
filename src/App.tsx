import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import About from './pages/About';
import WealthManagement from './pages/services/WealthManagement';
import FinancialPlanning from './pages/services/FinancialPlanning';
import TaxPlanning from './pages/services/TaxPlanning';
import InsurancePlanning from './pages/services/InsurancePlanning';
import BorrowingSolutions from './pages/services/BorrowingSolutions';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/wealth-management" element={<WealthManagement />} />
            <Route path="/services/financial-planning" element={<FinancialPlanning />} />
            <Route path="/services/tax-planning" element={<TaxPlanning />} />
            <Route path="/services/insurance-planning" element={<InsurancePlanning />} />
            <Route path="/services/borrowing-solutions" element={<BorrowingSolutions />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
