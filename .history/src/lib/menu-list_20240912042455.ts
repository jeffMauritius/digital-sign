import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
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
  icon: LucideIcon
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
          submenus: []
        }
      ]
    },
    
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts"
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new"
            }
          ]
        },
        {
          href: "/sign",
          label: "Sign",
          active: pathname.includes("/sign"),
          icon: Bookmark,
          submenus: []
        },
        {
          href: "/sendRequest",
          label: "SendRequest",
          active: pathname.includes("/sendRequest"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/models",
          label: "Models",
          active: pathname.includes("/models"),
          icon: Tag,
          submenus: [
            {
              href: "/models/create",
              label: "Create model",
              active: pathname === "/models/create"
            },
            {
              href: "/models/manage",
              label: "Manage model",
              active: pathname === "/models/manage"
            }
          ]
        },
        {
          href: "/drive",
          label: "Drive",
          active: pathname.includes("/drive"),
          icon: Tag,
          submenus: []
        }
      ]
    },
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
          icon: Users,
          submenus: []
        },
        {
          href: "/inProgress",
          label: "In progress",
          active: pathname.includes("/inProgress"),
          icon: Settings,
          submenus: []
        },
        {
          href: "/complete",
          label: "Complete",
          active: pathname.includes("/complete"),
          icon: Settings,
          submenus: []
        },
        {
          href: "/draft",
          label: "Draft",
          active: pathname.includes("/draft"),
          icon: Settings,
          submenus: []
        },
        {
          href: "/signatureRefused",
          label: "Signature refused",
          active: pathname.includes("/signatureRefused"),
          icon: Settings,
          submenus: []
        },
        {
          href: "/exped",
          label: "Exped",
          active: pathname.includes("/exped"),
          icon: Settings,
          submenus: []
        },
        {
          href: "/contacts",
          label: "Contacts",
          active: pathname.includes("/contacts"),
          icon: Settings,
          submenus: []
        }
      ]
    },
  ],
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: []
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
