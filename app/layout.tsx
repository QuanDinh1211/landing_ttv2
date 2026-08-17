import './globals.css';
import type { Metadata } from 'next';
import { restaurant } from '@/config/restaurant';

export const metadata: Metadata = {
  metadataBase: new URL('https://trongthai.vn'),
  title: `${restaurant.name} - ${restaurant.tagline} | Gỏi cá tại Hà Nội`,
  description: `${restaurant.name} chuyên đặc sản Nga Sơn, Thanh Hóa với cá dưa, cá nhệch. Nhận ship trong bán kính ${restaurant.deliveryRadius} tại Hà Nội.`,
  keywords: [
    'đặc sản Nga Sơn',
    'gỏi cá Nga Sơn',
    'cá nhệch Nga Sơn',
    'cá dưa',
    'đặc sản Thanh Hóa tại Hà Nội',
    'gỏi cá Hà Nội',
    'cá nhệch Hà Nội',
  ],
  openGraph: {
    title: `${restaurant.name} - ${restaurant.tagline} | Gỏi cá tại Hà Nội`,
    description: `Đặc sản cá dưa, cá nhệch Nga Sơn - Thanh Hóa. Tươi ngon, chuẩn vị quê nhà, phục vụ tại Hà Nội. Nhận ship bán kính ${restaurant.deliveryRadius}.`,
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://images.pexels.com/photos/33062498/pexels-photo-33062498.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: `${restaurant.name} - ${restaurant.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${restaurant.name} - ${restaurant.tagline}`,
    description: `Đặc sản cá dưa, cá nhệch Nga Sơn - Thanh Hóa. Tươi ngon, chuẩn vị quê nhà.`,
    images: [
      'https://images.pexels.com/photos/33062498/pexels-photo-33062498.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
