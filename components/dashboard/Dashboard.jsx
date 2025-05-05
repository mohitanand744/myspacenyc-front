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
import ActionDropDown from "../ActionDropDown";

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
                <div className="d-flex w-100 justify-content-between align-items-center mb-2">
                  <h6 className="card-title mb-0 text-uppercase fw-bold">
                    Reminders
                  </h6>
                  <div className="badge text-secondary fs-3">🕒 09:00</div>
                </div>

                <div className="card reminder-card w-100 shadow-sm h-100 border-0">
                  <div className="card-body p-3">
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
                        <div className="badgec text-warning">+10</div>
                      </div>
                    </div>
                    <div className="img">
                      <img className="rounded-5 w-100" src="/bgb.png" alt="" />
                    </div>
                    <div className="reminder-item d-flex justify-content-between align-items-center">
                      <div className="time-box me-3 text-center">
                        <div className="fw-bold">09:00 AM</div>
                      </div>
                      <div className="fs-4 text-secondary">Big Apartment</div>
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
                            <ActionDropDown />
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
                        <button
                          href="#"
                          className=" cbtn bg-warning rounded-3 fw-6 flex-grow-1 fw-6"
                        >
                          Reschedules
                        </button>
                        <button className=" cbtn rounded-3 bg-secondary flex-grow-1">
                          Cancle
                        </button>
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
                        <button
                          href="#"
                          className=" fw-6 cbtn bg-warning rounded-3 flex-grow-1 py-2 bg-color-primary fw-6"
                        >
                          Reschedules
                        </button>
                        <button className=" bg-secondary cbtn  rounded-3 flex-grow-1">
                          Cancle
                        </button>
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
                        <button
                          href="#"
                          className=" cbtn bg-warning rounded-3 fw-6 flex-grow-1 bg-color-primary fw-6"
                        >
                          Reschedules
                        </button>
                        <button className=" cbtn rounded-3 bg-secondary flex-grow-1">
                          Cancle
                        </button>
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
                        <button
                          href="#"
                          className=" fw-6 cbtn bg-warning rounded-3 flex-grow-1 py-2 bg-color-primary fw-6"
                        >
                          Reschedules
                        </button>
                        <button className=" bg-secondary cbtn rounded-3 flex-grow-1">
                          Cancle
                        </button>
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
                      className=" fw-6 tf-btn flex-grow-1 bg-color-primary fw-6"
                    >
                      Messages
                    </a>
                    <a className="tf-btn style-border flex-grow-1">Book Call</a>
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
                    allowFullScreen=""
                    className="rounded-5"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
