import { Phone, MessageCircle, MapPin, Bike, Heart } from "lucide-react";
import {
  restaurant,
  getPhoneLink,
  getZaloLink,
  getMapsLink,
  getFanPageLink,
} from "@/config/restaurant";

export default function Footer() {
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();
  const fanPageLink = getFanPageLink();
  const mapsLink = getMapsLink();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
                T
              </span>
              <div>
                <p className="font-display text-lg font-bold text-background">
                  {restaurant.name}
                </p>
                <p className="text-xs text-background/60">
                  {restaurant.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70">
              {restaurant.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Liên hệ
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {restaurant.address}
                </a>
              </li>
              <li>
                <a
                  href={phoneLink || "#"}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {restaurant.phone || "Cập nhật soon"}
                </a>
              </li>
              <li>
                <a
                  href={zaloLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                  Zalo
                </a>
              </li>
              <li>
                <a
                  href={fanPageLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Heart className="h-4 w-4 shrink-0 text-primary" />
                  FanPage
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Bike className="h-4 w-4 shrink-0 text-primary" />
                Ship bán kính {restaurant.deliveryRadius} Hà Nội
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Menu
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-primary transition-colors"
                >
                  Menu đặc sản
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-primary transition-colors"
                >
                  Vì sao chọn Trọng Thái
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  className="hover:text-primary transition-colors"
                >
                  Giao hàng
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-primary transition-colors"
                >
                  Địa chỉ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 text-center text-xs text-background/50">
          <p>
            &copy; {new Date().getFullYear()} {restaurant.name} -{" "}
            {restaurant.tagline}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
