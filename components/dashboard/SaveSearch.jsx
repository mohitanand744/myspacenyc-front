import React from "react";
import BannerC from "../bannerC";
import { FaEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import SortDropdown from "../Filters/SortDropdown";

export default function SaveSearch() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 wd-listing">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">My Favorites</h3>
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
                        <th className="fw-6">Document Type</th>
                        <th className="fw-6">Uploaded Date</th>
                        <th className="fw-6">Status</th>
                        <th className="fw-6">Document Preview</th>
                        <th className="fw-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Mock data for documents */}
                      {[
                        {
                          id: 1,
                          type: "ID Proof",
                          uploadedDate: "March 15, 2025",
                          status: "Pending",
                          preview: "ID_Card.jpg",
                        },
                        {
                          id: 2,
                          type: "Employment Letter",
                          uploadedDate: "March 20, 2025",
                          status: "Approved",
                          preview: "Employment_Letter.pdf",
                        },
                        {
                          id: 3,
                          type: "Pay Stub",
                          uploadedDate: "April 01, 2025",
                          status: "Approved",
                          preview: "Paystub_April.pdf",
                        },
                        {
                          id: 4,
                          type: "Tax Returns",
                          uploadedDate: "March 28, 2025",
                          status: "Rejected",
                          preview: "Tax_2024.pdf",
                        },
                      ].map((document) => (
                        <tr key={document.id} className="file-delete">
                          <td>
                            <div>{document.type}</div>
                          </td>
                          <td>
                            <div>{document.uploadedDate}</div>
                          </td>
                          <td>
                            <button
                              className={`status-badge rounded-2 w-100 text-center ${document.status.toLowerCase()}`}
                            >
                              {document.status}
                            </button>
                          </td>
                          <td className="text-center">
                            <a
                              href="#"
                              className="document-preview text-center"
                            >
                              <IoEyeOutline className="text-warning text-center fs-2" />
                            </a>
                          </td>
                          <td>
                            <ul className="list-action">
                              <li>
                                <button className="upload-new w-100 item">
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8 1V15M1 8H15"
                                      stroke="#4CAF50"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Upload New Version
                                </button>
                              </li>
                              <li>
                                <button className="remove-file justify-content-center d-flex w-100 text-center text-danger item">
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                      stroke="#DC3545"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Delete
                                </button>
                              </li>
                            </ul>
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
}
