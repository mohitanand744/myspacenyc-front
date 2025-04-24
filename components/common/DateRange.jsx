"use client";

import { useRef, useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/plugins/rangePlugin";

// Import Bootstrap CSS in your layout or main CSS file instead
// import "bootstrap/dist/css/bootstrap.min.css";

export default function DateRangeFlatpickr() {
  const inputRef = useRef(null);
  const fpInstance = useRef(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [dynamicHeight, setDynamicHeight] = useState(false);

  useEffect(() => {
    if (inputRef.current && !fpInstance.current) {
      fpInstance.current = flatpickr(inputRef.current, {
        mode: "range",
        dateFormat: "Y-m-d",
        allowInput: true,
        static: true,
        monthSelectorType: "static",
        onChange: (selectedDates) => {
          setSelectedDates(selectedDates);
        },
        onClose: () => {
          inputRef.current.blur();
        },
      });
    }

    // Cleanup
    return () => {
      if (fpInstance.current) {
        fpInstance.current.destroy();
        fpInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{
        transition: "all 0.4s ease",
        height: !dynamicHeight ? "auto" : "370px",
      }}
      className="container d-flex flex-column gap-1 mt-5"
    >
      <label htmlFor="dateRange" className="form-label text-secondary fs-4">
        Select Date Range
      </label>
      <input
        id="dateRange"
        ref={inputRef}
        className="form-control searchbar bg-transparent"
        placeholder="Choose start and end date"
        type="text"
        readOnly
        onFocus={() => {
          setDynamicHeight(true);
        }}
      />

      {selectedDates.length > 0 && (
        <div className="mt-2 text-secondary fs-4">
          Selected:{" "}
          {selectedDates.map((d) => d.toLocaleDateString()).join(" - ")}
        </div>
      )}

      {selectedDates.length > 0 && (
        <div className="mt-5 d-flex justify-content-center w-100 text-secondary">
          <img
            width={240}
            height={240}
            className="mx-auto"
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--office-computer-digital-work-business-pack-illustrations-7265556.png?f=webp"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
