import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numsDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;
  // 2.
  const totalSales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  // 3.
  const totalCheckins = confirmedStays.length;
  // 4.
  // num checkin nights/all available nights (num days*nums cabins)
  const occupacy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numsDays * cabinCount);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
      />
      <Stat
        title="Occupacy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupacy * 100) + "%"}
      />
    </>
  );
}

export default Stats;
