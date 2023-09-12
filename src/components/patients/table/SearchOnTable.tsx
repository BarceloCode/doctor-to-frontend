import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";

const SearchOnTable = ({ searched, setSearched }: any) => {
  const { t } = useTranslation();
  const placeHolderTxt = `${t("Search by name or phone")}`;
  return (
    <CustomTextField
      type="search"
      name="search"
      placeholder={placeHolderTxt}
      onChange={(event: any) => setSearched(event.target.value)}
      //   onBlur={(event: any) => setSearched(event.target.value)}
      //   onBlur={handleBlur}
      // value={values.street}
      id="search-text"
      variant="outlined"
      fullWidth
    />
  );
};

export default SearchOnTable;
