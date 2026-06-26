import { useState } from 'react';
import { ApplyFormProvider } from './context/ApplyFormContext.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Loader from './components/layout/Loader.jsx';
import ApplyFormModal from './components/layout/ApplyFormModal.jsx';
import WhatsAppFloat from './components/layout/WhatsAppFloat.jsx';
import Hero from './components/sections/Hero.jsx';
import TrustedBy from './components/sections/TrustedBy.jsx';
import SearchSection from './components/sections/SearchSection.jsx';
import WhyChooseUs from './components/sections/WhyChooseUs.jsx';
import TurkeyInfo from './components/sections/TurkeyInfo.jsx';
import OurServices from './components/sections/OurServices.jsx';
import OurProcess from './components/sections/OurProcess.jsx';
import FindUniversity from './components/sections/FindUniversity.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import BlogGuides from './components/sections/BlogGuides.jsx';
import LetsConnect from './components/sections/LetsConnect.jsx';
import Newsletter from './components/sections/Newsletter.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ApplyFormProvider>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <ApplyFormModal />
      <Header />
      <main>
        {/* Page 1 Sections */}
        <Hero />
        <SearchSection />
        <WhyChooseUs />
        <TrustedBy />
        <TurkeyInfo />
        <OurServices />

        {/* Page 2 Sections */}
        <OurProcess />
        <FindUniversity />
        <Testimonials />
        <BlogGuides />
        <LetsConnect />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
    </ApplyFormProvider>
  );
}

export default App;
