import React, { useEffect, useRef, useState } from "react";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import PageContainer from "../../../src/components/container/Pagecontainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import PatientsListTable from "../../../src/components/patients/PatientsListTable";
import ButtonsBar from "src/components/shared/ButtonsBar";
import { getProceedings } from "src/services/Proceedings";
import { useDispatch } from "react-redux";
import { setLoadder } from "src/store/customizer/CustomizerSlice";
import { CircularProgress, Stack } from "@mui/material";
import SearchOnTable from "src/components/patients/table/SearchOnTable";
import ProceedingsListTable from "src/components/proceedings/ProceedingsListTable";

const index = () => {
  const { t } = useTranslation();
  const [proceedings, setProceedings]: any = useState([]);
  const [searched, setSearched]: any = useState([]);
  const [patientsFiltered, setPatientsFiltered]: any = useState([]);
  const [loadding, setLoadding]: any = useState(false);
  const dispatch = useDispatch();

  // const fetchApi = () => {
  //   // if (isSubscribed) {
  //     const response:any =  getPatients();
  //     setPatients(response?.result);
  //   // }
  // };
  // console.log("index loads");
  useEffect(() => {
    setLoadding(true);
    // dispatch(setLoadder(true));
    // let isSubscribed = true;
    // fetchApi()
    getProceedings()
      // .then(() => {
      //   dispatch(setLoadder(true));
      // })
      .then((response: any) => {
        console.log(response, "response list proceedings");
        setLoadding(false);
        setProceedings(response?.result);
        // dispatch(setLoadder(false));
      });
    // console.log(patients, "patients");
    return () => {
      setLoadding(false);
    };
  }, []);

  //   useEffect(() => {
  //     // console.clear();
  //     const foundItems: Array<any> = [];
  //     patients?.find((patient: any) => {
  //       // console.log(
  //       //   patient,
  //       //   "patient",
  //       //   patient?.name?.includes(searched),
  //       //   patient?.phone?.includes(searched)
  //       // );

  //       if (
  //         patient?.name?.toLowerCase().includes(searched) ||
  //         (patient?.phone?.toLowerCase().includes(searched) &&
  //           !foundItems?.includes(patient))
  //       ) {
  //         foundItems.push(patient);
  //       }
  //     });
  //     setPatientsFiltered(foundItems);
  //   }, [searched]);
  return (
    <>
      <PageContainer
        title={t(`${"Expedient"}`) as string}
        description="List of all Expedients"
      >
        <Breadcrumb title="Expedients" items={BCrumPatients} />
        <DashboardCard title="Expedients List">
          <>
            <ProceedingsListTable proceedings={proceedings} />
            {/* <PatientsListTable patients={patients} /> */}
            {/* {!loadding ? (
              <>
                <SearchOnTable setSearched={setSearched} searched={searched} />
                {searched.length > 0 ? (
                  <PatientsListTable patients={patientsFiltered} />
                ) : (
                  <PatientsListTable patients={patients} />
                )}
              </>
            ) : (
              <Stack alignItems="center">
                <CircularProgress />
              </Stack>
            )} */}
            {/* <ButtonsBar /> */}
          </>
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default index;
