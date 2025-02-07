import { useState } from "react";

export const useDisclosure = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { open, toggle, handleClose, handleOpen };
};
