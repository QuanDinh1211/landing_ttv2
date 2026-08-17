import { Fish, Leaf, Users, Bike } from 'lucide-react';
import { benefits } from '@/config/restaurant';

const iconMap = {
  Fish,
  Leaf,
  Users,
  Bike,
} as const;

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Điểm nổi bật
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Vì sao chọn Trọng Thái?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = iconMap[b.icon as keyof typeof iconMap];
            return (
              <div
                key={b.title}
                className="group flex flex-col items-center rounded-2xl border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {Icon ? <Icon className="h-7 w-7" /> : null}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
