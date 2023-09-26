import MainProfile from "src/components/patients/profile/MainProfile";
import React, { useEffect, useRef, useState } from "react";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import PageContainer from "../../../src/components/container/Pagecontainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { getProceeding } from "src/services/Proceedings";
import { CircularProgress, Stack } from "@mui/material";
import ProfileTabs from "src/components/patients/profile/ProfileTabs";

const index = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [expedient, setExpedient] = useState([]);
  const [loadding, setLoadding] = useState(false);
  useEffect(() => {
    setLoadding(true);
    // dispatch(setLoadder(true));
    // let isSubscribed = true;
    // fetchApi()
    getProceeding(id)
      // .then(() => {
      //   dispatch(setLoadder(true));
      // })
      .then((response: any) => {
        console.log(response?.result, "response list expedient");
        setLoadding(false);
        setExpedient(response?.result);
        // dispatch(setLoadder(false));
      });
    // console.log(patients, "patients");
    return () => {
      setLoadding(false);
    };
  }, []);

  return (
    <>
      <PageContainer
        title={t(`${"Patient Profile"}`) as string}
        description={t(`${"Profile of a pattien"}`) as string}
      >
        <Breadcrumb
          title={t(`${"Patient Profile"}`) as string}
          items={BCrumPatients}
        />
        <DashboardCard
          bigCard={true}
          title={t(`${"Patient details"}`) as string}
        >
          {!loadding ? (
            <>
              {/* <MainProfile expedient={expedient} /> */}
              <ProfileTabs />
            </>
          ) : (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          )}
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default index;
