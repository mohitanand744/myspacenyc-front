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
import ReminderCard from "../Reminder";
import Notification from "../Notification";
import { counterData } from "@/data/counterData";
import CounterBox from "../CounterBox";
import FavLists from "../FavLists";
import RecentNotification from "../RecentNotification";
import RecentReviews from "../RecentReviews";
import ContactCard from "../ContactCard";
import DashboardFooter from "../DashboardFooter";

export default function Dashboard() {
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
              <ReminderCard />
              <Notification />
            </div>
          </div>
        </div>
        <div className="flat-counter-v2 tf-counter">
          {counterData.map((item) => (
            <CounterBox
              key={item.id}
              icon={item.icon}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-xl-8">
            <FavLists />
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
                          Cancel
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
                          Cancel
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
                          Cancel
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
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <RecentNotification />
            <RecentReviews />
            <ContactCard />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            {/* .footer-dashboard */}
            <DashboardFooter />
            {/* .footer-dashboard */}
          </div>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
