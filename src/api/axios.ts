import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import Cookies from "js-cookie";

import { PAGE_URL } from "@/constants/pageUrl";
import { USER_TOKEN } from "@/constants/storage";

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const onError = (
  error: Error & {
    response: { data: { errors: any; message: string }; status: number };
  }
) => {
  const e = error;

  if (e.response.status === 401) {
    window.location.href = PAGE_URL.login;
    Cookies.remove(USER_TOKEN);
  }

  throw error;
};

// for server api (ssr, ...)
const serverFetcher = {
  get: <T>(url: string, configs?: AxiosRequestConfig | undefined) =>
    AxiosInstance.get<T>(url, configs).then(responseBody),
};

// without token (for auth)
const normalFetcher = {
  get: <T>(url: string, configs?: AxiosRequestConfig | undefined) =>
    AxiosInstance.get<T>(url, configs)
      .then(responseBody)
      .catch((e) => onError(e)),
  post: <T>(url: string, body: object, configs?: AxiosRequestConfig | undefined) => {
    return AxiosInstance.post<T>(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
};

const AuthorizationConfig = () => {
  AxiosInstance.defaults.headers.Authorization = `Bearer ${Cookies.get(USER_TOKEN)}`;
};

// with token
const fetcher = {
  get: <T>(url: string, configs?: AxiosRequestConfig | undefined) => {
    AuthorizationConfig();
    return AxiosInstance.get<T>(url, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  post: <T>(url: string, body: object, configs?: AxiosRequestConfig | undefined) => {
    AuthorizationConfig();
    return AxiosInstance.post<T>(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  put: <T>(url: string, body: object, configs?: AxiosRequestConfig | undefined) => {
    AuthorizationConfig();
    return AxiosInstance.put<T>(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  patch: <T>(url: string, body: object, configs?: AxiosRequestConfig | undefined) => {
    AuthorizationConfig();

    return AxiosInstance.patch<T>(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  delete: <T>(url: string, configs?: AxiosRequestConfig | undefined) => {
    AuthorizationConfig();
    return AxiosInstance.delete<T>(url, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
};

export { fetcher, normalFetcher, serverFetcher };
