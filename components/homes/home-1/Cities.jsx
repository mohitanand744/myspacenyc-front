import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { locations3 } from "@/data/locations";
export default function Cities() {
  return (
    <section className="section-neighborhoods ">
      <div className="tf-container pt-5 full">
        <div className="col-12">
          <div className="heading-section text-center mb-48">
            <h2 className="title split-text effect-right">
              <SplitTextAnimation text="Explore The Neighborhoods" />
            </h2>
            <p className="text-1 splitep">
              Find your dream apartment with our listing
            </p>
          </div>
          <div className="wrap-neighborhoods mt-5">
            {locations3.map((location) => (
              <div
                key={location.id}
                className={`box-location hover-img item-${location.id}`}
              >
                <div className="image-wrap h-100">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={location.imageSrc}
                      alt={location.alt}
                      src={location.imageSrc}
                      width={location.width}
                      height={location.height}
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text_white">{location.city}</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text_white"
                  >
                    {location.properties} <i className="icon-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
