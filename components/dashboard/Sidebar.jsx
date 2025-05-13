"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdHomeRepairService,
  MdNotificationsNone,
  MdOutlinePayments,
  MdOutlineHome,
  MdOutlineApartment,
  MdOutlineCalendarToday,
  MdOutlineEmail,
  MdOutlineBarChart,
  MdOutlineHelpOutline,
  MdOutlinePerson,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import {
  RiFolderReduceLine,
  RiUserSearchLine,
  RiChatSmileLine,
} from "react-icons/ri";
import { FaRegHeart, FaFileAlt } from "react-icons/fa";
import { CiSettings, CiViewList } from "react-icons/ci";
import { BsCheck2Square, BsEnvelope } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import usePortalContext from "@/Hooks/usePortalContext";

// Mock data for agent menu items
const agentMenuItems = [
  {
    name: "Apartment",
    icon: <MdOutlineApartment size={20} />,
    path: "apartment",
  },
  {
    name: "Create Application",
    icon: <IoDocumentTextOutline size={20} />,
    path: "create-application",
  },
  {
    name: "Lead Management",
    icon: <RiUserSearchLine size={20} />,
    path: "lead-management",
  },
  {
    name: "Calendar & Appointments",
    icon: <MdOutlineCalendarToday size={20} />,
    path: "calendar",
  },
  {
    name: "Client Messaging",
    icon: <RiChatSmileLine size={20} />,
    path: "client-messaging",
  },
  {
    name: "Applications Tracking",
    icon: <BsCheck2Square size={20} />,
    path: "applications-tracking",
  },
  {
    name: "Commission & Earnings",
    icon: <MdOutlinePayments size={20} />,
    path: "commission",
  },
  {
    name: "Gmail & Calendar Sync",
    icon: <BsEnvelope size={20} />,
    path: "gmail-sync",
  },
  {
    name: "Reports & Analytics",
    icon: <MdOutlineBarChart size={20} />,
    path: "reports",
  },
  {
    name: "Notifications",
    icon: <MdNotificationsNone size={20} />,
    path: "notifications",
  },
  { name: "Profile", icon: <MdOutlinePerson size={20} />, path: "profile" },
  {
    name: "Account Settings",
    icon: <MdOutlineSettings size={20} />,
    path: "account-settings",
  },
  {
    name: "Help & Support",
    icon: <MdOutlineHelpOutline size={20} />,
    path: "help",
  },
];

// Mock data for user menu items
const userMenuItems = [
  { name: "Dashboard", icon: <MdOutlineHome size={20} />, path: "dashboard" },
  {
    name: "My Applications",
    icon: <FaFileAlt size={20} />,
    path: "my-package", // path: "my-applications",
  },
  {
    name: "Saved Listings",
    icon: <FaRegHeart size={20} />,
    path: "my-favorites", //path: "saved-listings",
  },
  {
    name: "My Documents",
    icon: <RiFolderReduceLine size={20} />,
    path: "my-save-search", //path: "my-documents",
  },
  {
    name: "My Payments",
    icon: <MdOutlinePayments size={20} />,
    path: "review", // path: "my-payments",
  },
  { name: "Chat / Message", icon: <RiChatSmileLine size={20} />, path: "chat" },
  {
    name: "Service Marketplace",
    icon: <MdHomeRepairService size={20} />,
    path: "service",
  },
  {
    name: "Notifications",
    icon: <MdNotificationsNone size={20} />,
    path: "notifications",
  },
  {
    name: "Waitlist Manager",
    icon: <CiViewList size={20} />,
    path: "waitingList",
  },
  {
    name: "Account Settings",
    icon: <CiSettings size={20} />,
    path: "settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { portal, setPortal } = usePortalContext();

  // Determine which menu items to display based on portal type
  const menuItems = portal === "agent" ? agentMenuItems : userMenuItems;

  return (
    <div className="wrap-sidebar">
      <div className="sidebar-menu-dashboard">
        <div className="menu-box">
          <ul className="box-menu-dashboard">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`nav-menu-item ${
                  pathname === `/${portal}/${item.path}` ? "active" : ""
                }`}
              >
                <Link
                  className="nav-menu-link"
                  href={`/${portal}/${item.path}`}
                >
                  <span className="nav-menu-icon">{item.icon}</span>
                  {item.name}
                  {item.name === "Saved Listings" && " (1)"}
                  {item.name === "Waiting lists" && " (3)"}
                </Link>
              </li>
            ))}

            {/* Profile completion progress */}
            <li className="nav-menu-item">
              <div className="container mt-4">
                <div className="row justify-content-center">
                  <div className="text-start c">
                    <h5 className="ph4 mb-2">82%</h5>
                    <div className="progress" style={{ height: "4px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "82%" }}
                        aria-valuenow="82"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h5 className="ph4 mt-2">Profile Complete</h5>
                  </div>
                </div>
              </div>
            </li>

            {/* Logout button */}
            <li className="nav-menu-item text-danger rounded-5">
              <Link className="nav-menu-link text-danger" href="/">
                <MdLogout size={20} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
