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
            allergies: "",

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
            date: new Date().toISOString().split("T")[0],
          },

          physicalExam: {
            fitzpatrick: "",
            glogau: "",
            skinType: "",
            faceType: "",
            dermatologicalLesions: "",
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
          const data = {
            patient: values.patient,
            familyHistory: {
              familyMember: (values as any)?.familyMember,
              diabetes: (values as any)?.diabetes,
              hypertension: (values as any)?.hypertension,
              autoimmuneDiseasesF: (values as any)?.autoimmuneDiseasesF,
              cancerF: (values as any)?.cancerF,
              othersDiseasesF: (values as any)?.othersDiseasesF,
            },

            pathologicalHistory: {
              mellitusDiabetes: (values as any)?.mellitusDiabetes,
              arterialHypertension: (values as any)?.arterialHypertension,
              endocrinolgicalDiseases: (values as any)?.endocrinolgicalDiseases,
              psychiatricDiseases: (values as any)?.psychiatricDiseases,
              autoimmuneDiseases: (values as any)?.autoimmuneDiseases,
              vih: (values as any)?.vih,
              herpesLabialis: (values as any)?.herpesLabialis,
              herpesZoster: (values as any)?.herpesZoster,
              bloodTransfusions: (values as any)?.bloodTransfusions,
              trauma: (values as any)?.trauma,
              fractures: (values as any)?.fractures,
              hospitalizations: (values as any)?.hospitalizations,
              previousSurgeries: (values as any)?.previousSurgeries,
              hepatitis: (values as any)?.hepatitis,
              cancer: (values as any)?.cancer,
              epilepsy: (values as any)?.epilepsy,
              allergies: (values as any)?.allergies,

              evolution: (values as any)?.evolution,
              medicalTreatment: (values as any)?.medicalTreatment,
              bloodPhobia: (values as any)?.bloodPhobia,
              needlePhobia: (values as any)?.needlePhobia,
              fainting: (values as any)?.fainting,
              takingMedication: (values as any)?.takingMedication,
              bruises: (values as any)?.bruises,
              tanningBed: (values as any)?.tanningBed,
              localAnesthesia: (values as any)?.localAnesthesia,
              anesthesiaProblems: (values as any)?.anesthesiaProblems,
              vaccinationsReceived: (values as any)?.vaccinationsReceived,
              infections: (values as any)?.infections,
              medicaltreatmentReceived: (values as any)
                ?.medicaltreatmentReceived,
              doExcerice: (values as any)?.doExcerice,
              followDiet: (values as any)?.followDiet,
              others: (values as any)?.followDiet,
            },

            adictions: {
              doyouSmoke: (values as any)?.doyouSmoke,
              haveAddictions: (values as any)?.haveAddictions,
              drinksAlcohol: (values as any)?.drinksAlcohol,
            },

            gynecobstetricHistory: {
              pregnant: (values as any)?.pregnant,
              menarcaNo: (values as any)?.menarcaNo,
              fum: (values as any)?.fum,
              menstrualRythim: (values as any)?.menstrualRythim,
              fup: (values as any)?.fup,
              g: (values as any)?.g,
              a: (values as any)?.a,
              anticonceptiveMethod: (values as any)?.anticonceptiveMethod,
            },

            solarProtection: {
              solarExposition: (values as any)?.solarExposition,
              expositionTime: (values as any)?.expositionTime,
              usersolarProtection: (values as any)?.usersolarProtection,
              brand: (values as any)?.brand,
              fps: (values as any)?.fps,
            },

            consultReason: {
              motive: (values as any)?.motive,
              other: (values as any)?.other,
            },

            previousTreatments: {
              procedure: (values as any)?.procedure,
              product: (values as any)?.product,
              date: (values as any)?.date,
            },

            physicalExam: {
              fitzpatrick: (values as any)?.fitzpatrick,
              glogau: (values as any)?.glogau,
              skinType: (values as any)?.skinType,
              faceType: (values as any)?.faceType,
              dermatologicalLesions: (values as any)?.dermatologicalLesions,
            },

            habitusExterior: {
              patientCondition: (values as any)?.patientCondition,
              constitution: (values as any)?.constitution,
              conformation: (values as any)?.conformation,
              attitude: (values as any)?.attitude,
              facies: (values as any)?.facies,
              anormalMovements: (values as any)?.anormalMovements,
              gear: (values as any)?.gear,
              stateofConsciousness: (values as any)?.stateofConsciousness,
              notes: (values as any)?.notes,
            },

            vitalSigns: {
              fc: (values as any)?.fc,
              fr: (values as any)?.fr,
              ta: (values as any)?.ta,
              temperature: (values as any)?.temperature,
              weight: (values as any)?.weight,
              size: (values as any)?.size,
              imc: (values as any)?.imc,
            },
          };
          storeProcedding(data).then(function (response) {
            // storeProcedding(values).then(function (response) {
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
