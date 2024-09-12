import { Tag, Settings, SquarePen, LayoutGrid, LucideIcon } from "lucide-react";

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
          icon: LayoutGrid,
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
          icon: LayoutGrid,
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
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "models",
          active: pathname.includes("/models"),
          icon: SquarePen,
          submenus: [
            {
              href: "/models/create",
              label: "sidebar.models.create",
              active: pathname === "/models/create",
            },
            {
              href: "/models/manage",
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
          label: "Drive",
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
          label: "reports",
          active: pathname.includes("/report"),
          icon: Tag,
          submenus: [
            {
              href: "/needSignature",
              label: "reports/needSignature",
              active: pathname.includes("/needSignature"),
            },
            {
              href: "/inProgress",
              label: "reports.inProgress",
              active: pathname.includes("/inProgress"),
            },
            {
              href: "/complete",
              label: "reports.complete",
              active: pathname.includes("/complete"),
            },
            {
              href: "/draft",
              label: "reports.draft",
              active: pathname.includes("/draft"),
            },
            {
              href: "/signatureRefused",
              label: "reports.signatureRefused",
              active: pathname.includes("/signatureRefused"),
            },
            {
              href: "/exped",
              label: "reports.exped",
              active: pathname.includes("/exped"),
            },
            {
              href: "/contacts",
              label: "reports.contacts",
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
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [
            {
              href: "/settings/my-signature",
              label: "settings.mySignature",
              active: pathname.includes("/my-signature"),
            },
            {
              href: "/settings/users",
              label: "settings.users",
              active: pathname.includes("/users"),
            },
          ],
        },
      ],
    },
  ];
}
