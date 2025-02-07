import { PaginationInfiniteType } from "@/types";
import { IJob } from "@/types/schema/job";

export type JobsResponse = IJob[];

export type PaginationJobs = PaginationInfiniteType<JobsResponse>;

export type JobFilter = {
  title?: string | null;
  page?: string;
};

export type PJobFilter = Promise<JobFilter>;
