import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
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
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Reports",
      menus: [
        {
          href: "/reports",
          label: "Reports",
          active: pathname.includes("/report"),
          icon: Tag,
          submenus: [
            {
              href: "/needSignature",
              label: "Need signature",
              active: pathname.includes("/needSignature"),
            },
            {
              href: "/inProgress",
              label: "In progress",
              active: pathname.includes("/inProgress"),
            },
            {
              href: "/complete",
              label: "Complete",
              active: pathname.includes("/complete"),
            },
            {
              href: "/draft",
              label: "Draft",
              active: pathname.includes("/draft"),
            },
            {
              href: "/signatureRefused",
              label: "Signature refused",
              active: pathname.includes("/signatureRefused"),
            },
            {
              href: "/exped",
              label: "Exped",
              active: pathname.includes("/exped"),
            },
            {
              href: "/contacts",
              label: "Contacts",
              active: pathname.includes("/contacts"),
            },
          ],
        },
      ],
    },

    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
