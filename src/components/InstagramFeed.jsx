import React from 'react';
import { Instagram } from 'lucide-react';

// Simple embed using a public hashtag widget approach or profile link with grid of images.
// In production, replace with Instagram Basic Display API or a service like LightWidget.
const samplePosts = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524594227084-df7d1e79f395?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1200&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-16 sm:py-20 bg-gradient-to-b from-emerald-50/50 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 flex items-center gap-2">
              <Instagram className="w-7 h-7 text-emerald-700" />
              From Instagram
            </h2>
            <p className="mt-1 text-stone-700">Follow our daily growing tips and harvest highlights.</p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-stone-900 text-white px-4 py-2 text-sm font-medium hover:bg-stone-800"
          >
            Visit Profile
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {samplePosts.map((src, i) => (
            <a key={i} href="#" className="group block aspect-square overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
              <img src={src} alt="Instagram post" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
