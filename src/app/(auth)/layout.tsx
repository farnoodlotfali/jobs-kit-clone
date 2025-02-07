import { Box } from "@mui/material";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        height: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
