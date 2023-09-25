import React from "react";
import { Trans, useTranslation } from "react-i18next";

export function TranslateComponent({ txt }: any) {
  const { t } = useTranslation();

  return <Trans t={t}>{txt}</Trans>;
}
