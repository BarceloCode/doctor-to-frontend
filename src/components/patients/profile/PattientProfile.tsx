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
import { useTranslation } from "react-i18next";

const PattientProfile = ({
  openProfile = false,
  setOpenProfile,
  selectedPattient,
}: any) => {
  const { t } = useTranslation();
  // console.log(selectedPattient, "selectedPattient profile");

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
              {t("CURP")}: {t(selectedPattient?.curp)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("Age")}: {t(selectedPattient?.age)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("Civil Status")}: {t(selectedPattient?.civilstatus)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("Phone")}: {t(selectedPattient?.phone)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("Religion")}: {t(selectedPattient?.religion)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("Gender")}: {t(selectedPattient?.gender)}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Typography
            component={Link}
            // href="/patients/profile"
            href={{
              pathname: "/patients/profile/",
              query: { id: selectedPattient?._id },
            }}
            // component={Link}
            // // href={`/proceedings/create/id=${selectedPattient?._id}`}
            // href={{
            //   pathname: "/expedients/create/",
            //   query: { id: selectedPattient?._id },
            // }}
            fontWeight="500"
            sx={{
              padding: "8px",
              marginRight: "auto",
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            {t("View Profile")}
          </Typography>
          <Typography
            component={Link}
            // href={`/proceedings/create/id=${selectedPattient?._id}`}
            href={{
              pathname: "/expedients/create/",
              query: { id: selectedPattient?._id },
            }}
            fontWeight="500"
            sx={{
              padding: "8px",
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            {t("Create Expedient")}
          </Typography>
          {/* <Button autoFocus>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PattientProfile;
