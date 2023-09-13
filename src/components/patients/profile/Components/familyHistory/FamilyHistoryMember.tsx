import React from "react";
import FamilyHistoryMemberItem from "./FamilyHistoryMemberItem";
import { Divider } from "@mui/material";

const FamilyHistoryMember = ({ familyMember }: any) => {
  return (
    <>
      <div className="px-4 lg:px-8 py-2">
        {Object?.entries(familyMember).map(([key, value], index: number) => {
          return (
            key != "_id" && (
              <FamilyHistoryMemberItem objKey={key} value={value} key={index} />
            )
          );
        })}
        <Divider />
      </div>
    </>
  );
};

export default FamilyHistoryMember;
