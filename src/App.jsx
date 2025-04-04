import { useState, useEffect } from 'react';
import Header from './components/Header';
import StarBackground from './components/StarBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ThemesSection from './components/ThemesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import FAQsSection from './components/FAQsSection';
import OrganizersSection from './components/OrganizersSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date('2025-04-25T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  });

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date('2025-04-25T00:00:00');
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Righteous&family=VT323&display=swap" rel="stylesheet" />
      
      {/* Header Component (which already includes Navbar) */}
      <Header />
      
      {/* Background Effects */}
      <StarBackground mousePosition={{ x: 0, y: 0 }} windowSize={windowSize} />

      {/* Main content arranged according to navbar */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Sections ordered according to navbar */}
        <AboutSection />
        <ThemesSection />
        <TimelineSection />
        <PrizesSection />
        <SponsorsSection />
        <FAQsSection />
        <OrganizersSection />
        <CommunitySection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
