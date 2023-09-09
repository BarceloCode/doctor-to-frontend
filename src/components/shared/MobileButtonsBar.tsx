import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const MobileButtonsBar = () => {
  const [open, setOpen] = useState(false);
  const list = [
    {
      txt: "Book Apointment",
      href: "",
      icon: <EventAvailableIcon />,
    },
    {
      txt: "Add Patient",
      href: "/patients/register",
      icon: <AddIcon />,
    },
    {
      txt: "Calendar",
      href: "/bookings/calendar",
      icon: <CalendarMonthIcon />,
    },
    {
      txt: "Expedient",
      href: "/expedients/list",
      icon: <FeedIcon />,
    },
    {
      txt: "Cash register",
      href: "",
      icon: <MonetizationOnIcon />,
    },
  ];
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          // bottom: 20,
          display: "flex",
          bottom: 0,
          left: 0,
          right: 0,
          background: "transparent",
        }}
        elevation={3}
      >
        <Button
          sx={{ margin: "auto", marginBottom: "20px" }}
          onClick={() => setOpen(true)}
        >
          Open menu
        </Button>
      </Paper>
      <Drawer anchor={"bottom"} open={open} onClose={() => setOpen(false)}>
        <List>
          {list.map((item: any, index: number) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} href={item?.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileButtonsBar;
