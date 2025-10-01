import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import EventsCalendar from './components/EventsCalendar';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Header />
      <main>
        <Hero />
        <Offerings />
        <EventsCalendar />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
