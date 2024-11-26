export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string | null;
}

export interface ProductSectionProps {
  products: Product[];
}

export interface HomeProps {
  products: Product[];
}

export interface ProductDetailInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  availabilityStatus: string;
  thumbnail: string | null;
  images: string[];
}

export interface CarouselProps {
  images: string[];
}
