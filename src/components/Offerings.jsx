import React from 'react';
import { GraduationCap, Box, Recycle, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: GraduationCap,
    title: 'Workshops',
    desc:
      'Seasonal classes on soil health, seed starting, composting, irrigation, and small‑space growing. All ages welcome.',
    cta: 'Browse topics',
    href: '#calendar',
  },
  {
    icon: Box,
    title: 'Produce Boxes',
    desc:
      'Fresh, hyperlocal harvests from our member plots. Sliding‑scale CSA with pickups and limited delivery zones.',
    cta: 'See what’s in season',
    href: '#produce',
  },
  {
    icon: Recycle,
    title: 'Compost Drop‑off',
    desc:
      'Turn kitchen scraps into living soil. Weekly neighborhood drop‑offs and volunteer-powered turning days.',
    cta: 'Find a site',
    href: '#compost',
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">What we offer</h2>
          <p className="mt-2 text-stone-700">
            Practical, community-driven programs that make growing food accessible in the city.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {offerings.map(({ icon: Icon, title, desc, cta, href }) => (
            <div key={title} className="group rounded-xl border border-stone-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-emerald-100 text-emerald-700"><Icon className="w-5 h-5" /></span>
                <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">{desc}</p>
              <a href={href} className="mt-4 inline-flex items-center text-emerald-800 hover:text-emerald-900 font-medium text-sm">
                {cta}
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
