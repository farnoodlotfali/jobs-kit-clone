import { Suspense } from "react";
import { Metadata } from "next";
import { cookies } from "next/headers";

import LoadingSpinner from "@/components/LoadingSpinner";
import JobsListScreen from "@/components/screens/job-list";
import { USER_TOKEN } from "@/constants/storage";

export const metadata: Metadata = {
  title: "جابزکیت - شغل‌ها",
};

const JobsList = async () => {
  const token = (await cookies()).get(USER_TOKEN);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <JobsListScreen hasUser={!!token} />
    </Suspense>
  );
};

export default JobsList;
