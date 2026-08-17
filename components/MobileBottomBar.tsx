"use client";

import { Globe, Phone, MessageCircle } from "lucide-react";
import { getPhoneLink, getZaloLink, getFanPageLink } from "@/config/restaurant";

export default function MobileBottomBar() {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();
  const fanPageLink = getFanPageLink();

  if (!phoneLink && !zaloLink && !fanPageLink) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:hidden">
      {phoneLink && (
        <a
          href={phoneLink}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg active:bg-primary/90 transition-all"
        >
          <Phone className="h-6 w-6" />
        </a>
      )}
      {fanPageLink && (
        <a
          href={fanPageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] text-white shadow-lg active:bg-[#1877F2]/90 transition-all"
        >
          <Globe className="h-6 w-6" />
        </a>
      )}
      {zaloLink && (
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background shadow-lg active:bg-foreground/90 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      )}
    </div>
  );
}
