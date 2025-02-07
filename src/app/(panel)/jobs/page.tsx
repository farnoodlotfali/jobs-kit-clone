import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import { cookies } from "next/headers";

import JobsListScreen from "@/components/screens/job-list";
import { USER_TOKEN } from "@/constants/storage";
import { prefetchInfiniteJobs } from "@/hooks/queries";
import { PJobFilter } from "@/types/api/job";

export const metadata: Metadata = {
  title: "جابزکیت - شغل‌ها",
};

type PageProps = {
  searchParams: PJobFilter;
};

const JobsList = async ({ searchParams }: PageProps) => {
  const token = (await cookies()).get(USER_TOKEN);
  return (
    <HydrationBoundary state={dehydrate(await prefetchInfiniteJobs(searchParams, token?.value))}>
      <JobsListScreen hasUser={!!token} />
    </HydrationBoundary>
  );
};

export default JobsList;
