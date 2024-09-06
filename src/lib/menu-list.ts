import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  AlertTriangle,
  Archive,
  List,
  Map,
  Ruler
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
      groupLabel: "Sites",
      menus: [
        {
          href: "/sites",
          label: "List",
          active: pathname.includes("/sites"),
          icon: List,
          submenus: []
        },
        {
          href: "/sites/map",
          label: "Map",
          active: pathname.includes("/sites/map"),
          icon: Map,
          submenus: []
        },
      ]
    },
    {
      groupLabel: "Assets",
      menus: [
        {
          href: "/assets",
          label: "List",
          active: pathname.includes("/assets"),
          icon: List,
          submenus: []
        },
        {
          href: "/assets/map",
          label: "Map",
          active: pathname.includes("/assets/map"),
          icon: Map,
          submenus: []
        }
        
      ]

    },
    {
      groupLabel: "Devices",
      menus: [
        {
          href: "/devices",
          label: "List",
          active: pathname.match(/\/devices\/?$/),
          icon: List,
          submenus: []
        },
        {
          href: "/devices/map",
          label: "Map",
          active: pathname.includes("/devices/map"),
          icon: Map,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Alerts",
      menus: [
        {
          href: "/alerts/open",
          label: "Open",
          active: pathname.includes("/alerts/open"),
          icon: AlertTriangle,
          submenus: []
        },
        {
          href: "/alerts/closed",
          label: "Closed",
          active: pathname.includes("/alerts/closed"),
          icon: Archive,
          submenus: []
        },
        {
          href: "/alerts/map",
          label: "Map",
          active: pathname.includes("/alerts/map"),
          icon: Map,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Rules",
      menus: [
        {
          href: "/rules",
          label: "List",
          active: pathname.includes("/rules/list"),
          icon: List,
          submenus: []
        }
      ]
    }
  
  ];
}
