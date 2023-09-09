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

const ButtonsBar = () => {
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
            // sx={{
            //   background: "black",
            //   color: "white",
            // }}
            // component={Link}
            // href="/patients/register"
            label="Book Apointment"
            icon={<EventAvailableIcon />}
          />
          {currentRoute == urlCatalog[1] ? (
            <BottomNavigationAction
              sx={{
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/patients/register"
              label="Add Patient"
              icon={<AddIcon />}
            />
          ) : (
            <BottomNavigationAction
              component={Link}
              href="/patients/register"
              label="Add Patient"
              icon={<AddIcon />}
            />
          )}

          {currentRoute == urlCatalog[3] ? (
            <BottomNavigationAction
              sx={{
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/bookings/calendar"
              label="Calendar"
              icon={<CalendarMonthIcon />}
            />
          ) : (
            <BottomNavigationAction
              component={Link}
              href="/bookings/calendar"
              label="Calendar"
              icon={<CalendarMonthIcon />}
            />
          )}

          {currentRoute == urlCatalog[2] ? (
            <BottomNavigationAction
              sx={{
                background: "black",
                color: "white",
              }}
              component={Link}
              href="/expedients/list"
              label="Expedients"
              icon={<FeedIcon />}
            />
          ) : (
            <BottomNavigationAction
              component={Link}
              href="/expedients/list"
              label="Expedients"
              icon={<FeedIcon />}
            />
          )}

          <BottomNavigationAction
            // sx={{
            //   background: "black",
            //   color: "white"
            // }}
            // component={Link}
            // href="/patients/register"
            label="Cash register"
            icon={<MonetizationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ButtonsBar;
