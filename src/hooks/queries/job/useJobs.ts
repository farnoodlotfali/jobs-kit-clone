import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { fetcher } from "@/api/axios";
import { API_URL } from "@/constants/apiUrl";
import { QueryKeys } from "@/constants/keys";
import { InfiniteHookApiIOptions } from "@/types";
import { JobFilter, PaginationJobs, PJobFilter } from "@/types/api/job";
import { filteringMethod, renderQueryKey } from "@/utility/utils";

export const useInfiniteJobs = (
  options?: InfiniteHookApiIOptions<PaginationJobs>,
  filters?: JobFilter
) => {
  const infiniteJobs = useInfiniteQuery<PaginationJobs, Error>({
    queryKey: renderQueryKey([QueryKeys.job, filteringMethod(filters), { infinite: true }]),
    queryFn: ({ pageParam = filters?.page ?? 1 }) => {
      const queryParams = filteringMethod({ ...filters, page: pageParam });
      return fetcher.get(API_URL.job + queryParams);
    },

    ...options,
    initialPageParam: filters?.page ?? 1,
    getNextPageParam: (lastPage: PaginationJobs) => {
      return lastPage.pagination.nextPage ? lastPage.pagination.page + 1 : undefined;
    },
  });

  return infiniteJobs;
};

export const prefetchInfiniteJobs = async (searchParams: PJobFilter) => {
  const filtersObj = await searchParams;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: renderQueryKey([QueryKeys.job, filteringMethod(filtersObj), { infinite: true }]),
    queryFn: ({ pageParam = filtersObj?.page ?? 1 }) => {
      const queryParams = filteringMethod({ ...filtersObj, page: pageParam });
      return fetcher.get<PaginationJobs>(API_URL.job + queryParams);
    },

    initialPageParam: filtersObj?.page ?? 1,
  });
  return queryClient;
};
