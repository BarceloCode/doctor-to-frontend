import { Divider } from "@mui/material";
import React from "react";
import BasicElementsItem from "./BasicElementsItem";

const BasicElements = ({ entries }: any) => {
  return (
    <>
      <div className="px-8 py-2">
        {entries &&
          Object?.entries(entries).map(([key, value], index: number) => {
            return (
              key != "_id" && (
                <BasicElementsItem objKey={key} value={value} key={index} />
              )
            );
          })}
      </div>
    </>
  );
};

export default BasicElements;
