import BannerC from "@/components/bannerC";
import SortDropdown from "@/components/Filters/SortDropdown";
import Pagination from "@/components/Pagination/Pagination";
import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const Page = () => {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 wd-listing">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">Waitlist Manager</h3>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SearchBar />
              <SortDropdown />
            </div>
          </div>
          <div className="tf-new-listing w-100">
            <div className="new-listing wrap-table">
              <div className="table-content">
                <div className="wrap-listing table-responsive">
                  <table className="table-save-search">
                    <thead>
                      <tr>
                        <th className="fw-6">Building Name</th>
                        <th className="fw-6">Preferred Unit Type</th>
                        <th className="fw-6">Date Joined</th>
                        <th className="fw-6">Priority Level</th>
                        <th className="fw-6">Notification Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Mock data for building preferences */}
                      {[
                        {
                          id: 1,
                          buildingName: "Greenpoint Towers",
                          unitType: "Studio",
                          dateJoined: "April 01, 2025",
                          priority: "Low",
                          notification: "Enabled",
                        },
                        {
                          id: 2,
                          buildingName: "Riverside Apartments",
                          unitType: "1 Bedroom",
                          dateJoined: "March 15, 2025",
                          priority: "High",
                          notification: "Enabled",
                        },
                        {
                          id: 3,
                          buildingName: "Summit Heights",
                          unitType: "2 Bedroom",
                          dateJoined: "February 28, 2025",
                          priority: "Medium",
                          notification: "Disabled",
                        },
                        {
                          id: 4,
                          buildingName: "Parkview Residences",
                          unitType: "Studio",
                          dateJoined: "April 10, 2025",
                          priority: "Low",
                          notification: "Enabled",
                        },
                        {
                          id: 5,
                          buildingName: "Metropolitan Lofts",
                          unitType: "1 Bedroom",
                          dateJoined: "January 05, 2025",
                          priority: "High",
                          notification: "Enabled",
                        },
                        {
                          id: 6,
                          buildingName: "Harbor Lights",
                          unitType: "3 Bedroom",
                          dateJoined: "March 22, 2025",
                          priority: "Medium",
                          notification: "Disabled",
                        },
                        {
                          id: 7,
                          buildingName: "The Lexington",
                          unitType: "2 Bedroom",
                          dateJoined: "April 05, 2025",
                          priority: "Low",
                          notification: "Enabled",
                        },
                        {
                          id: 8,
                          buildingName: "Pine Grove Villas",
                          unitType: "1 Bedroom",
                          dateJoined: "February 10, 2025",
                          priority: "Medium",
                          notification: "Enabled",
                        },
                      ].map((building) => (
                        <tr key={building.id} className="file-delete">
                          <td>
                            <div>{building.buildingName}</div>
                          </td>
                          <td>
                            <div>{building.unitType}</div>
                          </td>
                          <td>
                            <div>{building.dateJoined}</div>
                          </td>
                          <td>
                            <button
                              className={`status-badge rounded-2 w-100 text-center ${building.priority.toLowerCase()}`}
                            >
                              {building.priority}
                            </button>
                          </td>
                          <td>
                            <div className="notification-status">
                              {building.notification === "Enabled" ? (
                                <span>✅ Enabled</span>
                              ) : (
                                <span>🔕 Disabled</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
        {/* .footer-dashboard */}
        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} MY Space NYC</p>
          <ul className="list">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* .footer-dashboard */}
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
};

export default Page;
