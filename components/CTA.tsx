import { Phone, MessageCircle } from 'lucide-react';
import { getPhoneLink, getZaloLink } from '@/config/restaurant';

export default function CTA() {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">
          Thèm đặc sản Nga Sơn?
        </h2>
        <p className="mt-4 text-base text-primary-foreground/90 sm:text-lg">
          Gọi ngay để đặt món hoặc nhắn Zalo cho Trọng Thái.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {phoneLink && (
            <a
              href={phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:bg-background/90 hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              Gọi ngay
            </a>
          )}
          {zaloLink && (
            <a
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground/20 px-8 py-4 text-lg font-bold text-primary-foreground ring-1 ring-primary-foreground/30 backdrop-blur transition-all hover:bg-foreground/30 hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Nhắn Zalo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
