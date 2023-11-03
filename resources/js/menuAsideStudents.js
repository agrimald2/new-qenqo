import {
  mdiMonitor,
  mdiViewList,
  mdiCashSync,
} from "@mdi/js";

export default [
  {
    href: "/students/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    href: "/students/appointments",
    label: "Clases",
    icon: mdiViewList,
  },
  {
    href: "/students/activePlans",
    label: "Grupos",
    icon: mdiViewList,
  },
];
