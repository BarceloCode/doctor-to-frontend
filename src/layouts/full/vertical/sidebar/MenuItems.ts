import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAperture,
  IconPlus,
  IconList,
  IconCalendarDue,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Starter",
    icon: IconAperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Patients",
  },
  {
    id: uniqueId(),
    title: "Patient List",
    icon: IconList,
    href: "/patients/list",
  },
  {
    id: uniqueId(),
    title: "Patient Register",
    icon: IconPlus,
    href: "/patients/register",
  },
  {
    navlabel: true,
    subheader: "Expedients",
  },
  // {
  //   id: uniqueId(),
  //   title: "Create Proceedings",
  //   icon: IconPlus,
  //   href: "/proceedings",
  // },
  {
    id: uniqueId(),
    title: "Expedients List",
    icon: IconList,
    href: "/expedients/list",
  },
  {
    navlabel: true,
    subheader: "Books",
  },
  {
    id: uniqueId(),
    title: "Calendar",
    icon: IconCalendarDue,
    href: "/bookings/calendar",
  },
];

export default Menuitems;
