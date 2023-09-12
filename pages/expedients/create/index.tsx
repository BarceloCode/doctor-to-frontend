import React from "react";
import PageContainer from "src/components/container/Pagecontainer";
import Breadcrumb from "src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumProceedings } from "src/utils/BCrumProceedings";
import DashboardCard from "src/components/shared/DashboardCard";
import ProceedingsForm from "src/components/proceedings/ProceedingsForm";
import ButtonsBar from "src/components/shared/ButtonsBar";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const idPatient = searchParams.get("id");
  const pageTitle = t("Expedient");

  const cardTitle = t("Create Proceedings");
  return (
    <PageContainer title={pageTitle} description="Expedient Form">
      <Breadcrumb title={pageTitle} items={BCrumProceedings} />
      <DashboardCard title={cardTitle}>
        <div>
          <ProceedingsForm />
        </div>
      </DashboardCard>
      {/* <ButtonsBar /> */}
    </PageContainer>
  );
};

export default index;
