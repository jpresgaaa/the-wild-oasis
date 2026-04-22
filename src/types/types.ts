export interface Cabin extends NewCabin {
  createdAt: string;
  id: number;
}

export interface CabinRowProps {
  cabin: Cabin;
}

export interface NewCabin {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image?: any;
  description: string;
}

export interface FormRowProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  id?: string;
}

export interface CreateCabinFormProps {
  cabinToEdit?: Cabin;
}
