import Link from "next/link";
import React, { useRef } from "react";

const PasswordResetOTP = () => {
  const otpInputs = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    // Only allow digits
    if (value && !/^\d+$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input if a digit is entered
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }

    // Move to previous input if backspace is pressed and current input is empty
    if (
      e.nativeEvent instanceof InputEvent &&
      e.nativeEvent.inputType === "deleteContentBackward" &&
      !value &&
      index > 0
    ) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input if left arrow or backspace is pressed and current input is empty
    if (
      (e.key === "ArrowLeft" ||
        (e.key === "Backspace" && !e.currentTarget.value)) &&
      index > 0
    ) {
      otpInputs.current[index - 1]?.focus();
    }
    // Move to next input if right arrow is pressed
    else if (e.key === "ArrowRight" && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="passwordResetOTPModal"
        tabIndex="-1"
        aria-labelledby="passwordResetOTPModalLabel"
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
                <i className="bi bi-shield-lock fs-1 text-primary"></i>
              </div>

              <h5 className="fw-bold title mb-2">Password Reset</h5>

              <p className="text-secondary mb-4">
                We sent a code to johndoe@gmail.com
              </p>

              <form
                className="form-account"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="box">
                  <fieldset className="box-fieldset text-center mb-4">
                    <div className="otp-input d-flex justify-content-center gap-2">
                      {[1, 2, 3, 4, 5, 6].map((digit, i) => (
                        <input
                          key={i}
                          ref={(el) => (otpInputs.current[i] = el)}
                          type="text"
                          className="form-control text-center"
                          maxLength={1}
                          style={{ width: "40px", height: "50px" }}
                          onChange={(e) => handleInputChange(i, e)}
                          onKeyDown={(e) => handleKeyDown(i, e)}
                          onFocus={(e) => e.target.select()}
                        />
                      ))}
                    </div>
                  </fieldset>
                </div>
              </form>

              <div className="d-flex mt-4 mb-3 gap-4 align-items-center justify-content-center">
                <Link
                  className="tf-btn bg-color-primary w-100"
                  href="#"
                  style={{ maxWidth: "200px" }}
                >
                  Continue
                </Link>

                <a
                  className="tf-btn style-border w-100 pd-23"
                  data-bs-toggle="modal"
                  href="#modalLogin"
                >
                  <i className="bi bi-arrow-left"></i> Back to login
                </a>
              </div>

              <div className="text-center mt-5">
                <a href="#" className="text-secondary small">
                  Didn't receive the email?{" "}
                  <span className="text-primary">Click to resend</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordResetOTP;
