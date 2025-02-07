import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { fetcher, serverFetcher } from "@/api/axios";
import { API_URL } from "@/constants/apiUrl";
import { QueryKeys } from "@/constants/keys";
import { InfiniteHookApiIOptions } from "@/types";
import { JobFilter, PaginationJobs, PJobFilter } from "@/types/api/job";
import { filteringMethod, renderQueryKey } from "@/utility/utils";

export const useInfiniteJobs = (
  hasUser: boolean,
  options?: InfiniteHookApiIOptions<PaginationJobs>,
  filters?: JobFilter
) => {
  const infiniteJobs = useInfiniteQuery<PaginationJobs, Error>({
    queryKey: renderQueryKey([
      hasUser ? QueryKeys.jobDetail : QueryKeys.job,
      { hasUser: !!hasUser },
      filteringMethod(filters),
      { infinite: true },
    ]),
    queryFn: ({ pageParam = filters?.page ?? 1 }) => {
      const queryParams = filteringMethod({ ...filters, page: pageParam });
      return fetcher.get((hasUser ? API_URL.jobDetail : API_URL.job) + queryParams);
    },

    ...options,
    initialPageParam: filters?.page ?? 1,
    getNextPageParam: (lastPage: PaginationJobs) => {
      return lastPage.pagination.nextPage ? lastPage.pagination.page + 1 : undefined;
    },
  });

  return infiniteJobs;
};

export const prefetchInfiniteJobs = async (searchParams: PJobFilter, token?: string) => {
  const filtersObj = await searchParams;
  const hasUser = !!token;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: renderQueryKey([
      hasUser ? QueryKeys.jobDetail : QueryKeys.job,
      { hasUser: !!hasUser },
      filteringMethod(filtersObj),
      { infinite: true },
    ]),
    queryFn: ({ pageParam = filtersObj?.page ?? 1 }) => {
      const queryParams = filteringMethod({ ...filtersObj, page: pageParam });

      return serverFetcher.get<PaginationJobs>(
        (hasUser ? API_URL.jobDetail : API_URL.job) + queryParams,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },

    initialPageParam: filtersObj?.page ?? 1,
  });
  return queryClient;
};
