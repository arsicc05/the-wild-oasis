import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryCLient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted");
      queryCLient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast(err.message),
  });
  return { isDeleting, deleteBooking };
}
