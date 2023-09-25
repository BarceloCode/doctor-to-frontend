import React from "react";
import { IconPencil, IconTrashFilled, IconEye } from "@tabler/icons-react";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

const Actions = ({
  onEditPattient,
  onDeletePattient,
  pattient,
  patientId,
}: any) => {
  return (
    <Stack direction="row">
      <Box
        component={Link}
        href={{
          pathname: "/patients/profile/",
          query: { id: patientId },
        }}
        sx={{ mr: "3px", "box-shadow": "none" }}
      >
        <div style={{ cursor: "pointer", color: "#2A3547" }}>
          <IconEye width={22} />
        </div>
      </Box>
      <Box onClick={() => onEditPattient(pattient)} sx={{ ml: "3px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconPencil width={22} />
        </div>
      </Box>
      <Box onClick={() => onDeletePattient(pattient)} sx={{ ml: "3px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconTrashFilled width={22} />
        </div>
      </Box>
      {/* <Box 
      onClick={() => onDeletePattient(pattient)} sx={{ ml: "2px" }}
      >
        <div style={{ cursor: "pointer" }}>
          <IconEye width={22} />
        </div>
      </Box> */}
    </Stack>
  );
};

export default Actions;
