import React from 'react';
import { Hero } from './HeroV6.jsx';
import { About, Services, PromiseBand, Apart, Process, OtherServices } from './SectionsV6.jsx';
import { Portfolio, Reviews, Contact, Footer } from './Sections2V6.jsx';

export default function AppV6() {
  const f = React.useRef(null);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <PromiseBand />
      <Apart />
      <Process />
      <Portfolio />
      <OtherServices />
      <Reviews />
      <Contact formRef={f} />
      <Footer />
    </div>
  );
}
