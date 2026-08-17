import { aboutImage, restaurant } from '@/config/restaurant';

const highlights = [
  'Đặc sản Nga Sơn, Thanh Hóa',
  'Hương vị truyền thống',
  'Phù hợp gia đình, bạn bè',
  'Có ship tại Hà Nội',
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImage}
                alt="Món ăn đặc sản Nga Sơn Thanh Hóa"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-lg sm:block">
              <p className="font-display text-2xl font-bold leading-none">
                100%
              </p>
              <p className="text-xs">Tươi ngon mỗi ngày</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Về chúng tôi
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Đặc sản Nga Sơn giữa lòng Hà Nội
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {restaurant.name} mang hương vị đặc sản Nga Sơn, Thanh Hóa đến với
              thực khách tại Hà Nội. Những món cá dưa, cá nhệch được chế biến theo
              phong cách truyền thống, mang đậm hương vị quê nhà.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 rounded-lg bg-secondary/60 px-3.5 py-3 text-sm font-medium text-foreground"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
