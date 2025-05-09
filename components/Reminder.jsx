import React from "react";
import { GoBell } from "react-icons/go";


const ReminderCard = () => {
  return (
    <div className="h-100 flex-grow-1">
      <div className="d-flex w-100 justify-content-between align-items-center mb-2">
        <h6 className="card-title mb-0 text-uppercase fw-bold">Reminders</h6>
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
  );
};

export default ReminderCard;
