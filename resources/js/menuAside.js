import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiAccountConvert,
  mdiApple,
  mdiWeightLifter,
  mdiGymnastics,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiAccountGroup,
  mdiReact,
  mdiCog,
  mdiCashSync,
  mdiEye
} from "@mdi/js";

export default [
  {
    href: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    href: "/appointments",
    label: "Clases",
    icon: mdiViewList,
  },
  {
    href: "/activePlans",
    label: "Grupos y Planes",
    icon: mdiTable,
  },
  {
    href: "/rates",
    label: "Planes",
    icon: mdiTelevisionGuide,
  },
  {
    label: "Usuarios",
    icon: mdiAccountGroup,
    menu: [
      {
        label: "Estudiantes",
        href: "/students",
        icon: mdiGymnastics,
      },
      {
        label: "Administradores",
        href: "/users/admin",
        icon: mdiAccountConvert,
      },
      {
        label: "Entrenadores",
        href: "/users/trainers",
        icon: mdiWeightLifter,
      },
    ],
  },
  {
    label: "Configuraciones",
    icon: mdiCog,
    menu: [
      {
        label: "Métodos de Pago",
        href: "/users/admin",
        icon: mdiCashSync,
      },
      {
        label: "Roles",
        href: "/trainers",
        icon: mdiEye,
      },
      {
        label: "Tipo de Tarifas",
        href: "/trainers",
        icon: mdiEye,
      },
      {
        label: "Estados de Asistencia",
        href: "/",
        icon: mdiEye,
      },
    ],
  },
  {
    href: "/",
    label: "Cod. Descuento",
    icon: mdiTable,
  },
];
