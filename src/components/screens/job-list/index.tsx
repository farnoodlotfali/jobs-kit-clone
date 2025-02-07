"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useInView } from "react-intersection-observer";
import { useDebouncedCallback } from "use-debounce";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Button, Container, Grid2, InputAdornment, OutlinedInput, Typography } from "@mui/material";

import JobCard from "@/components/JobCard";
import JobCardLoading from "@/components/JobCardLoading";
import NewJobModal from "@/components/modals/NewJobModal";
import { useInfiniteJobs } from "@/hooks/queries";
import { useDisclosure } from "@/hooks/shared";
import { IJob } from "@/types/schema/job";

type JobsListScreenProps = {
  hasUser: boolean;
};

const JobsListScreen: React.FC<JobsListScreenProps> = ({ hasUser }) => {
  const [filterParam, setFilterParam] = useQueryState("title", { defaultValue: "" });
  const [title, setTitle] = useState(filterParam);
  const debounced = useDebouncedCallback((value) => {
    setFilterParam(value);
  }, 1000);

  const [newJobs, setNewJobs] = useState<IJob[]>([]);
  const { open, toggle } = useDisclosure(false);

  const { ref, inView } = useInView();

  const {
    data: allJobs,
    fetchNextPage,
    hasNextPage,
    isPlaceholderData,
  } = useInfiniteJobs(
    hasUser,
    {},
    {
      title: filterParam,
    }
  );

  // fetch next page when reaching to end of list
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleNewJob = (job: IJob) => {
    setNewJobs((prev) => [job, ...prev]);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <Container maxWidth="sm">
          <OutlinedInput
            fullWidth
            placeholder="جستجو برای شغل، کلمه کلیدی و ..."
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              debounced(e.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            }
          />

          <Button fullWidth variant="contained" color="secondary" onClick={toggle} sx={{ mt: 3 }}>
            شغل جدید
          </Button>
        </Container>

        <Grid2 container spacing={{ md: 6, xs: 4 }} mt={6} pb={10}>
          {allJobs?.pages[0].data.length !== 0 ? (
            <>
              {newJobs.map((item, i) => {
                return (
                  <Grid2 key={i} size={{ md: 4, sm: 6, xs: 10 }} offset={{ sm: 0, xs: 1 }}>
                    <JobCard job={item} />
                  </Grid2>
                );
              })}

              {!isPlaceholderData &&
                allJobs?.pages.map((page) =>
                  page?.data.map((item) => {
                    return (
                      <Grid2
                        key={item.id}
                        size={{ md: 4, sm: 6, xs: 10 }}
                        offset={{ sm: 0, xs: 1 }}
                      >
                        <JobCard job={item} />
                      </Grid2>
                    );
                  })
                )}
              <JobCardLoading ref={ref} isPlaceholderData={isPlaceholderData} />
            </>
          ) : (
            <Typography pt={2} pl={2}>
              شغلی یافت نشد
            </Typography>
          )}
        </Grid2>
      </Container>

      {/* modals */}
      <NewJobModal onClose={toggle} open={open} handleNewJob={handleNewJob} />
    </>
  );
};

export default JobsListScreen;
