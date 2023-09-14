import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const styles = {
  buttonStyles: {
    height: "1.6em",
    width: "12.5em",
    textTransform: "none",
    color: "white",
    backgroundColor: "#42adf5",
    marginTop: "1em",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-40%, -50%)",
    width: "60em",
    height: "40em",
    borderRadius: 7, // Adjust this value to control the roundness
    bgcolor: "background.paper",
    boxShadow: 14,
    p: 4,
  },
};

const WorkersPerShiftModal = ({ selectedStructureId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    selectedStructureId && (
      <div>
        <Button
          onClick={handleOpen}
          size="large"
          variant="contained"
          sx={styles.buttonStyles}
        >
          Number Of Workers
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles.box}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            ></Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    )
  );
};

export default WorkersPerShiftModal;
