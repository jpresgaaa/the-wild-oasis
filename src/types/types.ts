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

export interface TableBodyProps<T> {
  data: T[] | undefined;
  render: (item: T) => React.ReactNode;
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
export interface FilterProps {
  filterField: string;
  options: FilterValue[];
}

interface FilterValue {
  value: string;
  label: string;
}
interface SortValue extends FilterValue {}

export interface SortByProps {
  options: SortValue[];
}
export interface SelectProps {
  options: SortValue[];
  value?: string;
  type?: "white" | "grey";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Guests {
  fullName: string;
  email: string;
  country: string;
  countryFlag: string;
  nationalID: string;
}

export interface NewBooking {
  startDate: string;
  endDate: string;
  numNights: number;
  cabinId: number;
  guestsId: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: "unconfirmed" | "checked-in" | "checked-out";
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
}

export interface Booking extends NewBooking {
  created_at: string;
  id: number;
  guests: Guests;
  cabins: { name: string };
}

export interface BookingRowProps {
  booking: Booking;
}
export interface PaginationProps {
  count: number;
}

export interface GetBookingsParams {
  filter?: { field: string; value: string; method?: string } | null;
  sortBy?: { field: string; direction: string };
  page?: number;
}

export interface DataItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
  children: React.ReactNode;
}
