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
    href: "/activePlans",
    label: "Grupos y Planes",
    icon: mdiTable,
  },
  {
    href: "/rates",
    label: "Planes",
    icon: mdiTable,
  },
  {
    label: "Usuarios",
    icon: mdiAccountGroup,
    menu: [
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
      {
        label: "Nutricionistas",
        href: "/users/nutricionists",
        icon: mdiApple,
      },
      {
        label: "Estudiantes",
        href: "/users/admin",
        icon: mdiGymnastics,
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
        label: "Roles",
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
