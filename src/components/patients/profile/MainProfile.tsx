import { Avatar, Stack } from "@mui/material";
import React from "react";
import VitalSing from "./Components/VitalSing";
import FamilyHistoryMember from "./Components/familyHistory/FamilyHistoryMember";
import BasicElements from "./Components/basicElements/BasicElements";
import { useTranslation } from "react-i18next";

const MainProfile = ({ expedient }: any) => {
  const pattient = expedient?.patient;
  const { t } = useTranslation();
  console.log(expedient, "expedient");
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-4">
        <div className="text-xl font-semibold mb-4">Pattient</div>
        <div className="flex">
          <div className="w-1/3">
            <Avatar
              src={"/images/profile/user-1.jpg"}
              alt={"ProfileImg"}
              sx={{
                width: 75,
                height: 75,
              }}
            />
          </div>
          <div className="flex flex-col w-full my-auto">
            <div className="text-xl font-semibold pb-1">{pattient?.name}</div>
            <div className="flex flex-row">
              <p className="text-lg font-regular mr-4">{pattient?.birthdate}</p>
              <span className="font-semibold my-auto">|</span>
              <p className="text-lg font-regular ml-4">{pattient?.gender}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block mb-4">
          {t(`vital Signs`)}</h2>
          {expedient?.vitalSigns?.[0] &&
            Object?.entries(expedient?.vitalSigns?.[0]).map(
              ([key, value], index: number) => {
                return (
                  key != "_id" && (
                    <VitalSing objKey={key} value={value} key={index} />
                  )
                );
              }
            )}
        </div>
        <div className="mt-8 py-6">
          <h2 className="font-bold text-xl block mb-12">Files</h2>
          <Stack alignItems="center">
            <div className="font-bold text-md">N/A</div>
          </Stack>
        </div>
        <div className="">
          <h2 className="font-bold text-xl block">Family History</h2>
          {expedient?.familyHistory?.map((familyMember: any, index: number) => {
            return (
              <FamilyHistoryMember familyMember={familyMember} key={index} />
            );
          })}
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block capitalize">
            {t(`gynecobstetric History`)}
          </h2>
          <BasicElements entries={expedient?.gynecobstetricHistory?.[0]} />
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block capitalize">
            {t(`habitus Exteriory`)}
          </h2>
          <BasicElements entries={expedient?.habitusExterior?.[0]} />
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block capitalize">physicalExam</h2>
          <BasicElements entries={expedient?.physicalExam?.[0]} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex-col p-4">
        <div>
          <h2 className="font-bold text-xl block capitalize">
            {t(`pathological History`)}
          </h2>
          <BasicElements entries={expedient?.pathologicalHistory?.[0]} />
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block capitalize">
            {t(`previousTreatments`)}
          </h2>
          <BasicElements entries={expedient?.previousTreatments?.[0]} />
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl block capitalize">
            {t(`solar Protection`)}
          </h2>
          <BasicElements entries={expedient?.solarProtection?.[0]} />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
