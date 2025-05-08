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
                      src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const FileUploadComponent = () => {
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
      className="border border-primary d-flex justify-content-center gap-4 align-items-center border-doted p-3 rounded-4"
      style={{ width: "400px", margin: "20px auto" }}
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
