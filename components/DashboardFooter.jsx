import React from "react";

const DashboardFooter = () => {
  return (
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
  );
};

export default DashboardFooter;
