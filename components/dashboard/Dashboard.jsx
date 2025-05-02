"use client";
import React from "react";
import LineChart from "./Chart";
import Link from "next/link";
import Image from "next/image";
import { properties5 } from "@/data/properties";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  MdOutlineCancel,
  MdOutlineReviews,
  MdPendingActions,
} from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GoBell } from "react-icons/go";
import BannerC from "../bannerC";

export default function Dashboard() {
  const mockMessages = [
    {
      id: 1,
      avatar:
        "https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg",
      name: "Themesflat",
      time: "3 days ago",
      message: "Hello there! I was wondering about the new update features.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      time: "1 hour ago",
      message: "Hello there! I was wondering about the new update features.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Chen",
      time: "5 minutes ago",
      message:
        "The project is due next week. Let me know if you need any help.",
    },
  ];

  const mockReviews = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Bessie Cooper",
      time: "3 days ago",
      message: "Maecenas eu lorem et urna accumsan vestibulum vel vitae magna.",
      rating: 5,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Smith",
      time: "1 week ago",
      message:
        "Excellent product! Very satisfied with the quality and service.",
      rating: 4,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Wilson",
      time: "2 days ago",
      message: "Good experience overall, but delivery could be faster.",
      rating: 3,
    },
  ];

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="mb-4  row g-4">
          <div className="col-xl-6">
            <BannerC />
          </div>

          <div className="col-xl-6">
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="h-100 flex-grow-1">
                <div class="d-flex w-100 justify-content-between align-items-center mb-2">
                  <h6 class="card-title mb-0 text-uppercase fw-bold">
                    Reminders
                  </h6>
                  <div class="badge text-secondary fs-3">🕒 09:00</div>
                </div>

                <div class="card reminder-card w-100 shadow-sm h-100 border-0">
                  <div class="card-body p-3">
                    <div className="d-flex  align-content-center justify-content-between">
                      <GoBell className="fs-1 mt-2" />

                      <div className="d-flex gap-2 align-items-center">
                        <img
                          className="avatarC"
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                        />
                        <img
                          className="avatarC"
                          src="https://cdn-icons-png.flaticon.com/256/3135/3135789.png"
                          alt=""
                        />
                        <img
                          className="avatarC"
                          src="https://cdn-icons-png.flaticon.com/512/4556/4556329.png"
                          alt=""
                        />
                        <div class="badgec text-warning">+10</div>
                      </div>
                    </div>
                    <div className="img">
                      <img className="rounded-5 w-100" src="/bgb.png" alt="" />
                    </div>
                    <div class="reminder-item d-flex justify-content-between align-items-center">
                      <div class="time-box me-3 text-center">
                        <div class="fw-bold">09:00 AM</div>
                      </div>
                      <div class="fs-4 text-secondary">Big Apartment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-grow-1 flex-column gap-4">
                <div
                  className="card cardc position-relative border-0 mt-2 shadow-sm"
                  style={{ width: "100%", borderRadius: "12px" }}
                >
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-warning rounded-3 h-100 p-2 text-center me-3"
                        style={{ minWidth: "60px" }}
                      >
                        <GoBell className="fs-1 text-white mt-2" />
                      </div>
                      <div className="">
                        <div className="fw-bold">Big Apartment</div>
                        <div className="fw-bold fs-5">09:00 AM</div>
                      </div>
                    </div>
                  </div>

                  <div className="cutvv position-absolute">
                    <RxCross2 />
                  </div>
                </div>
                <div
                  className="card cardc position-relative border-0 mt-2 shadow-sm"
                  style={{ width: "100%", borderRadius: "12px" }}
                >
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-warning rounded-3 h-100 p-2 text-center me-3"
                        style={{ minWidth: "60px" }}
                      >
                        <GoBell className="fs-1 text-white mt-2" />
                      </div>
                      <div className="">
                        <div className="fw-bold">Big Apartment</div>
                        <div className="fw-bold fs-5">09:00 AM</div>
                      </div>
                    </div>
                  </div>

                  <div className="cutvv position-absolute">
                    <RxCross2 />
                  </div>
                </div>
                <div
                  className="card cardc position-relative border-0 mt-2 shadow-sm"
                  style={{ width: "100%", borderRadius: "12px" }}
                >
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-warning rounded-3 h-100 p-2 text-center me-3"
                        style={{ minWidth: "60px" }}
                      >
                        <GoBell className="fs-1 text-white mt-2" />
                      </div>
                      <div className="">
                        <div className="fw-bold">Big Apartment</div>
                        <div className="fw-bold fs-5">09:00 AM</div>
                      </div>
                    </div>
                  </div>

                  <div className="cutvv position-absolute">
                    <RxCross2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flat-counter-v2 tf-counter">
          <div className="counter-box">
            <div className="box-icon">
              <span className="cIcon">
                <MdOutlineHome className="" />
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">
                All Rent Properties
              </div>
              <div className="box-count d-flex align-items-end">
                <div className="number">52k+</div>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="cIcon">
                <MdPendingActions />
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Total Pending</div>
              <div className="box-count d-flex align-items-end">
                <div className="number">02</div>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="cIcon">
                <FaRegHeart />
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Total Saved</div>
              <div className="d-flex align-items-end">
                <div className="number">06</div>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="cIcon">
                <MdOutlineReviews />
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Reviews</div>
              <div className="d-flex align-items-end">
                <div className="number">1.483</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="widget-box-2 wd-listing mb-24">
              <h3 className="title">My Favorites</h3>
              <div className="wrap-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Listing</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties5.map((listing) => (
                        <tr key={listing.id} className="file-delete">
                          <td>
                            <div className="listing-box">
                              <div className="images">
                                <img
                                  alt="images"
                                  width={615}
                                  height={405}
                                  src={listing.imageSrc}
                                />
                              </div>
                              <div className="content">
                                <div className="title">
                                  <Link
                                    href={`/property-detail-v1/${listing.id}`}
                                    className="link"
                                  >
                                    {listing.title}
                                  </Link>
                                </div>
                                <div className="text-date">
                                  Posting date: {listing.postingDate}
                                </div>
                                <div className="text-btn text-color-primary">
                                  {listing.price.toLocaleString()}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-success">
                              {listing.expiryDate}
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="bg-transparent"
                                type="button"
                                id="actionDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <CiMenuKebab className="fs-2" />
                              </button>

                              <motion.ul
                                className="dropdown-menu fs-4 p-4 rounded-5 list-action shadow"
                                aria-labelledby="actionDropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <motion.li>
                                  <a className="dropdown-item d-flex align-items-center gap-2">
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                    >
                                      <path
                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                        stroke="#A3ABB0"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    Edit
                                  </a>
                                </motion.li>

                                <motion.li>
                                  <a className="dropdown-item d-flex align-items-center gap-2">
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                    >
                                      <path
                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                        stroke="#A3ABB0"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    Sold
                                  </a>
                                </motion.li>

                                <motion.li>
                                  <a className="dropdown-item d-flex align-items-center gap-2 text-danger">
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                    >
                                      <path
                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    Delete
                                  </a>
                                </motion.li>
                              </motion.ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className="wg-pagination">
                  <li className="arrow">
                    <a href="#">
                      <i className="icon-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li className="arrow">
                    <a href="#">
                      <i className="icon-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-box-2 wd-chart">
              <h5 className="title">Page Inside</h5>
              <div className="wd-filter-date">
                <div className="left">
                  <div className="dates active">Day</div>
                  <div className="dates">Week</div>
                  <div className="dates">Month</div>
                  <div className="dates">Year</div>
                </div>
                <div className="right">
                  <form>
                    <fieldset className="ip-group icon">
                      <input
                        type="text"
                        id="datepicker3"
                        className="ip-datepicker icon"
                        placeholder="From Date"
                      />
                    </fieldset>
                  </form>
                  <form>
                    <fieldset className="ip-group icon">
                      <input
                        type="text"
                        id="datepicker4"
                        className="ip-datepicker icon"
                        placeholder="To Date"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="chart-box w-100">
                <LineChart />
              </div>
            </div>

            <div className="my-5">
              <h4>Upcoming Appointment</h4>

              <div className="row g-4 mt-4">
                <div className="col-lg-6">
                  <div className="boxC cardc p-4 rounded-5 d-flex gap-3">
                    <div className="img">
                      <img className="h-100" src="/hhhh.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="">
                          <h5>Home Rent</h5>
                        </div>
                        <div className="text-center">
                          <p>April 10, 2025</p>
                          <p>10:00 AM</p>
                        </div>
                      </div>
                      <div className="my-3">
                        <FaLocationDot />{" "}
                        <span>Terry Lane, Golden CO 80403</span>
                      </div>

                      <div className="d-flex mt-3 justify-content-between align-items-center gap-4 ">
                        <a
                          href="#"
                          className="tf-btn cbtn fw-6 flex-grow-1 bg-color-primary fw-6"
                        >
                          Reschedules
                        </a>
                        <a class="tf-btn cbtn bg-secondary flex-grow-1">
                          Cancle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="boxC cardc p-4 rounded-5 d-flex gap-3">
                    <div className="img">
                      <img className="h-100" src="/hhhh.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="">
                          <h5>Home Rent</h5>
                        </div>
                        <div className="text-center">
                          <p>April 10, 2025</p>
                          <p>10:00 AM</p>
                        </div>
                      </div>
                      <div className="my-3">
                        <FaLocationDot />{" "}
                        <span>Terry Lane, Golden CO 80403</span>
                      </div>

                      <div className="d-flex mt-3 justify-content-between align-items-center gap-4 ">
                        <a
                          href="#"
                          className="tf-btn fw-6 cbtn flex-grow-1 py-2 bg-color-primary fw-6"
                        >
                          Reschedules
                        </a>
                        <a class="tf-btn bg-secondary cbtn flex-grow-1">
                          Cancle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="boxC cardc p-4 rounded-5 d-flex gap-3">
                    <div className="img">
                      <img className="h-100" src="/hhhh.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="">
                          <h5>Home Rent</h5>
                        </div>
                        <div className="text-center">
                          <p>April 10, 2025</p>
                          <p>10:00 AM</p>
                        </div>
                      </div>
                      <div className="my-3">
                        <FaLocationDot />{" "}
                        <span>Terry Lane, Golden CO 80403</span>
                      </div>

                      <div className="d-flex mt-3 justify-content-between align-items-center gap-4 ">
                        <a
                          href="#"
                          className="tf-btn cbtn fw-6 flex-grow-1 bg-color-primary fw-6"
                        >
                          Reschedules
                        </a>
                        <a class="tf-btn cbtn bg-secondary flex-grow-1">
                          Cancle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="boxC cardc p-4 rounded-5 d-flex gap-3">
                    <div className="img">
                      <img className="h-100" src="/hhhh.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="">
                          <h5>Home Rent</h5>
                        </div>
                        <div className="text-center">
                          <p>April 10, 2025</p>
                          <p>10:00 AM</p>
                        </div>
                      </div>
                      <div className="my-3">
                        <FaLocationDot />{" "}
                        <span>Terry Lane, Golden CO 80403</span>
                      </div>

                      <div className="d-flex mt-3 justify-content-between align-items-center gap-4 ">
                        <a
                          href="#"
                          className="tf-btn fw-6 cbtn flex-grow-1 py-2 bg-color-primary fw-6"
                        >
                          Reschedules
                        </a>
                        <a class="tf-btn bg-secondary cbtn flex-grow-1">
                          Cancle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="widget-box-2 mess-box mb-20">
              <h5 className="title">Recent Messages</h5>
              <ul className="list-mess">
                {mockMessages.map((item) => (
                  <li key={item.id} className="mess-item">
                    <div className="user-box">
                      <div className="avatar">
                        <img
                          alt="avt"
                          className="h-100 w-100 object-fit-cover"
                          src={item.avatar}
                        />
                      </div>
                      <div className="content">
                        <div className="name fw-6">{item.name}</div>
                        <span className="caption-2 text-variant-3">
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <p>{item.message}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widget-box-2 mess-box">
              <h5 className="title">Recent Reviews</h5>
              <ul className="list-mess">
                {mockReviews.map((review) => (
                  <li key={review.id} className="mess-item">
                    <div className="user-box">
                      <div className="avatar">
                        <img
                          alt="avt"
                          className="h-100 w-100 object-fit-cover"
                          src={review.avatar}
                        />
                      </div>
                      <div className="content">
                        <div className="name fw-6">{review.name}</div>
                        <span className="caption-2 text-variant-3">
                          {review.time}
                        </span>
                      </div>
                    </div>
                    <p>{review.message}</p>
                    <div className="ratings">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`icon-star ${
                            i < review.rating ? "filled" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tf-sidebar mt-5">
              <div className=" sidebar-ads  mb-30">
                <div className="image-wrap">
                  <img
                    className="lazyload object-fit-cover"
                    data-src="https://t3.ftcdn.net/jpg/09/10/81/36/360_F_910813623_hJ88Plc6DHXDSg8p2jALjMEWBHL0FWPh.jpg"
                    alt=""
                    src="https://t3.ftcdn.net/jpg/09/10/81/36/360_F_910813623_hJ88Plc6DHXDSg8p2jALjMEWBHL0FWPh.jpg"
                    width={400}
                    height={670}
                  />
                </div>
                <div className="logo relative z-5">
                  <img alt="" src="/lgo.png" />
                </div>
                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        We can help you find a local real estate agent
                      </a>
                    </h4>
                    <div className="text-addres">
                      <p>
                        Connect with a trusted agent who knows the market inside
                        out - whether you’re buying or selling.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center gap-4 ">
                    <a
                      href="#"
                      className="tf-btn fw-6 flex-grow-1 bg-color-primary fw-6"
                    >
                      Messages
                    </a>
                    <a class="tf-btn style-border flex-grow-1">Book Call</a>
                  </div>
                </div>
              </div>
              <div className="map">
                <h4 className="fs-2">Map View</h4>

                <div className="m">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340558.00429688476!2d-74.14430905755695!3d40.69728463436563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1746167546739!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    allowfullscreen=""
                    className="rounded-5"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            {/* .footer-dashboard */}
            <div className="footer-dashboard">
              <p>Copyright © {new Date().getFullYear()} Popty</p>
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
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
