"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import DashboardNav from "./DashboardNav";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineMessage } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";

export default function Header1({ parentClass = "header" }) {
  const path = usePathname().replace("/", "");
  const [isOpen, setIsOpen] = useState(false);
  const excludedPaths = [
    "dashboard",
    "my-profile",
    "my-package",
    "my-favorites",
    "my-save-search",
    "chat",
  ];

  return (
    <header id="header-main" className={parentClass}>
      <div className="header-inner">
        <div className="tf-container xl">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link href={`/`} className="site-logo">
                    <img
                      className="logo_header"
                      alt=""
                      data-light="/lgo.png"
                      data-dark="/lgo.png"
                      src="/lgo.png"
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    {!excludedPaths.includes(path) && <Nav />}
                  </ul>
                </nav>
                <div className="header-right">
                  {/* <div className="phone-number">
                    <div className="icons">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p>(603) 555-0123</p>
                  </div> */}

                  {excludedPaths.includes(path) && (
                    <>
                      <SearchBar />
                      <div className="message">
                        <div className="notificationC">
                          <MdOutlineMessage />
                        </div>
                      </div>
                      <div className="me-3 position-relative">
                        <div
                          className="border-0 bg-transparent position-relative"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <IoIosNotificationsOutline className="notificationC" />
                          <div className="position-absolute top-0 notiCount start-100 translate-middle badge rounded-pill bg-danger">
                            4
                          </div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              className="notification-dropdown p-4 top-100 position-absolute shadow rounded"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="dropdown-header d-flex justify-content-between align-items-center rounded-4 mb-3 px-3 py-2 border-bottom">
                                <h6 className="mb-0">Notifications (4)</h6>

                                <div
                                  className="bg-danger rounded-5 p-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <IoMdClose className="fs-3 text-white" />
                                </div>
                              </div>

                              <div className="notification-items">
                                {[1, 2, 3, 4].map((item) => (
                                  <motion.div
                                    key={item}
                                    className="notification-item rounded-4 mt-3 px-3 py-2 border-bottom"
                                    whileHover={{ backgroundColor: "#f8f9fa" }}
                                  >
                                    <div className="d-flex align-items-center gap-2">
                                      <div className="notification-dot bg-primary rounded-circle">
                                        <img
                                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s"
                                          alt=""
                                          className="w-100 rounded-5 h-100 object-fit-cover
                                          "
                                        />
                                      </div>
                                      <div>
                                        <strong className="mb-0 text-secondary small">
                                          New notification {item}
                                        </strong>
                                        <br />
                                        <small className="text-secondary">
                                          2 mins ago
                                        </small>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="dropdown-footer px-3 pt-4 text-center">
                                <a href="#" className="small">
                                  View all notifications
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  )}

                  <DashboardNav />
                  {!excludedPaths.includes(path) && (
                    <div className="btn-add">
                      <Link
                        className="tf-btn style-border pd-23"
                        href="#modalLogin"
                        data-bs-toggle="modal"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <i className="icon-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
