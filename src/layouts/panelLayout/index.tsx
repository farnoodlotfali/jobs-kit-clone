import { Box } from "@mui/material";

import Drawer from "./Drawer";
import Header from "./Header";

const PanelLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box>
      <Header />
      <Drawer />
      <Box height="100%" minHeight="100dvh">
        {children}
      </Box>
    </Box>
  );
};

export default PanelLayout;
