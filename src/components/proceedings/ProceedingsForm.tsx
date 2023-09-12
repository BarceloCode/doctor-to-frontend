import { Alert, Button } from "@mui/material";
import ParentCard from "../shared/ParentCard";
import { Formik } from "formik";
import { storePatient } from "../../services/Patients";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import FormSections from "./FormSections";
import ChildForm from "./forms/ChildForm";
import { storeProcedding } from "src/services/Proceedings";
import { useDispatch } from "src/store/Store";
import { setLoadder, setToast } from "src/store/customizer/CustomizerSlice";
import { useRouter } from "next/router";

const ProceedingsForm = () => {
  const { t } = useTranslation();
  const txtSuccess = t(`Proceedings has successfully registered`);
  const notifySuccess = () => toast.success(txtSuccess);
  // console.log("render ProceedingsForm");
  //HOC component
  const AppHocFormComponent = FormSections(ChildForm);
  //HOC component
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const cardTitle = t("Proceedings Formulary");

  // console.log(id, "id");

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Formik
        initialValues={{
          patient: id,
          familyHistory: {
            familyMember: "",
            diabetes: "",
            hypertension: "",
            autoimmuneDiseasesF: "",
            cancerF: "",
            othersDiseasesF: "",
          },

          pathologicalHistory: {
            mellitusDiabetes: "",
            arterialHypertension: "",
            endocrinolgicalDiseases: "",
            psychiatricDiseases: "",
            autoimmuneDiseases: "",
            vih: "",
            herpesLabialis: "",
            herpesZoster: "",
            bloodTransfusions: "",
            trauma: "",
            fractures: "",
            hospitalizations: "",
            previousSurgeries: "",
            hepatitis: "",
            cancer: "",
            epilepsy: "",
            allergies: {
              type: String,
              default: "N/A",
            },

            evolution: "",
            medicalTreatment: "",
            bloodPhobia: "",
            needlePhobia: "",
            fainting: "",
            takingMedication: "",
            bruises: "",
            tanningBed: "",
            localAnesthesia: "",
            anesthesiaProblems: "",
            vaccinationsReceived: "",
            infections: "",
            medicaltreatmentReceived: "",
            doExcerice: "",
            followDiet: "",
            others: "",
          },

          adictions: {
            doyouSmoke: "",
            haveAddictions: "",
            drinksAlcohol: "",
          },

          gynecobstetricHistory: {
            pregnant: "",
            menarcaNo: "",
            fum: "",
            menstrualRythim: "",
            fup: "",
            g: "",
            a: "",
            anticonceptiveMethod: "",
          },

          solarProtection: {
            solarExposition: "",
            expositionTime: "",
            usersolarProtection: "",
            brand: "",
            fps: "",
          },

          consultReason: {
            motive: "",
            other: "",
          },

          previousTreatments: {
            procedure: "",
            product: "",
            date: "",
          },

          physicalExam: {
            fitzpatrick: "",
            glogau: "",
            skinType: "",
            faceType: "",
            dermatologicalLesions: {
              type: String,
              deafult: "N/A",
            },
          },

          habitusExterior: {
            patientCondition: "",
            constitution: "",
            conformation: "",
            attitude: "",
            facies: "",
            anormalMovements: "",
            gear: "",
            stateofConsciousness: "",
            notes: "",
          },

          vitalSigns: {
            fc: "",
            fr: "",
            ta: "",
            temperature: "",
            weight: "",
            size: "",
            imc: "",
          },
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(setLoadder(true));
          // console.log(values, "values");
          storeProcedding(values).then(function (response) {
            // console.log(response, "responsea");
            if (response?.success) {
              dispatch(setLoadder(false));
              dispatch(
                setToast({
                  active: true,
                  type: "success",
                  msj: "Patient has successfully registered",
                })
              );
              router.push("/patients/list");
            } else {
              dispatch(setLoadder(false));
              dispatch(
                setToast({
                  active: true,
                  type: "error",
                  msj: response?.result.message,
                })
              );
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          dirty,
          isValid,
        }) => (
          <ParentCard
            title={cardTitle}
            footer={
              <>
                <Button
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="primary"
                  disabled={!(dirty && isValid)}
                >
                  {t(`Submit`)}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    ml: 1,
                  }}
                >
                  {t(`Cancel`)}
                </Button>
              </>
            }
          >
            <form>
              <AppHocFormComponent
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </form>
          </ParentCard>
        )}
      </Formik>
      <Toaster />
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default ProceedingsForm;
