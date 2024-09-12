import {
  Tag,
  Settings,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  FilePen,
  LayoutDashboard,
  Send,
  FilePenLine,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "sidebar.dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutDashboard,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/sign",
          label: "sidebar.sign",
          active: pathname.includes("/sign"),
          icon: FilePen,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/sendRequest",
          label: "sidebar.sendRequest",
          active: pathname.includes("/sendRequest"),
          icon: Send,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "sidebar.models.label",
          active: pathname.includes("/models"),
          icon: FilePenLine,
          submenus: [
            {
              href: "/sidebar/models/create",
              label: "sidebar.models.create",
              active: pathname === "/models/create",
            },
            {
              href: "/sidebar/models/manage",
              label: "sidebar.models.manage",
              active: pathname === "/models/manage",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/drive",
          label: "sidebar.drive",
          active: pathname.includes("/drive"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/reports",
          label: "sidebar.reports.label",
          active: pathname.includes("/report"),
          icon: Tag,
          submenus: [
            {
              href: "/needSignature",
              label: "sidebar.reports.needSignature",
              active: pathname.includes("/needSignature"),
            },
            {
              href: "/inProgress",
              label: "sidebar.reports.inProgress",
              active: pathname.includes("/inProgress"),
            },
            {
              href: "/complete",
              label: "sidebar.reports.complete",
              active: pathname.includes("/complete"),
            },
            {
              href: "/draft",
              label: "sidebar.reports.draft",
              active: pathname.includes("/draft"),
            },
            {
              href: "/signatureRefused",
              label: "sidebar.reports.signatureRefused",
              active: pathname.includes("/signatureRefused"),
            },
            {
              href: "/exped",
              label: "sidebar.reports.exped",
              active: pathname.includes("/exped"),
            },
            {
              href: "/contacts",
              label: "sidebar.reports.contacts",
              active: pathname.includes("/contacts"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/settings",
          label: "sidebar.settings.label",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [
            {
              href: "/settings/my-signature",
              label: "sidebar.settings.mySignature",
              active: pathname.includes("/my-signature"),
            },
            {
              href: "/settings/users",
              label: "sidebar.settings.users",
              active: pathname.includes("/users"),
            },
          ],
        },
      ],
    },
  ];
}
