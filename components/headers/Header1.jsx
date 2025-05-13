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
  const path = usePathname().replaceAll("/", "");
  const [isOpen, setIsOpen] = useState(false);

  const excludedUserPaths = [
    "userdashboard",
    "usermy-profile",
    "usermy-package",
    "usermy-favorites",
    "usermy-save-search",
    "userchat",
    "userreview",
    "userservice",
    "userwaitingList",
    "usersettings",
  ];

  const excludedAgentPaths = [
    "agentdashboard",
    "agentmy-profile",
    "agentmy-package",
    "agentmy-favorites",
    "agentmy-save-search",
    "agentchat",
    "agentreview",
    "agentservice",
    "agentwaitingList",
    "agentsettings",
  ];

  const isDashboardPath =
    excludedUserPaths.includes(path) || excludedAgentPaths.includes(path);

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
                  <ul className="navigation">{!isDashboardPath && <Nav />}</ul>
                </nav>

                <div className="header-right">
                  {isDashboardPath && (
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
                                    whileHover={{
                                      backgroundColor: "#f8f9fa",
                                    }}
                                  >
                                    <div className="d-flex align-items-center gap-2">
                                      <div className="notification-dot bg-primary rounded-circle">
                                        <img
                                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s"
                                          alt=""
                                          className="w-100 rounded-5 h-100 object-fit-cover"
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

                  {!isDashboardPath && (
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
