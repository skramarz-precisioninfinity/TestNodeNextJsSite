export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Keyboard",
    description: "Compact wireless keyboard with long battery life and quiet keys.",
    price: 49.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.",
    price: 34.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Standing Desk Mat",
    description: "Anti-fatigue mat for standing desks, ergonomic design.",
    price: 59.99,
    category: "Office",
    inStock: true,
  },
  {
    id: 4,
    name: "Monitor Arm",
    description: "Fully adjustable single monitor arm, supports up to 27\" screens.",
    price: 79.99,
    category: "Office",
    inStock: false,
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    description: "Over-ear headphones with active noise cancellation and 30hr battery.",
    price: 149.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Water-resistant backpack with dedicated laptop compartment up to 15.6\".",
    price: 69.99,
    category: "Accessories",
    inStock: true,
  },
];
