import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 5,
};

const UserCardModal = ({ open, handleClose, cardInfo, meetLink }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="user-card-modal-title"
      aria-describedby="user-card-modal-description"
    >
      <Box sx={style}>
        <Typography id="card-info-modal-title" variant="h6" component="h2">
          {cardInfo.title}
        </Typography>
        <Typography id="card-info-modal-status" sx={{ mt: 2 }}>
          Status: {cardInfo.status}
        </Typography>
        {meetLink && (
          <Button
            href={meetLink}
            target="_blank"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Join Google Meet
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default UserCardModal;
