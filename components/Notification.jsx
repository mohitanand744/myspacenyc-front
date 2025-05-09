import React from "react";
import { GoBell } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Notification = () => {
  return (
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
  );
};

export default Notification;
