import React from "react";
import Image from "next/image";
import BannerC from "../bannerC";
import SearchBar from "../SearchBar/SearchBar";
import SortDropdown from "../Filters/SortDropdown";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { FaBath, FaBed, FaEnvelope, FaPhone } from "react-icons/fa";
import ActionDropDown from "../ActionDropDown";
import Pagination from "../Pagination/Pagination";
export default function Review() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 wd-listing mt-5 mb-24">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">Payments</h3>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SearchBar />
              <SortDropdown />
            </div>
          </div>
          <div className="wrap-table">
            <div className="wrap-listing table-responsive">
              <table className="table-save-search">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Payment Type</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 1,
                      transactionId: "#TXN001122",
                      paymentType: "Rent",
                      amount: 2400.0,
                      method: "Card",
                      date: "April 01, 2025",
                      status: "Paid",
                    },
                    {
                      id: 2,
                      transactionId: "#TXN001123",
                      paymentType: "Security Deposit",
                      amount: 2400.0,
                      method: "Bank Transfer",
                      date: "March 25, 2025",
                      status: "Paid",
                    },
                    {
                      id: 3,
                      transactionId: "#TXN001124",
                      paymentType: "Utility Bill",
                      amount: 125.75,
                      method: "Card",
                      date: "April 05, 2025",
                      status: "Pending",
                    },
                    {
                      id: 4,
                      transactionId: "#TXN001125",
                      paymentType: "Late Fee",
                      amount: 50.0,
                      method: "Card",
                      date: "April 10, 2025",
                      status: "Failed",
                    },
                  ].map((transaction) => (
                    <tr key={transaction.id} className="file-delete">
                      <td>
                        <div className="transaction-id">
                          {transaction.transactionId}
                        </div>
                      </td>
                      <td>
                        <div className="payment-type">
                          {transaction.paymentType}
                        </div>
                      </td>
                      <td>
                        <div className="amount">
                          $
                          {transaction.amount.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </div>
                      </td>
                      <td>
                        <div className="method">{transaction.method}</div>
                      </td>
                      <td>
                        <div className="date">{transaction.date}</div>
                      </td>
                      <td>
                        <button
                          className={`status-badge fs-16 w-100 rounded-2 ${transaction.status.toLowerCase()}`}
                        >
                          {transaction.status}
                        </button>
                      </td>
                      <td>
                        <button className="receipt-download">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
                              stroke="#4CAF50"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
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
