import React from "react";

const FamilyHistoryMemberItem = ({ objKey, value }: any) => {
  return (
    <>
      <div className="flex flex-row py-2">
        <p className="capitalize font-semibold text-md">{objKey}:</p>
        <p className="capitalize font-semibold text-md ml-auto">{value}</p>
      </div>
    </>
  );
};

export default FamilyHistoryMemberItem;
