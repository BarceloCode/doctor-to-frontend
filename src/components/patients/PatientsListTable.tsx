import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { getPatients, deletePatient } from "../../services/Patients";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { setLoadder, setToast } from "src/store/customizer/CustomizerSlice";
import { useDispatch } from "react-redux";
import MobileTable from "./table/MobileTable";
import Actions from "./table/Actions";
import EditPatient from "./table/EditPatient";
import React from "react";
import PattientProfile from "./profile/PattientProfile";

const PatientsListTable = ({ patients }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // const [pattientID, setPattientID] = useState(false);
  const [selectedPattient, setSelectedPatient] = useState(false);
  const onEditPattient = (pattient: any) => {
    setOpen(true);
    setSelectedPatient(pattient);
    // setPattientID(patientId);
    // console.log("on edit");
  };
  const onDeletePattient = async (pattient: any) => {
    const response = await deletePatient(pattient?._id);
    if (response?.response?.status == 200) {
      console.log(response, "response");
      dispatch(setLoadder(false));
      dispatch(
        setToast({
          active: true,
          type: "success",
          msj: "Patient has successfully removed",
        })
      );
    } else {
      dispatch(setLoadder(false));
      dispatch(
        setToast({
          active: true,
          type: "error",
          msj: response?.data?.message,
        })
      );
    }
    console.log(response, "response");
  };

  useEffect(() => {
    setOpenProfile(false);
  }, []);

  return (
    <>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            display: { xs: "none", sm: "table", md: "table" },
            // whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Patient`)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Phone`)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Adress`)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Status`)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Actions`)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients?.length > 0 &&
              patients?.map((pattient: any, index: number) => (
                <React.Fragment key={index}>
                  <TableRow sx={{ cursor: "pointer" }}>
                    <TableCell
                      onClick={() => {
                        setOpenProfile(true);
                        setSelectedPatient(pattient);
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {pattient?.name}
                      </Typography>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setOpenProfile(true);
                        setSelectedPatient(pattient);
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {pattient?.phone}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {pattient?.post}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setOpenProfile(true);
                        setSelectedPatient(pattient);
                      }}
                    >
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {pattient?.address}
                      </Typography>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setOpenProfile(true);
                        setSelectedPatient(pattient);
                      }}
                    >
                      <Chip
                        sx={{
                          px: "4px",
                          backgroundColor: "primary.main",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                        size="small"
                        label="Medium"
                      ></Chip>
                    </TableCell>
                    <TableCell>
                      <Actions
                        pattient={pattient}
                        setSelectedPatient={setSelectedPatient}
                        onEditPattient={onEditPattient}
                        onDeletePattient={onDeletePattient}
                        patientId={pattient?._id}
                      />
                    </TableCell>
                  </TableRow>
                  {open && (
                    <EditPatient
                      // key={index}
                      selectedPattient={selectedPattient}
                      // pattient={pattient}
                      idPattient={pattient?._id}
                      open={open}
                      setOpen={setOpen}
                    />
                  )}
                </React.Fragment>
              ))}
            {openProfile && (
              <PattientProfile
                selectedPattient={selectedPattient}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
              />
            )}
          </TableBody>
        </Table>
        <MobileTable
          setOpenProfile={setOpenProfile}
          onEditPattient={onEditPattient}
          onDeletePattient={onDeletePattient}
          setOpen={setOpen}
          patients={patients}
        />
      </Box>
    </>
  );
};

export default PatientsListTable;
