import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useAddToWaitList() {
  const {
    mutate: addToWaitList,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (email) => {
      try {
        await axios.post(
          "https://payertel-backend.onrender.com/api/v1/waitlist",
          {
            email,
          }
        );
      } catch (error) {
        throw new Error(
          error?.response?.data?.message || "Error submitting email:"
        );
      }
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    addToWaitList,
    isPending,
    isSuccess,
  };
}
