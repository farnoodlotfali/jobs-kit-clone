import { PropsWithChildren } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  ButtonBase,
  Container,
  ContainerProps,
  Fade,
  Modal as MuiModal,
  Paper,
} from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  maxWidth?: ContainerProps["maxWidth"];
};
const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ open, onClose, maxWidth, children }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      sx={{ display: "grid", placeItems: "center", overflowY: "auto" }}
    >
      <Fade in={open}>
        <Container maxWidth={maxWidth} sx={{ marginY: 4 }}>
          <Paper sx={{ p: 3, position: "relative" }}>
            <Box
              component={ButtonBase}
              onClick={onClose}
              sx={{
                bgcolor: "background.default",
                position: "absolute",
                top: -25,
                left: -20,
                zIndex: 2,
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                p: 1,
                borderRadius: 100,
                border: "1px solid white",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "rotateZ(180deg)",
                },
              }}
            >
              <CloseRoundedIcon />
            </Box>

            {children}
          </Paper>
        </Container>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
