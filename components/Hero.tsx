'use client';

import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import {
  restaurant,
  heroImage,
  getPhoneLink,
  getZaloLink,
} from '@/config/restaurant';

export default function Hero() {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-12"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gỏi cá Nga Sơn đặc sản Trọng Thái"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20">
            <MapPin className="h-3.5 w-3.5" />
            Đặc sản Nga Sơn tại Hà Nội
          </span>

          <h1 className="mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            {restaurant.name}
            <span className="block mt-2 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              {restaurant.tagline}
            </span>
          </h1>

          <p className="mt-4 font-display text-lg italic text-foreground/80 sm:text-xl">
            &ldquo;{restaurant.slogan}&rdquo;
          </p>

          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            {restaurant.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {phoneLink && (
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-[1.02] active:scale-100"
              >
                <Phone className="h-5 w-5" />
                Gọi đặt món
              </a>
            )}
            {zaloLink && (
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground/90 px-7 py-3.5 text-base font-bold text-background shadow-lg transition-all hover:bg-foreground hover:scale-[1.02] active:scale-100"
              >
                <MessageCircle className="h-5 w-5" />
                Liên hệ Zalo
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Cá dưa & cá nhệch tươi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Chuẩn vị truyền thống
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ship {restaurant.deliveryRadius} Hà Nội
            </span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors"
        aria-label="Cuộn xuống"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
