import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div
        className="modal fade"
        id="forgotPasswordModal"
        tabindex="-1"
        aria-labelledby="forgotPasswordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 p-3">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="mb-3">
                <i className="bi bi-fingerprint fs-1 text-primary"></i>
              </div>

              <h5 className="fw-bold title mb-2">Forgot Password?</h5>

              <p className="text-secondary mb-4">
                Don't worry, we will send you reset instructions.
              </p>

              <form
                className="form-account"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="box">
                  <fieldset className="box-fieldset text-start mb-4">
                    <label htmlFor="pass" className="text-start">
                      Old Password
                    </label>
                    <div className="ip-field">
                      <input
                        type="text"
                        className="form-control"
                        id="pass"
                        placeholder="Your password"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset text-start mb-4">
                    <label htmlFor="pass" className="text-start">
                      New Password
                    </label>
                    <div className="ip-field">
                      <input
                        type="text"
                        className="form-control"
                        id="pass"
                        placeholder="Your password"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset text-start mb-4">
                    <label htmlFor="pass" className="text-start">
                      Confirm Password
                    </label>
                    <div className="ip-field">
                      <input
                        type="text"
                        className="form-control"
                        id="pass"
                        placeholder="Your password"
                      />
                    </div>
                  </fieldset>
                </div>
              </form>

              <div className="d-flex mt-5 align-items-center justify-content-center gap-4 mx-auto">
                <div className="flex-grow-1">
                  <Link
                    class="tf-btn bg-color-primary w-100"
                    href="#passwordResetOTPModal"
                    data-bs-toggle="modal"
                  >
                    {" "}
                    Reset Password
                  </Link>
                </div>

                <div className="flex-grow-1">
                  <a
                    class="tf-btn style-border w-100 pd-23"
                    data-bs-toggle="modal"
                    href="#modalLogin"
                  >
                    <i className="bi bi-arrow-left"></i> Back to login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
