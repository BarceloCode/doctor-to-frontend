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

const ButtonsBar = () => {
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
          }}
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction
            // component={Link}
            // href="/patients/register"
            label="Book Apointment"
            icon={<EventAvailableIcon />}
          />

          <BottomNavigationAction
            component={Link}
            href="/patients/register"
            label="Add Patient"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            component={Link}
            href="/bookings/calendar"
            label="Calendar"
            icon={<CalendarMonthIcon />}
          />
          <BottomNavigationAction
            // component={Link}
            // href="/patients/register"
            label="Expedients"
            icon={<FeedIcon />}
          />
          <BottomNavigationAction
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
