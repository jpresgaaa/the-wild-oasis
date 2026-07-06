import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "../dashboard/Stat";
import { formatCurrency } from "../../utils/helpers";
import type { StatsProps } from "../../types/types";
function Stats({ bookings, confirmedStays, numDays, cabinCount }: StatsProps) {
  const numBookings = bookings.length.toString();
  const sales = bookings.reduce(
    (acc: number, booking: any) => acc + booking.totalPrice,
    0,
  );

  const checkins = confirmedStays.length.toString();
  const occupation =
    confirmedStays.reduce((acc: number, curr: any) => acc + curr.numNights, 0) /
    (numDays * cabinCount!)!;

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        value={checkins}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
