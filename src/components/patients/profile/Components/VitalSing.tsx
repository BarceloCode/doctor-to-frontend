import { Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { whiteSpaceBtweenCapitalized } from "src/utils/Text";

const VitalSing = ({ objKey, value }: any) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex w-full px-4 lg:px-8 py-2">
        <div className="mr-auto capitalize font-semibold text-md">
          {t(whiteSpaceBtweenCapitalized(objKey))}
        </div>
        <div className="ml-auto capitalize font-semibold text-md">
          {t(whiteSpaceBtweenCapitalized(value))}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default VitalSing;
