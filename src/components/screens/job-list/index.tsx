"use client";

import { Fragment, useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useInView } from "react-intersection-observer";
import { useDebouncedCallback } from "use-debounce";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Container, Grid2, InputAdornment, OutlinedInput, Typography } from "@mui/material";

import JobCard from "@/components/JobCard";
import JobCardLoading from "@/components/JobCardLoading";
import { useInfiniteJobs } from "@/hooks/queries";

const JobsListScreen = () => {
  const [filterParam, setFilterParam] = useQueryState("title", { defaultValue: "" });
  const [title, setTitle] = useState(filterParam);
  const debounced = useDebouncedCallback((value) => {
    setFilterParam(value);
  }, 1000);

  const { ref, inView } = useInView();

  const {
    data: allJobs,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteJobs(
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

  return (
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
      </Container>

      <Grid2 container spacing={{ md: 6, xs: 4 }} mt={6} pb={10}>
        {allJobs?.pages[0].data.length !== 0 ? (
          allJobs?.pages.map((page, i) => (
            <Fragment key={i}>
              {page?.data.map((item) => {
                return (
                  <Grid2 key={item.id} size={{ md: 4, sm: 6, xs: 10 }} offset={{ sm: 0, xs: 1 }}>
                    <JobCard job={item} />
                  </Grid2>
                );
              })}
            </Fragment>
          ))
        ) : (
          <Typography pt={2} pl={2}>
            شغلی یافت نشد
          </Typography>
        )}

        <JobCardLoading ref={ref} />
      </Grid2>
    </Container>
  );
};

export default JobsListScreen;
