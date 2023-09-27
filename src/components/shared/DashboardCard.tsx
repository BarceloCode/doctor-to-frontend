import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import { useSelector } from "../../../src/store/Store";
import { AppState } from "../../../src/store/Store";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import React from "react";
// import "./style.css";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  bigCard?: boolean | any;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  bigCard = false,
}: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;
  const { t } = useTranslation();
  return (
    <>
      {/* {bigCard ? <Theme1 /> : <></>} */}
      {/* <Theme1 /> */}
      <Card
        sx={{
          padding: 0,
          border: !customizer.isCardShadow
            ? `1px solid ${borderColor}`
            : "none",
          // width: bigCard ? "100%" : "80%",
          maxWidth: bigCard ? "100%" : "1200px",
          marginX: bigCard ? "0" : "auto!important",
          // maxWidth: "100vw",
        }}
        // style={{ maxWidth: bigCard ? "100vw!important" : "1200px" }}
        // style={{ "max-width": "100vw" }}
        // maxWidth={false}
        elevation={customizer.isCardShadow ? 9 : 0}
        variant={!customizer.isCardShadow ? "outlined" : undefined}
      >
        {cardheading ? (
          <CardContent>
            <Typography variant="h5">{headtitle}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {headsubtitle}
            </Typography>
          </CardContent>
        ) : (
          <CardContent sx={{ p: "30px" }}>
            {title ? (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems={"center"}
                mb={3}
              >
                <Box>
                  {title ? (
                    <Typography variant="h5">{t(`${title}`)}</Typography>
                  ) : (
                    ""
                  )}

                  {subtitle ? (
                    <Typography variant="subtitle2" color="textSecondary">
                      {subtitle}
                    </Typography>
                  ) : (
                    ""
                  )}
                </Box>
                {action}
              </Stack>
            ) : null}

            {children}
          </CardContent>
        )}

        {middlecontent}
        {footer}
      </Card>
    </>
  );
};

export default DashboardCard;
