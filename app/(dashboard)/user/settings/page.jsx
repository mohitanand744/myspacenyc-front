"use client";
import BannerC from "@/components/bannerC";
import SearchBar from "@/components/SearchBar/SearchBar";
import React, { useState, useRef } from "react";

const page = () => {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 wd-listing mt-5 mb-24">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">Account Settings</h3>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SearchBar />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="profileC">
                    <img
                      className="rounded-circle borderC p-1"
                      src="https://marketplace.canva.com/EAGQkW8-Ji0/2/0/1600w/canva-yellow-and-black-simple-professional-linkedin-profile-picture-hU4yztidCUE.jpg"
                      alt=""
                    />
                  </div>
                  <FileUploadComponent />
                </div>

                <div className="fs-3 fw-bold text-secondary">Edit & Update</div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div class="">
                <div class=" text-white">
                  <h4 class="mb-5">Information</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group mb-3">
                      <label for="name" class="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="email" class="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter Email"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="phone" class="form-label">
                        Phone No*
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="Enter Phone Number"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="password" class="form-label">
                        Password*
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter Password"
                      />
                      <div class="mt-2">
                        <a href="#" class="text-decoration-none">
                          Want to change the password? Click here
                        </a>
                      </div>
                    </div>

                    <div class="">
                      <a
                        href="#"
                        class="px-5 fw-6 tf-btn rounded-4 flex-grow-1 bg-color-primary fw-6"
                      >
                        Save
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div class="mt-5">
                <div class="">
                  <h4 class="mb-5">Change Password</h4>
                </div>
                <div class="">
                  <form>
                    <div class="form-group mb-3">
                      <label for="oldPassword" class="form-label">
                        Old Password*
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="oldPassword"
                        placeholder="Enter Password"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="newPassword" class="form-label">
                        New Password*
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="newPassword"
                        placeholder="Enter Password"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="confirmPassword" class="form-label">
                        Confirm Password*
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="confirmPassword"
                        placeholder="Enter Password"
                      />
                    </div>

                    <div class="">
                      <a
                        href="#"
                        class="px-5 fw-6 tf-btn rounded-4 flex-grow-1 bg-color-primary fw-6"
                      >
                        Update Password
                      </a>
                    </div>
                  </form>
                </div>
                <div
                  class="mt-5"
                  style={{
                    maxWidth: "300px",
                  }}
                >
                  <div class=" text-white">
                    <h4 class="mb-0">Account Delete</h4>
                  </div>
                  <div class="">
                    <p class="lead fs-4 my-4">
                      Are you sure you want to delete your account? All data
                      will be lost permanently.
                    </p>

                    <div class="mt-4 gap-2 d-flex ">
                      <a
                        href="#"
                        class="p-3 text-white text-center rounded-4 flex-grow-1 bg-danger fw-6"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <SavedSearchPreferences />

              <NeighbourhoodSelector />

              <KycVerification />

              <NotificationPreferences />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const FileUploadComponent = ({ classNameC, ...props }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit");
        return;
      }

      setSelectedFile(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    fileInputRef.current.value = "";
  };

  const handleEditUpdate = () => {
    // Implement your edit & update logic here
    if (selectedFile) {
      alert(`File "${selectedFile.name}" would be updated here`);
    } else {
      alert("Please select a file first");
    }
  };

  return (
    <div
      className={`border border-primary d-flex justify-content-center gap-4 align-items-center border-doted p-3 rounded-4 ${classNameC}`}
      style={{ width: classNameC ? "100%" : "400px", margin: "20px auto" }}
    >
      <div>
        <img width="70px" src="upload.png" alt="" />
      </div>
      <div className="mt-5">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <a class="tf-btn style-border pd-23" onClick={handleChooseFile}>
            {" "}
            Choose File
          </a>

          <a
            className={`tf-btn bg-secondary pd-23 ${
              !selectedFile ? "d-none" : ""
            }`}
            onClick={handleRemoveFile}
          >
            Remove
          </a>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#999",
            marginBottom: "20px",
          }}
        >
          (Only max upto 5 MB)
        </p>
      </div>
    </div>
  );
};

