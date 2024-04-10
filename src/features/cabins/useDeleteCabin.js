import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryCLient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin deleted");
      queryCLient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast(err.message),
  });
  return { isDeleting, deleteCabin };
}
