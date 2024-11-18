import { Cart, DashBoard } from "@/components/svg";
import {
  Calendar,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Heart,
  Layers,
  Lock,
  LogOut,
  MessageSquare,
  Settings,
  Share2,
  Star,
  Users,
} from "lucide-react";

export interface MenuItemProps {
  title?: string;
  icon?: React.ElementType;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick?: () => void;
  isHeader?: boolean;
}

// Doctor-specific configuration
export const doctorConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Menu",
  },
  {
    title: "Dashboard",
    icon: DashBoard,
    href: "/doctor-dashboard",
  },
  {
    title: "Requests",
    href: "/requests",
    icon: Cart,
  },
  {
    title: "Appointments",
    href: "/doctor-appointments",
    icon: Calendar,
    // child: [
    //   {
    //     title: "New Appointment",
    //     href: "/new-appointment",
    //     icon: FilePlus,
    //   },
    //   {
    //     title: "Completed Appointment",
    //     href: "/completed-appointment",
    //     icon: Heart,
    //   },
    //   {
    //     title: "Cancelled",
    //     href: "/cancelled",
    //     icon: Heart,
    //   },
    // ],
  },

  {
    title: "My Patients",
    href: "/patients",
    icon: Users,
    // child: [
    //   {
    //     title: "New Patient",
    //     href: "/new-patient",
    //     icon: FilePlus,
    //   },
    //   {
    //     title: "Active Patient",
    //     href: "/active-patient",
    //     icon: Heart,
    //   },
    //   {
    //     title: "Old Patient",
    //     href: "/old-patient",
    //     icon: Heart,
    //   },
    // ],
  },
  {
    title: "Messages",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Available Timings",
    href: "/available-timings",
    icon: Clock,
  },

  {
    title: "Specialties & Services",
    href: "/specialties-services",
    icon: Layers,
  },
  {
    title: "Reviews",
    href: "/reviews",
    icon: Star,
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: CreditCard,
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: FileText,
    child: [
      {
        title: "Create Invoice",
        href: "/create-invoice",
        icon: DollarSign,
      },
      {
        title: " Invoices Details",
        href: "/invoice-details",
        icon: Heart,
      },
      {
        title: " Invoices List",
        href: "/invoice-list",
        icon: Heart,
      },
    ],
  },
  {
    title: "Payout Settings",
    href: "/payout-settings",
    icon: DollarSign,
  },
  {
    title: "Profile Settings",
    href: "/profile-settings",
    icon: Settings,
  },
  {
    title: "Social Media",
    href: "/social-media",
    icon: Share2,
  },

  {
    title: "Change Password",
    href: "/change-password",
    icon: Lock,
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];

// Patient-specific configuration
export const patientConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Menu",
  },
  {
    title: "Dashboard",
    icon: DashBoard,
    href: "/patient-dashboard",
  },

  {
    title: "Appointments",
    href: "/patient-appointments",
    icon: Calendar,
  },
  {
    title: "Favorites",
    href: "/favorites",
    icon: Cart,
  },
  {
    title: " Dependents",
    href: "/dependents",
    icon: Cart,
  },
  {
    title: "Add Medical Records",
    href: "/add-medical-records",
    icon: Cart,
  },
  {
    title: "Messages",
    href: "/chat",
    icon: MessageSquare,
  },

  {
    title: "Accounts",
    href: "/accounts",
    icon: CreditCard,
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: FileText,
    child: [
      {
        title: "Create Invoice",
        href: "/create-invoice",
        icon: DollarSign,
      },
      {
        title: " Invoices Details",
        href: "/invoice-details",
        icon: Heart,
      },
      {
        title: " Invoices List",
        href: "/invoice-list",
        icon: Heart,
      },
    ],
  },

  {
    title: "Profile Settings",
    href: "/patient-profile-settings",
    icon: Settings,
  },
  {
    title: "Medical Details",
    href: "/medical-details",
    icon: Settings,
  },
  {
    title: "Change Password",
    href: "/change-password",
    icon: Lock,
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];
