import React from "react";
import { IconPencil, IconTrashFilled } from "@tabler/icons-react";
import { Box, Stack } from "@mui/material";

const Actions = ({ onEditPattient, onDeletePattient, pattient }: any) => {
  return (
    <Stack direction="row">
      <Box onClick={() => onEditPattient(pattient)} sx={{ mr: "2px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconPencil width={22} />
        </div>
      </Box>
      <Box onClick={() => onDeletePattient(pattient)} sx={{ ml: "2px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconTrashFilled width={22} />
        </div>
      </Box>
    </Stack>
  );
};

export default Actions;
