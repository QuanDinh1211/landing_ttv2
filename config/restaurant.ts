export const restaurant = {
  name: "Trọng Thái",
  tagline: "Đặc sản Nga Sơn, Thanh Hóa",
  slogan: "Gỏi cá Nga Sơn - Đậm vị quê nhà",
  description:
    "Đặc sản cá dưa, cá nhệch Nga Sơn - Thanh Hóa. Tươi ngon, chuẩn vị quê nhà, phục vụ tại Hà Nội.",
  address: "10 Hoàng Công Chất, Cầu Diễn, Hà Nội",
  deliveryRadius: "20km",
  phone: "0399 981 189",
  zalo: "https://zalo.me/0399981189",
  fanPage: "https://www.facebook.com/TrongThai1011",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.219986821163!2d105.76165803256204!3d21.04189702348221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c102a1d23b%3A0xc446a0c98c1d07f2!2zMTAgxJAuIEhvw6BuZyBDw7RuZyBDaOG6pXQsIFBow7ogRGnhu4VuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e1!3m2!1sen!2sus!4v1786935501709!5m2!1sen!2sus",
};

export const heroImage = "/images/sp4.jpg";

export const aboutImage = "/images/sp3.jpg";

export const deliveryImage = "/images/ship.jpg";

export const menu = [
  {
    name: "Cá dưa",
    price: 260000,
    unit: "xuất",
    serving: "2-3 người",
    description:
      "Gỏi cá dưa Nga Sơn tươi ngon, đậm vị truyền thống với rau thơm và nước chấm đặc biệt.",
    image: "/images/sp1.jpg",
  },
  {
    name: "Cá nhệch",
    price: 400000,
    unit: "xuất",
    serving: "2-3 người",
    description:
      "Đặc sản cá nhệch Nga Sơn, mềm ngọt, kết hợp gỏi chuối, rau thơm và nước chấm chuẩn vị.",
    image: "/images/sp2.jpg",
  },
  {
    name: "1kg cá dưa",
    price: 500000,
    unit: "kg",
    serving: "5-6 người",
    description:
      "Khẩu phần lớn cho gia đình, nhóm bạn. Cá dưa tươi, đậm đà, đầy đặn cho buổi tụ họp.",
    image: "/images/sp3.jpg",
  },
  {
    name: "1kg cá nhệch",
    price: 1000000,
    unit: "kg",
    serving: "5-6 người",
    description:
      "Đặc biệt cá nhệch Nga Sơn nguyên kg, phù hợp tiệc gia đình, nhóm bạn tại Hà Nội.",
    image: "/images/sp4.jpg",
  },
] as const;

export const benefits = [
  {
    icon: "Fish",
    title: "Đặc sản Nga Sơn",
    description: "Hương vị đặc trưng của vùng Nga Sơn, Thanh Hóa.",
  },
  {
    icon: "Leaf",
    title: "Chuẩn vị truyền thống",
    description: "Giữ nét đặc trưng của món ăn quê nhà.",
  },
  {
    icon: "Users",
    title: "Khẩu phần phù hợp",
    description: "Nhiều lựa chọn cho 2-3 người hoặc nhóm 5-6 người.",
  },
  {
    icon: "Bike",
    title: "Ship tại Hà Nội",
    description: "Nhận giao hàng trong bán kính 20km tại Hà Nội.",
  },
] as const;

export function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export function getPhoneLink(): string {
  return restaurant.phone ? `tel:${restaurant.phone.replace(/\s/g, "")}` : "";
}

export function getZaloLink(): string {
  return restaurant.zalo || "";
}

export function getFanPageLink(): string {
  return restaurant.fanPage || "";
}

export function getMapsLink(): string {
  return (
    restaurant.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      restaurant.address,
    )}`
  );
}
