import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Fliter
  const FilterValue = searchParams.get("status");
  const filter =
    !FilterValue || FilterValue === "all"
      ? null
      : { field: "status", value: FilterValue };

  // to do mutliple filters at the same time, we can pass an array of objects and we can loop over the object and add a new query in the query variable (in getBookings fn).
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // Sort by
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, error, bookings };
}
