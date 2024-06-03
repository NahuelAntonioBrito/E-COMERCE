export interface Item {
  _id: number;
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnails: string[];
  status: boolean;
  code: string;
  stock: number;
  category: string;
}
