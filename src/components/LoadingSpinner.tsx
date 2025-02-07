import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Stack spacing={3} justifyContent="center" alignItems="center" pt={6}>
      <CircularProgress />

      <Typography sx={{ color: "text.primary" }}>در حال فراخوانی اطلاعات...</Typography>
    </Stack>
  );
};

export default LoadingSpinner;
