import {
  Modal,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Paper,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";

const PattientProfile = ({
  openProfile = false,
  setOpenProfile,
  selectedPattient,
}: any) => { 
  console.log(selectedPattient, "selectedPattient profile");

  return (
    <>
      <Dialog
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        maxWidth="sm"
        // sx={{ padding: "30px" }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        aria-hidden="true"
        keepMounted={false}
      >
        <DialogTitle id="alert-dialog-title">
            Name: {selectedPattient?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h5" gutterBottom>
              CURP: {selectedPattient?.curp}
            </Typography>
            <Typography variant="h5" gutterBottom>
              AGE: {selectedPattient?.age}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Civil Status: {selectedPattient?.civilstatus}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Phone: {selectedPattient?.phone}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Religion: {selectedPattient?.religion}
            </Typography>
            <Typography variant="h5" gutterBottom>
              gender: {selectedPattient?.gender}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Typography
            component={Link}
            // href={`/proceedings/create/id=${selectedPattient?._id}`}
            href={{
              pathname: "/expedients/create/",
              query: { id: selectedPattient?._id },
            }}
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Crear Expediente
          </Typography>
          {/* <Button autoFocus>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PattientProfile;
