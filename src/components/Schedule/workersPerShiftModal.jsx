import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ImCross } from "react-icons/im";
import Modal from "@mui/material/Modal";
import NumOfWorkersTabs from "./NumOfWorkersTabs";

const styles = {
  buttonStyles: {
    height: "1.6em",
    width: "19em",
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
    width: "65em",
    height: "40em",
    borderRadius: 7,
    bgcolor: "background.paper",
    boxShadow: 14,
    p: 3,
  },
  cancelIcon: {
    paddingBottom: "7em",
  },
  modalTitle: {
    fontSize: "2.2em",
    fontWeight: 700,
    fontFamily: "monospace",
  },
};

const WorkersPerShiftModal = ({ shiftStructures, selectedStructureId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedStructure = shiftStructures.find(
    (s) => s.id === selectedStructureId
  );

  return (
    selectedStructureId && (
      <div>
        <Button
          onClick={handleOpen}
          size="large"
          variant="contained"
          sx={styles.buttonStyles}
        >
          Set Number Of Workers Per Shift
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles.box}>
            <Grid container>
              <Grid container item justifyContent="space-between">
                <Grid item>
                  <Typography sx={styles.modalTitle}>
                    Select Number Of Workers Per Shift
                  </Typography>
                </Grid>
                <Grid item>
                  <ImCross onClick={handleClose} sx={styles.cancelIcon} />
                </Grid>
                <NumOfWorkersTabs structure={selectedStructure} />
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    )
  );
};

export default WorkersPerShiftModal;
