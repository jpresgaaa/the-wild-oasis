import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useCheckout() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId: number) =>
      updateBooking(bookingId, { status: "checked-out" }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out!`);
      queryClient.invalidateQueries({ queryKey: ["booking", data.id] });
      navigate("/bookings?status=checked-out&sortBy=startDate-desc");
    },
    onError: () => {
      toast.error("There was an error while checking out.");
    },
  });

  return { isCheckingOut, checkout };
}
