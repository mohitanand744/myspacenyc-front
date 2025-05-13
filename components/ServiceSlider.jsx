"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Mock data with image URLs
const services = [
  {
    id: 1,
    type: "Moving",
    rating: 4.5,
    reviews: 355,
    price: 9540.99,
    category: "Recommended",
    image:
      "https://img.freepik.com/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40330.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    type: "Cleaning",
    rating: 4.5,
    reviews: 355,
    price: 9540.99,
    category: "Popular",
    image:
      "https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto,w_1200/services/homeguide/backgrounds/house-cleaning.jpg",
  },
  {
    id: 3,
    type: "Painting",
    rating: 4.8,
    reviews: 420,
    price: 7200.5,
    category: "Nearest",
    image:
      "https://5.imimg.com/data5/SE/YN/SA/SELLER-40841211/home-painting-services-500x500.jpg",
  },
  {
    id: 4,
    type: "Plumbing",
    rating: 4.3,
    reviews: 290,
    price: 6500.0,
    category: "Recommended",
    image:
      "https://urbansease.com/wp-content/uploads/2024/10/Plumber-service-near-you.jpg",
  },
  {
    id: 5,
    type: "Electrical",
    rating: 4.7,
    reviews: 380,
    price: 8200.75,
    category: "Popular",
    image:
      "https://media.istockphoto.com/id/1049775258/photo/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.jpg?s=612x612&w=0&k=20&c=stdWozouV2XsrHk2xXD3C31nT90BG7ydZvcpAn1Fx7I=",
  },
];

const ServiceSlider = () => {
  const [activeTab, setActiveTab] = useState("Recommended");

  const categories = ["Recommended", "Popular", "Nearest"];

  return (
    <div>
      {/* Category tabs */}
      <div className="d-flex mb-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-link fs-3 text-decoration-none me-4 ${
              activeTab === category ? "active text-warning" : "text-secondary"
            }`}
            style={{
              fontWeight: "500",
              padding: "0.5rem 0",
              borderBottom:
                activeTab === category
                  ? "2px solid #F9B015"
                  : "2px solid transparent",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onClick={() => setActiveTab(category)}
          >
            {category}
            {/* Optional animated underline (remove if not needed) */}
            {activeTab === category && (
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#F9B015",
                  transform: "scaleX(1)",
                  transformOrigin: "left center",
                  transition: "transform 0.3s ease",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Swiper slider with navigation */}
      <Swiper
        spaceBetween={20}
        breakpoints={{
          576: { slidesPerView: 2 },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper p-5"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              className="card serviceCard border rounded-5 border-warning w-100 h-100"
              style={{
                border: "none",
                overflow: "hidden",
              }}
            >
              <img
                src={service.image}
                alt={service.type}
                className="card-img-top p-3 rounded-5"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between gap-1 flex-wrap">
                  <h5 className="card-title">{service.type}</h5>
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-1">★</span>
                    <span className="me-1">{service.rating}</span>
                    <span style={{ color: "#6c757d" }}>
                      ({service.reviews} Reviews)
                    </span>
                  </div>
                </div>
                <h6 className="fw-bold fs-4 text-orange">
                  From $ {service.price}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="p-3 text-warning border border-warning swiper-button-next">
          <FaArrowRight />
        </div>
        <div className="p-3 text-warning border border-warning swiper-button-prev">
          <FaArrowLeft />
        </div>
      </Swiper>

      {/* Custom navigation arrows styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #0d6efd;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          position: absolute;
          top: 54%;
          transform: translateY(-50%);
          z-index: 10;
          border: 1.6px solid #fff;
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ServiceSlider;
