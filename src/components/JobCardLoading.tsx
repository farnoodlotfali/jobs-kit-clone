import { Card, Grid2, Skeleton } from "@mui/material";

type JobCardLoadingProps = {
  ref: React.Ref<HTMLDivElement>;
  isPlaceholderData: boolean;
};

const JobCardLoading: React.FC<JobCardLoadingProps> = ({ ref, isPlaceholderData }) => {
  return (
    <>
      {!isPlaceholderData && (
        <Grid2 ref={ref} size={{ md: 4, sm: 6, xs: 10 }} offset={{ sm: 0, xs: 1 }}>
          <Card sx={{ p: 6, direction: "rtl" }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50%" }} />
            <Skeleton variant="rounded" height={180} sx={{ mt: 5 }} />
          </Card>
        </Grid2>
      )}
      {Array(7)
        .fill(1)
        .map((_, i) => {
          return (
            <Grid2 key={i} size={{ md: 4, sm: 6, xs: 10 }} offset={{ sm: 0, xs: 1 }}>
              <Card sx={{ p: 6, direction: "rtl" }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50%" }} />
                <Skeleton variant="rounded" height={180} sx={{ mt: 5 }} />
              </Card>
            </Grid2>
          );
        })}
    </>
  );
};

export default JobCardLoading;
