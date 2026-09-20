"use client";

import { useState } from "react";
import Link from "next/link";
import Illustration from "../svgs/svg-illustration";
import ContactModal from "./contact-modal";

export default function ArticleHeader() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer — Light Theme */}
      <nav
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white border-l border-slate-200/80 shadow-2xl flex flex-col z-[101] md:hidden transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <span className="text-lg font-bold text-slate-900 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">Menu</span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
          <li>
            <Link
              href="/#technology"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="/#benefits"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/calculator"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-3 px-3.5 text-emerald-600 font-bold text-[15px] rounded-xl bg-emerald-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#customers"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customers
            </Link>
          </li>
        </ul>
        <div className="p-5 border-t border-slate-100">
          <button
            type="button"
            className="w-full h-11 flex items-center justify-center rounded-xl bg-primary text-slate-950 text-[15px] font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/25 cursor-pointer"
            onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <nav className="mx-auto flex h-18 w-full max-w-324 items-center justify-between px-6 md:px-18 max-lg:px-5">
          <Link className="flex items-center gap-3.5" href="/" aria-label="Vectolift home">
            <Illustration cid="article-logo" />
            <span className="text-[1.75rem] font-extrabold leading-none text-slate-900 max-lg:text-[1.35rem]">
              vectolift
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link className="hover:text-slate-900 transition-colors" href="/#technology">Technology</Link>
            <Link className="hover:text-slate-900 transition-colors" href="/#benefits">Benefits</Link>
            <Link className="hover:text-slate-900 transition-colors" href="/calculator">Calculator</Link>
            <Link className="hover:text-slate-900 transition-colors" href="/faq">FAQ</Link>
            <Link className="text-emerald-600 font-semibold" href="/blog">Blog</Link>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="rounded-lg bg-primary px-4 py-2 font-bold text-slate-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            >
              Contact Us
            </button>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hidden sm:inline-flex rounded-lg bg-primary px-3.5 py-1.5 text-xs font-bold text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
