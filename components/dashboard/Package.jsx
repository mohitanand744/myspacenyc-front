`use client`;

import React from "react";
import Link from "next/link";
import BannerC from "../bannerC";
import SearchBar from "../SearchBar/SearchBar";
import SortDropdown from "../Filters/SortDropdown";
import Pagination from "../Pagination/Pagination";
export default function Package() {
  const mockApplications = [
    {
      id: "#APPL1023",
      propertyAddress: "Parkview Apartment 123 Elm st, Apt 454",
      submissionDate: "April 01, 2025",
      agentAssigned: "Jason Lee",
      landlordName: "Mr. Goldberg",
      uploadedDocs: ["ID Proof"],
      listingStatus: "Approved",
      docuSignStatus: "Signed",
      looseStatus: "Pending",
    },
    {
      id: "#APPL1024",
      propertyAddress: "Sunnyvale 456 Oak Ave, Unit 12",
      submissionDate: "April 05, 2025",
      agentAssigned: "Sarah Johnson",
      landlordName: "Ms. Peterson",
      uploadedDocs: ["ID Proof", "Pay Stub", "Credit Report"],
      listingStatus: "Pending",
      docuSignStatus: "Not Sent",
      looseStatus: "Not Started",
    },
    {
      id: "#APPL1025",
      propertyAddress: "Downtown Lofts 789 Pine Rd, Loft 3B",
      submissionDate: "April 10, 2025",
      agentAssigned: "Michael Chen",
      landlordName: "Mr. Rodriguez",
      uploadedDocs: ["ID Proof", "Lease Agreement"],
      listingStatus: "Rejected",
      docuSignStatus: "Expired",
      looseStatus: "Completed",
    },
    {
      id: "#APPL1026",
      propertyAddress: "Hillside Villa 101 Mountain View Dr",
      submissionDate: "March 28, 2025",
      agentAssigned: "Emily Wilson",
      landlordName: "Dr. Simmons",
      uploadedDocs: ["ID Proof", "Bank Statement", "Employment Letter"],
      listingStatus: "Approved",
      docuSignStatus: "Signed",
      looseStatus: "In Progress",
    },
    {
      id: "#APPL1027",
      propertyAddress: "Riverside 202 Waterside Blvd, Apt 5C",
      submissionDate: "April 03, 2025",
      agentAssigned: "David Kim",
      landlordName: "Mrs. Anderson",
      uploadedDocs: ["ID Proof", "Previous Lease"],
      listingStatus: "Under Review",
      docuSignStatus: "Sent",
      looseStatus: "Pending",
    },
    {
      id: "#APPL1028",
      propertyAddress: "Garden Heights 303 Bloomfield Ln",
      submissionDate: "March 15, 2025",
      agentAssigned: "Lisa Wong",
      landlordName: "Mr. Thompson",
      uploadedDocs: ["ID Proof", "Reference Letter"],
      listingStatus: "Approved",
      docuSignStatus: "Completed",
      looseStatus: "Completed",
    },
    {
      id: "#APPL1029",
      propertyAddress: "Metropolitan Plaza 404 Central Ave, Unit 1201",
      submissionDate: "April 12, 2025",
      agentAssigned: "Robert Garcia",
      landlordName: "Ms. Martinez",
      uploadedDocs: ["ID Proof", "Tax Returns", "Pay Stubs"],
      listingStatus: "Pending",
      docuSignStatus: "Not Sent",
      looseStatus: "Not Started",
    },
    {
      id: "#APPL1030",
      propertyAddress: "Lakeside Retreat 505 Marina Dr",
      submissionDate: "March 22, 2025",
      agentAssigned: "Jennifer Adams",
      landlordName: "Mr. Williams",
      uploadedDocs: ["ID Proof", "Pet Application"],
      listingStatus: "Rejected",
      docuSignStatus: "Declined",
      looseStatus: "Cancelled",
    },
  ];

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh">
          <BannerC className="" />
        </div>

        <div className="widget-box-2 mt-5 wd-listing">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">
                Track all ongoing and past rental applications
              </h3>
            </div>

            <SearchBar />
            <SortDropdown />
          </div>
          <div className="tf-new-listing w-100">
            <div className="new-listing wrap-table">
              <div className="table-content">
                <div className="wrap-listing table-responsive">
                  <table className="table-save-search">
                    <thead>
                      <tr>
                        <th className="fw-6">Application ID</th>
                        <th className="fw-6">
                          Property Address / Submission Date
                        </th>
                        <th className="fw-6 d-none">Agent Assigned</th>
                        <th className="fw-6 d-none">Landlord Name</th>
                        <th className="fw-6 d-none">Uploaded Docs</th>
                        <th className="fw-6">Listing Status</th>
                        <th className="fw-6">DocuSign</th>
                        <th className="fw-6">Lease</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockApplications.map((application) => (
                        <tr key={application.id} className="file-delete">
                          <td>{application.id}</td>
                          <td>
                            {application.propertyAddress} <br />
                            {application.submissionDate}
                          </td>
                          <td className="d-none">
                            {application.agentAssigned}
                          </td>
                          <td className="d-none">{application.landlordName}</td>
                          <td className="d-none">
                            {application.uploadedDocs.map((doc, index) => (
                              <span key={index}>
                                • {doc}
                                <br />
                              </span>
                            ))}
                          </td>
                          <td>
                            <button
                              className={`status-badge p-2 w-100 rounded-2 ${application.listingStatus.toLowerCase()}`}
                            >
                              {application.listingStatus}
                            </button>
                          </td>
                          <td>
                            <button
                              className={`status-badge p-2 w-100 rounded-2 ${application.docuSignStatus
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {application.docuSignStatus}
                            </button>
                          </td>
                          <td>
                            <img
                              width="28"
                              height="28"
                              src="https://img.icons8.com/color/48/pdf.png"
                              alt="pdf"
                            />
                            PDF
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
        {/* <div className="widget-box-2 style-2 package">
          <h3 className="title">My Package</h3>
          <div className="flat-pricing">
            <div className="box box-style">
              <h3 className="sub-title fw-7">Basic</h3>
              <p className="text-sub fw-6">
                Automatically reach potential customers
              </p>
              <div className="title-price flex">
                <h2>$19</h2>
                <div className="month fw-7">/ month</div>
              </div>
              <p className="texts">Per month, per company or team members</p>
              <ul className="check">
                <li className="flex-three">Listing free</li>
                <li className="flex-three">Support 24/7</li>
                <li className="flex-three">Quick access to customers</li>
                <li className="flex-three">Auto refresh ads</li>
              </ul>
              <div className="button-pricing">
                <Link
                  className="tf-btn bg-color-primary pd-20"
                  href={`/pricing`}
                >
                  <span>Upgrade</span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* .footer-dashboard */}
        <div className="footer-dashboard style-2">
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
