'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { restaurant, getPhoneLink, getZaloLink } from '@/config/restaurant';

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Đặc điểm', href: '#benefits' },
  { label: 'Giao hàng', href: '#delivery' },
  { label: 'Địa chỉ', href: '#location' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              T
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`font-display text-base font-bold transition-colors ${
                  scrolled ? 'text-foreground' : 'text-foreground'
                }`}
              >
                {restaurant.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {restaurant.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {zaloLink && (
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-accent/40 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Zalo
              </a>
            )}
            {phoneLink && (
              <a
                href={phoneLink}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Phone className="h-4 w-4" />
                Gọi đặt món
              </a>
            )}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary"
            aria-label="Mở menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-xl border bg-popover p-3 shadow-lg animate-fade-in">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground/90 hover:text-primary rounded-md hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex gap-2 border-t pt-3">
              {phoneLink && (
                <a
                  href={phoneLink}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <Phone className="h-4 w-4" /> Gọi ngay
                </a>
              )}
              {zaloLink && (
                <a
                  href={zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Zalo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
