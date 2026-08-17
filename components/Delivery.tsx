import { Bike, MapPin, Phone, MessageCircle } from 'lucide-react';
import {
  restaurant,
  deliveryImage,
  getPhoneLink,
  getZaloLink,
} from '@/config/restaurant';

export default function Delivery() {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={deliveryImage}
                alt="Giao hàng đặc sản Nga Sơn tại Hà Nội"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-lg">
              <Bike className="h-7 w-7" />
              <div>
                <p className="font-display text-lg font-bold leading-none">
                  Ship {restaurant.deliveryRadius}
                </p>
                <p className="text-xs opacity-90">tại Hà Nội</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              <Bike className="h-4 w-4" />
              Giao hàng
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ship tận nơi tại Hà Nội
            </h2>
            <p className="mt-3 font-display text-xl font-bold text-primary">
              Bán kính giao hàng lên đến {restaurant.deliveryRadius}
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Không cần đi xa, bạn vẫn có thể thưởng thức đặc sản Nga Sơn ngay tại
              nhà.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-background px-4 py-3 text-sm text-foreground ring-1 ring-border">
              <MapPin className="h-4 w-4 text-primary" />
              {restaurant.address}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {phoneLink && (
                <a
                  href={phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5" />
                  Đặt món ngay
                </a>
              )}
              {zaloLink && (
                <a
                  href={zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground/90 px-6 py-3.5 text-base font-bold text-background shadow-lg transition-all hover:bg-foreground hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Nhắn Zalo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
