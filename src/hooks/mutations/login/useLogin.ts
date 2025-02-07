import { useMutation } from "@tanstack/react-query";

import { normalFetcher } from "@/api/axios";
import { API_URL } from "@/constants/apiUrl";
import { ResponseType } from "@/types";
import { LoginRequest, LoginResponse } from "@/types/api/login";

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: LoginRequest) => {
      return normalFetcher.post<ResponseType<LoginResponse>>(API_URL.login, { ...body });
    },
  });
};
