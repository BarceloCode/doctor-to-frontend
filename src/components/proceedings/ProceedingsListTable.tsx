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
import React from "react";

const ProceedingsListTable = ({ patients }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedPattient, setSelectedPatient] = useState(false);

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
                    <TableCell>
                      <Chip
                        sx={{
                          px: "4px",
                          backgroundColor: "primary.main",
                          color: "#fff",
                        }}
                        size="small"
                        label="Medium"
                      ></Chip>
                    </TableCell>
                    <TableCell>
                      {/* <Actions
                        onEditPattient={onEditPattient}
                        onDeletePattient={onDeletePattient}
                        patientId={pattient?._id}
                      /> */}
                    </TableCell>
                  </TableRow>
                  {/* <EditPatient
                    idPattient={pattient?._id}
                    open={open}
                    setOpen={setOpen}
                  /> */}
                </React.Fragment>
              ))}
            {/* {openProfile && (
              <PattientProfile
                selectedPattient={selectedPattient}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
              />
            )} */}
          </TableBody>
        </Table>
        {/* <MobileTable
          setOpenProfile={setOpenProfile}
          onEditPattient={onEditPattient}
          onDeletePattient={onDeletePattient}
          setOpen={setOpen}
          patients={patients}
        /> */}
      </Box>
    </>
  );
};

export default ProceedingsListTable;
