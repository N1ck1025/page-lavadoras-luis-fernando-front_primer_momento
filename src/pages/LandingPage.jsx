import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Coverage from '../components/Coverage';
import FAQ from '../components/FAQ';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Modal from '../components/Modal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { titleToValue, services } from '../data/data';

export default function LandingPage() {
  const [openModalId, setOpenModalId] = useState(null);
  const [preselectedService, setPreselectedService] = useState(null);

  useScrollReveal();

  const handleOpenModal = (id) => setOpenModalId(id);
  const handleCloseModal = () => setOpenModalId(null);

  const handleBookFromModal = (service) => {
    const val = titleToValue[service.title];
    if (val) setPreselectedService(val);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services onOpenModal={handleOpenModal} services={services} />
        <HowItWorks />
        <Reviews />
        <About />
        <Coverage />
        <FAQ />
        <BookingForm
          preselectedService={preselectedService}
          onPreselectedConsumed={() => setPreselectedService(null)}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <Modal
        serviceId={openModalId}
        onClose={handleCloseModal}
        onBook={handleBookFromModal}
      />
    </>
  );
}
