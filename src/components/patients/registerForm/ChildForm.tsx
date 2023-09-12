import React from "react";
import PersonalIformation from "./PersonalIformation";
import AddressInformation from "./AddressInformation";
import ContactInformation from "./ContactInformation";

const ChildForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: any) => {
  const memoInputs = React.useMemo(() => {
    return (
      <>
        <PersonalIformation
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <AddressInformation
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <ContactInformation
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </>
    );
  }, [values]);
  return <>{memoInputs}</>;
};

export default ChildForm;
