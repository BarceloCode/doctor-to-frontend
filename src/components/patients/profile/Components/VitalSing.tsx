import { Divider } from "@mui/material";
import React from "react";

const VitalSing = ({ objKey, value }: any) => {
  return (
    <>
      <div className="flex w-full px-4 lg:px-8 py-2">
        <div className="mr-auto capitalize font-semibold text-md">{objKey}</div>
        <div className="ml-auto capitalize font-semibold text-md">{value}</div>
      </div>
      <Divider />
    </>
  );
};

export default VitalSing;
