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
  onCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NewSettings {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export interface Settings extends NewSettings {
  createdAt: string;
  id: number;
}

export interface WindowProps {
  children: any;
  name: string;
}
export interface ModalProps {
  children: React.ReactNode;
}
export interface OpenProps {
  children: any;
  opens: string;
}

export interface ModalContextType {
  openName: string;
  open: () => void;
  close: () => void;
}
export interface ConfirmDeleteProps {
  resourceName: string;
  onConfirm: () => void;
  onCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
}

export interface TableProps {
  role?: string;
  children: React.ReactNode;
  columns: string;
}

export interface TableBodyProps {
  data: Cabin[] | undefined;
  render: (cabin: Cabin) => React.ReactNode;
}

export interface MenusProps {
  children: React.ReactNode;
}

export interface ToggleProps {
  id: number;
}
export interface ListProps {
  id: number;
  children: React.ReactNode;
}
export interface MenuButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
}
