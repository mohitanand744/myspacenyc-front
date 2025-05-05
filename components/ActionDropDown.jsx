"use client";
import React from "react";
import { motion } from "framer-motion";
import { CiMenuKebab } from "react-icons/ci";

const ActionDropDown = () => {
  return (
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
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
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
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
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
          <a className="dropdown-item d-flex align-items-center gap-2 ">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6L12 2L8 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Share
          </a>
        </motion.li>
        <motion.li>
          <a className="dropdown-item d-flex align-items-center gap-2 text-danger">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
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
  );
};

export default ActionDropDown;
