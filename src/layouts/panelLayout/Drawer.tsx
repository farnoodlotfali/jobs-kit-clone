"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Stack,
} from "@mui/material";

import img from "@/assets/logo_full_200.webp";
import { PAGE_URL } from "@/constants/pageUrl";
import { useAppContext } from "@/hooks/useAppContext";

const drawerWidth = 240;
const DRAWER_ITEMS = [
  {
    title: "صفحه اصلی",
    link: PAGE_URL.home,
  },
];

const Drawer = () => {
  const { toggleDrawer, showDrawer } = useAppContext();

  return (
    <MuiDrawer
      variant="temporary"
      open={showDrawer}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
      PaperProps={{
        elevation: 0,
      }}
    >
      <Box onClick={toggleDrawer} sx={{ textAlign: "center" }}>
        <Stack
          mx="auto"
          my={6}
          height={25}
          width={100}
          component={Link}
          href={PAGE_URL.home}
          prefetch={false}
        >
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
        </Stack>
        <Divider />
        <List>
          {DRAWER_ITEMS.map((item) => (
            <ListItem
              key={item.link}
              disablePadding
              component={Link}
              href={item.link}
              prefetch={false}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