const SavedSearchPreferences = () => {
  const [budget, setBudget] = useState(1000);
  const budgetPresets = [10, 1000, 2000, 4543];
  const minBudget = 10;
  const maxBudget = 4543;

  const handleSliderChange = (e) => {
    setBudget(parseInt(e.target.value));
  };

  const handlePresetClick = (value) => {
    setBudget(value);
  };

  const handleReset = () => {
    setBudget(1000); // Reset to default value
  };

  const percentage = ((budget - minBudget) / (maxBudget - minBudget)) * 100;

  return (
    <div className="">
      <div className="">
        <h4 className="mb-4">Saved Search Preferences</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group mb-4">
            <label className="form-label fw-bold">Budget range</label>

            {/* Range slider */}
            <div className="mt-4 mb-3">
              <div className="d-flex fs-4 justify-content-between mb-2">
                <span>$10</span>
                <span>$4543</span>
              </div>

              <input
                type="range"
                className="form-range custom-slider fs-4"
                min={minBudget}
                max={maxBudget}
                step="10"
                value={budget}
                onChange={handleSliderChange}
                id="budgetRange"
                style={{
                  "--track-percentage": `${percentage}%`,
                }}
              />
              <div className="d-flex fs-4 justify-content-between mt-1">
                <p>$1000</p>
                <p>$2000</p>
              </div>
              <div className="text-center mt-2">
                <small className="text-secondary fs-4">
                  Selected: ${minBudget} - ${budget}
                </small>
              </div>
            </div>

            {/* Preset buttons */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {budgetPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`btn fs-4 btn-sm rounded-4 px-4 ${
                    budget === preset
                      ? "btn-warning text-white"
                      : "btn-outline-warning"
                  }`}
                  onClick={() => handlePresetClick(preset)}
                >
                  ${preset}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <a
              href="#"
              class="px-5 fw-6 tf-btn rounded-4 bg-color-primary fw-6"
            >
              Done
            </a>
            <a class="tf-btn style-border pd-23" onClick={handleReset}>
              Reset
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

const neighbourhoodsList = [
  "New York",
  "Midwood, Brooklyn",
  "Manhattan Beach, Brooklyn",
  "Park Slope, Brooklyn",
  "Prospect Park, Brooklyn",
  "Pratt Institute, Brooklyn",
];

const NeighbourhoodSelector = () => {
  const [selected, setSelected] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (neighbourhood) => {
    if (!selected.includes(neighbourhood)) {
      setSelected([...selected, neighbourhood]);
    }
  };

  const handleRemove = (neighbourhood) => {
    setSelected(selected.filter((item) => item !== neighbourhood));
  };

  const handleReset = () => {
    setSelected([]);
  };

  const handleAccordionToggle = () => {
    setActiveKey(activeKey === "0" ? null : "0");
  };

  return (
    <div className="mt-4">
      <h5 className="mb-3">Neighbourhoods</h5>

      <div className="accordion mb-3" id="neighbourhoodAccordion">
        <div className="accordion-item rounded-4">
          <h2 className="accordion-header rounded-4" id="headingOne">
            <button
              className={`accordion-button rounded-4 fs-4 ${
                activeKey !== "0" ? "collapsed" : ""
              }`}
              type="button"
              onClick={handleAccordionToggle}
            >
              Neighbourhoods
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              activeKey === "0" ? "show" : ""
            }`}
            aria-labelledby="headingOne"
            data-bs-parent="#neighbourhoodAccordion"
          >
            <div className="accordion-body">
              <div className="position-relative mb-4">
                <SearchBar />
              </div>
              <div style={{ maxHeight: 200, overflowY: "auto" }}>
                {neighbourhoodsList.map((item, index) => (
                  <div className="form-check d-flex gap-2 mb-1" key={index}>
                    <input
                      className="custom-rounded-checkbox"
                      type="checkbox"
                      checked={selected.includes(item)}
                      onChange={() => handleSelect(item)}
                      onClick={() => handleRemove(item)}
                      id={`neigh-${index}`}
                    />
                    <label
                      className="form-check-label text-secondary fs-4"
                      htmlFor={`neigh-${index}`}
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected tags */}
      {selected.length > 0 && (
        <div className="d-flex flex-wrap border p-4 rounded-4 gap-2 mt-3 mb-3">
          {selected.map((item, idx) => (
            <div
              key={idx}
              className="badge rounded-pill bg-transparent border text-secondary d-flex align-items-center px-3"
            >
              {item}
              <button
                type="button"
                className="btn-close text-secondary  ms-2"
                aria-label="Remove"
                onClick={() => handleRemove(item)}
                style={{ filter: "invert(1)", fontSize: "1.4rem" }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}

      <div className="d-flex justify-content-end gap-3 mt-4">
        <a href="#" class="px-5 fw-6 tf-btn rounded-4 bg-color-primary fw-6">
          Done
        </a>
        <a class="tf-btn style-border pd-23" onClick={handleReset}>
          Reset
        </a>
      </div>
    </div>
  );
};

const KycVerification = () => {
  return (
    <div className="mt-4">
      <h5 className="mb-4">KYC Verification</h5>

      <div className="mt-4">
        <div className="fs-2 fw-semibold">Status: ❌ Not Submitted</div>
        <FileUploadComponent classNameC="w-100" />
        <p className="fs-4 text-secondary">
          “Upload government-issued ID to verify”
        </p>
      </div>
    </div>
  );
};

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    push: false,
  });

  const handleToggle = (type) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="notification-container">
      <h2 className="title">Communication Preferences</h2>

      {["Email", "SMS", "Push"].map((type) => (
        <div key={type} className="notification-row">
          <span className="label">{type} notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences[type]}
              onChange={() => handleToggle(type)}
            />
            <span className="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
};
