import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";

import img from "@/assets/illustration_dashboard.png";

type AuthLayoutProps = {
  title: string;
};

const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> = ({ children, title }) => {
  return (
    <Grid2 container spacing={2} minHeight="100dvh">
      <Grid2 display={{ md: "block", xs: "none" }} size={{ md: "grow" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          gap={10}
          height="100%"
          component={Paper}
          square
        >
          <Typography fontWeight={700} fontSize={30} component="h3">
            {title}
          </Typography>
          <Box height={360} width={480}>
            <Image
              src={img}
              alt="auth logo"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
              loading="eager"
            />
          </Box>
        </Stack>
      </Grid2>
      <Grid2 size={{ lg: 4, md: 6, xs: 12 }}>{children}</Grid2>
    </Grid2>
  );
};

export default AuthLayout;
