import { Suspense } from "react";
import { Metadata } from "next";

import LoadingSpinner from "@/components/LoadingSpinner";
import JobsListScreen from "@/components/screens/job-list";

export const metadata: Metadata = {
  title: "جابزکیت - شغل‌ها",
};

const JobsList = async () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <JobsListScreen />
    </Suspense>
  );
};

export default JobsList;
