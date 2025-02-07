import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

import JobsListScreen from "@/components/screens/job-list";
import { prefetchInfiniteJobs } from "@/hooks/queries";
import { PJobFilter } from "@/types/api/job";

export const metadata: Metadata = {
  title: "جابزکیت - شغل‌ها",
};

type PageProps = {
  searchParams: PJobFilter;
};

const JobsList = async ({ searchParams }: PageProps) => {
  return (
    // <HydrationBoundary state={dehydrate(await prefetchInfiniteJobs(searchParams))}>
    <JobsListScreen />
    // </HydrationBoundary>
  );
};

export default JobsList;
