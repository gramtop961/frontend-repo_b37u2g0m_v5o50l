import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-stone-900 font-semibold">GreenRoots Co-op</h3>
          <p className="mt-2 text-sm text-stone-700">Community-powered urban farming. Nonprofit and member-owned.</p>
        </div>
        <div>
          <h4 className="text-stone-900 font-medium">Visit</h4>
          <p className="mt-2 text-sm text-stone-700">123 Sprout Lane, Cityville, USA</p>
          <p className="text-sm text-stone-700">Saturdays 9am–1pm, or by appointment</p>
        </div>
        <div>
          <h4 className="text-stone-900 font-medium">Connect</h4>
          <p className="mt-2 text-sm text-stone-700">hello@greenroots.coop</p>
          <p className="text-sm text-stone-700">@greenrootscoop</p>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-600">© {new Date().getFullYear()} GreenRoots Co-op. All rights reserved.</div>
    </footer>
  );
}
