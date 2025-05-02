import React from "react";

const BannerC = () => {
  return (
    <div className="bannerContainer h-100 w-100 position-relative">
      <img
        className="rounded-5 h-100 object-fit-cover w-100"
        src="/bgM.jpg"
        alt=""
      />
      <div className="textContent  position-absolute">
        <h2 className="text-white">Enjoy Your Best Home </h2>
        <p className="text-white">
          Reference site about Lorem Ipsum, giving information <br /> on its
          origins,{" "}
        </p>

        <button className="btn bg-white fs-3 mt-2 mt-sm-5 text-secondary rounded-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default BannerC;
