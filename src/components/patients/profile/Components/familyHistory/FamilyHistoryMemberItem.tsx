import React from "react";
import { useTranslation } from "react-i18next";
import { whiteSpaceBtweenCapitalized } from "src/utils/Text";

const FamilyHistoryMemberItem = ({ objKey, value }: any) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-row py-2">
        <p className="capitalize font-semibold text-md">
          {t(whiteSpaceBtweenCapitalized(objKey))}:
        </p>
        <p className="capitalize font-semibold text-md ml-auto">
          {t(whiteSpaceBtweenCapitalized(value))}
        </p>
      </div>
    </>
  );
};

export default FamilyHistoryMemberItem;
