import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-emerald-50/70 to-stone-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            Grow food, soil, and community
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            We’re a local urban farming co‑op offering hands-on workshops, seasonal produce boxes, and neighborhood compost drop‑offs. Building healthier blocks—one bed at a time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#offerings" className="inline-flex items-center rounded-md bg-emerald-700 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">Explore Offerings</a>
            <a href="#calendar" className="inline-flex items-center rounded-md bg-stone-800 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-500">See Calendar</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-video w-full md:w-[520px] rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1600&auto=format&fit=crop"
              alt="Urban garden beds with volunteers harvesting greens"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
