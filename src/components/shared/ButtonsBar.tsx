import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const ButtonsBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const currentRoute = router.pathname.toString();
  console.log(router.pathname, "router.pathname");
  const urlCatalog: any = [
    "/patients/list",
    "/patients/register",
    "/expedients/list",
    "/bookings/calendar",
  ];

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          // bottom: 20,
          bottom: 0,
          left: 0,
          right: 0,
          background: "transparent",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            borderRadius: "15px",
            mb: 3,
            background: "transparent",
            "box-shadow": "none",
          }}
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction
            sx={{
              background: "white",
              borderRadius: "15px",
            }}
            // sx={{
            //   background: "black",
            //   color: "white",
            // }}
            // component={Link}
            // href="/patients/register"
            label={t("Book Apointment")}
            icon={<EventAvailableIcon />}
          />
          {currentRoute == urlCatalog[1] ? (
            <BottomNavigationAction
              sx={{
                borderRadius: "15px",
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/patients/register"
              label={t("Add Patient")}
              icon={<AddIcon />}
            />
          ) : (
            <BottomNavigationAction
              sx={{
                background: "white",
                borderRadius: "15px",
              }}
              component={Link}
              href="/patients/register"
              label={t("Add Patient")}
              icon={<AddIcon />}
            />
          )}

          {currentRoute == urlCatalog[3] ? (
            <BottomNavigationAction
              sx={{
                borderRadius: "15px",
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/bookings/calendar"
              label={t("Calendar")}
              icon={<CalendarMonthIcon />}
            />
          ) : (
            <BottomNavigationAction
              sx={{
                background: "white",
                borderRadius: "15px",
              }}
              component={Link}
              href="/bookings/calendar"
              label={t("Calendar")}
              icon={<CalendarMonthIcon />}
            />
          )}

          {currentRoute == urlCatalog[2] ? (
            <BottomNavigationAction
              sx={{
                borderRadius: "15px",
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/expedients/list"
              label={t("Expedients")}
              icon={<FeedIcon />}
            />
          ) : (
            <BottomNavigationAction
              sx={{
                background: "white",
                borderRadius: "15px",
              }}
              component={Link}
              href="/expedients/list"
              label={t("Expedients")}
              icon={<FeedIcon />}
            />
          )}

          <BottomNavigationAction
            sx={{
              background: "white",
              borderRadius: "15px",
            }}
            // sx={{
            //   background: "black",
            //   color: "white"
            // }}
            // component={Link}
            // href="/patients/register"
            label={t("Cash register")}
            icon={<MonetizationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ButtonsBar;
