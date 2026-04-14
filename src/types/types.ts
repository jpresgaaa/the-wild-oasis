export interface Cabin {
  createdAt: string;
  description: string;
  discount: number;
  id: number;
  image?: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}

export interface CabinRowProps {
  cabin: Cabin;
}

export interface NewCabin {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}
