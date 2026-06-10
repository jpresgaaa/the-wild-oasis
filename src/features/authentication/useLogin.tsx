import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import type { UserAuthentication } from "../../types/types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: UserAuthentication) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData({ queryKey: ["user"] }, user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password is incorrect.");
    },
  });

  return {
    login,
    isLoggingIn,
  };
}
