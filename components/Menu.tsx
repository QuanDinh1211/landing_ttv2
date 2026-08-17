import { menu } from '@/config/restaurant';
import MenuCard from './MenuCard';

export default function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Bảng giá
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Menu đặc sản
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Gỏi cá Nga Sơn - Đậm vị, đầy đặn, phù hợp cho những buổi tụ họp.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Giá trên đã bao gồm chế biến. Vui lòng gọi trước để chuẩn bị tươi ngon
          nhất.
        </p>
      </div>
    </section>
  );
}
