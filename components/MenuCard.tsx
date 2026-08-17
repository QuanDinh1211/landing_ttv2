'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { menu, formatPrice, getPhoneLink, getZaloLink } from '@/config/restaurant';

type MenuItem = (typeof menu)[number];

export default function MenuCard({ item }: { item: MenuItem }) {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  const orderHref = phoneLink || zaloLink || '#contact';
  const orderLabel = phoneLink
    ? 'Gọi đặt món'
    : zaloLink
    ? 'Nhắn Zalo đặt món'
    : 'Liên hệ đặt món';

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={`${item.name} - đặc sản Nga Sơn`}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur shadow-sm">
          {item.serving}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-foreground">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="font-display text-2xl font-black text-primary sm:text-3xl">
              {formatPrice(item.price)}
            </span>
            <span className="ml-1 text-sm text-muted-foreground">
              / {item.unit}
            </span>
          </div>
        </div>

        <a
          href={orderHref}
          target={orderHref.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
        >
          {phoneLink ? (
            <Phone className="h-4 w-4" />
          ) : (
            <MessageCircle className="h-4 w-4" />
          )}
          {orderLabel}
        </a>
      </div>
    </div>
  );
}
