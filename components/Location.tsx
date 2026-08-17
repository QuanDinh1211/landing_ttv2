import { MapPin, Navigation, Phone, MessageCircle } from "lucide-react";
import {
  restaurant,
  getMapsLink,
  getPhoneLink,
  getZaloLink,
} from "@/config/restaurant";

export default function Location() {
  const mapsLink = getMapsLink();
  const phoneLink = getPhoneLink();
  const zaloLink = getZaloLink();

  return (
    <section id="location" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-4 w-4" />
            Địa chỉ
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Địa chỉ quán
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border bg-card p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Địa chỉ</p>
                <p className="font-display text-xl font-bold text-foreground">
                  {restaurant.address}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Điện thoại</p>
                <p className="font-display text-xl font-bold text-foreground">
                  {restaurant.phone || "Cập nhật soon"}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                <Navigation className="h-5 w-5" />
                Xem chỉ đường
              </a>
              {zaloLink && (
                <a
                  href={zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-base font-bold text-secondary-foreground transition-all hover:bg-accent/40 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Zalo
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border shadow-sm min-h-[300px]">
            <iframe
              title={`Bản đồ ${restaurant.address}`}
              src={restaurant.googleMapsUrl}
              className="h-full w-full"
              style={{ minHeight: 300, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
