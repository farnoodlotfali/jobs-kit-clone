"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ModeSwitch from "./ModeSwitch";
import img from "@/assets/logo_full_200.webp";
import { PAGE_URL } from "@/constants/pageUrl";
import { useAppContext } from "@/hooks/useAppContext";

const DynamicHeader = dynamic(() => import("./ProfilePopover"), {
  loading: () => (
    <IconButton size="small">
      <Skeleton variant="circular" width={32} height={32} />
    </IconButton>
  ),
  ssr: false,
});
const HEADER_ITEMS = [
  {
    title: "صفحه اصلی",
    link: PAGE_URL.home,
  },
];

const Header = () => {
  const { toggleDrawer } = useAppContext();

  return (
    <AppBar
      component="nav"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
      }}
      position="sticky"
    >
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box height={25} width={100} component={Link} href={PAGE_URL.home} prefetch={false}>
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

          <Stack ml={8} direction="row" spacing={9} sx={{ display: { xs: "none", sm: "flex" } }}>
            {HEADER_ITEMS.map((item) => (
              <Typography
                key={item.link}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  fontSize: 14,
                  transition: "all 0.3s",
                  ":hover": {
                    color: "grey.600",
                    "& .dot": {
                      visibility: "visible",
                    },
                  },
                }}
                component={Link}
                href={item.link}
                prefetch={false}
              >
                <FiberManualRecordIcon
                  sx={{ fontSize: 10, visibility: "hidden" }}
                  className="dot"
                />
                {item.title}
              </Typography>
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={3} ml="auto">
            <ModeSwitch />
            <DynamicHeader />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
