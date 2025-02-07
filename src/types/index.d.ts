export interface PaginationInfiniteType<T> {
  data: T;
  pagination: {
    limit: number;
    nextPage: boolean;
    order: string;
    orderBy: string;
    page: number;
    prevPage: boolean;
    total: number;
    totalPages: number;
  };
}

export type ResponseType<T> = T;

export type HookApiListOptions<T> =
  | Omit<UseQueryOptions<InfiniteResponseType<T>, Error, InfiniteResponseType<T>, QueryKey>>
  | undefined;

export type HookApiOptions<T> =
  | Omit<UseQueryOptions<ResponseType<T>, Error, ResponseType<T>, QueryKey>, "queryKey">
  | undefined;

export type InfiniteHookApiIOptions<T> =
  | Omit<UseInfiniteQueryOptions<T, Error>, "queryKey">
  | undefined;
