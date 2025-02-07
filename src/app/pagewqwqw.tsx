"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";

import { useAppContext } from "@/hooks/useAppContext";

export default function Home() {
  const { toggleMode } = useAppContext();
  return (
    <Box p={6}>
      <Paper sx={{ height: 200, width: 200 }} elevation={0}>
        <Box>1111</Box>
        <Button>2121</Button>
        11
        <Button variant="outlined" onClick={toggleMode}>
          toggleMode
        </Button>
        <Typography fontWeight={300}> دست</Typography>
        <Typography fontWeight={400}> دست</Typography>
        <Typography fontWeight={500}> دست</Typography>
        <Typography fontWeight={600}> دست</Typography>
        <Typography fontWeight={700}> دست</Typography>
        <Typography fontWeight={800}> دست</Typography>
        <Typography fontWeight={900}> دست</Typography>
        <TextField label="TextField" />
      </Paper>
    </Box>
  );
}
