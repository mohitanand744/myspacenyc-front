"use client";
import Image from "next/image";
import ModalVideo from "../common/ModalVideo";
import { useState } from "react";
export default function VideoReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">Video</div>
      <div className="widget-video style-1">
        <img
          className="lazyload"
          data-src="https://media.istockphoto.com/id/2046440581/video/couple-in-front-of-new-house.jpg?s=640x640&k=20&c=pRufpYBZxn8zmlN_GHLzejGQ3spwoQM3obo5U4hcQPo="
          alt=""
          src="https://media.istockphoto.com/id/2046440581/video/couple-in-front-of-new-house.jpg?s=640x640&k=20&c=pRufpYBZxn8zmlN_GHLzejGQ3spwoQM3obo5U4hcQPo="
          width={792}
          height={446}
        />
        <a onClick={() => setIsOpen(true)} className="popup-youtube">
          <i className="icon-play" />
        </a>
      </div>
      <ModalVideo
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        videoId={"XHOmBV4js_E"}
      />
    </>
  );
}
