"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import { PAGE_URL } from "@/constants/pageUrl";
import { useAppContext } from "@/hooks/useAppContext";

const ProfilePopover = () => {
  const { user, logoutUser } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  if (!user) {
    return (
      <Button variant="outlined" sx={{ height: 36 }} LinkComponent={Link} href={PAGE_URL.login}>
        ورود
      </Button>
    );
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={Boolean(anchorEl) ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl) ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              height: "fit-content",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Stack divider={<Divider />}>
          <Stack p={2} spacing={1}>
            <Typography fontSize={14} fontWeight={600}>
              {user?.name}
            </Typography>
            <Typography fontSize={14} color="grey.500">
              {user?.email}
            </Typography>
          </Stack>
          <Stack p={2} sx={{ overflow: "hidden" }}>
            <MenuItem onClick={handleClose}>
              <Typography fontSize={14} component={Link} href={PAGE_URL.home}>
                صفحه اصلی
              </Typography>
            </MenuItem>
          </Stack>
          <Stack p={2} sx={{ overflow: "hidden" }}>
            <MenuItem
              onClick={() => {
                logoutUser();
                handleClose();
              }}
            >
              <Typography fontSize={14} color="error.main">
                خروج
              </Typography>
            </MenuItem>
          </Stack>
        </Stack>
      </Menu>
    </>
  );
};

export default ProfilePopover;
