import { Grid, MenuItem, Alert } from "@mui/material";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomSelect from "../../forms/theme-elements/CustomSelect";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { useTranslation } from "react-i18next";

const PersonalIformation = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: any) => {
  const { t } = useTranslation();
  const genders = [
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];
  const maritalStus = [
    {
      value: "Singles",
      label: "Singles",
    },
    {
      value: "Married",
      label: "Married",
    },
    {
      value: "Widower",
      label: "Widower",
    },
    {
      value: "Free-Union",
      label: "Free Union",
    },
    {
      value: "divorced",
      label: "Divorced",
    },
  ];
  // console.clear();
  // console.log(values, "values");

  return (
    <div>
      {/* {values.name}
      {values._id} */}
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient iformation */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Alert severity="info">{t(`Person Info`)}</Alert>
      <Grid container spacing={3} mb={3} mt={1}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel htmlFor="name-text">
            {t(`First Name`)}
          </CustomFormLabel>
          {/* {values?.name, "asdas"} */}
          <CustomTextField
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.name}
            id="name-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="gender-text">
            {t(`Select Gender`)}
          </CustomFormLabel>
          <CustomSelect
            type="gender"
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.gender}
            id="gender-text"
            fullWidth
            variant="outlined"
          >
            {genders?.map((gender: any, index: number) => (
              <MenuItem key={index} value={gender.value}>
                {gender.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomFormLabel htmlFor="curp-text">{t(`Curp`)}</CustomFormLabel>
          <CustomTextField
            type="curp"
            name="curp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.curp}
            id="curp-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="religion-text">
            {t(`Religion`)}
          </CustomFormLabel>
          <CustomTextField
            type="religion"
            name="religion"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.religion}
            id="religion-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="bloodType-text">
            {t(`Blod Type`)}
          </CustomFormLabel>
          <CustomTextField
            type="bloodType"
            name="bloodType"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.bloodType}
            id="bloodType-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel htmlFor="lastName-text">
            {t(`Last Name`)}
          </CustomFormLabel>

          <CustomTextField
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.surname}
            id="lastName-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="birthdate">
            {t(`Date of Birth`)}
          </CustomFormLabel>
          <CustomTextField
            type="date"
            name="birthdate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.birthdate}
            id="birthdate"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CustomFormLabel htmlFor="civilstatus-text">
            {t(`Marital Status`)}
          </CustomFormLabel>
          <CustomSelect
            type="civilstatus"
            name="civilstatus"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.civilstatus}
            id="civilstatus-text"
            fullWidth
            variant="outlined"
          >
            {maritalStus.map((option: any, index: number) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomFormLabel htmlFor="ocupation-text">
            {t(`Ocupation`)}
          </CustomFormLabel>
          <CustomTextField
            type="ocupation"
            name="ocupation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.ocupation}
            id="ocupation-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="age-text">{t(`Age`)}</CustomFormLabel>
          <CustomTextField
            type="age"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.age}
            id="age-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient iformation */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default PersonalIformation;
