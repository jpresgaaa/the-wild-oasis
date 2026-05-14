import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // 1.) FILTER
  const filterValue = searchParams.get("status");
  const filter: { field: string; value: string; method?: string } | null =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // 2.) SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy: { field: string; direction: string } = { field, direction };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isPending, bookings, error };
}
