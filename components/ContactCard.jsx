import React from "react";

const ContactCard = () => {
  return (
    <div className="tf-sidebar mt-5">
      <div className=" sidebar-ads  mb-30">
        <div className="image-wrap">
          <img
            className="lazyload object-fit-cover"
            data-src="https://t3.ftcdn.net/jpg/09/10/81/36/360_F_910813623_hJ88Plc6DHXDSg8p2jALjMEWBHL0FWPh.jpg"
            alt=""
            src="https://t3.ftcdn.net/jpg/09/10/81/36/360_F_910813623_hJ88Plc6DHXDSg8p2jALjMEWBHL0FWPh.jpg"
            width={400}
            height={670}
          />
        </div>
        <div className="logo relative z-5">
          <img alt="" src="/lgo.png" />
        </div>
        <div className="box-ads relative z-5">
          <div className="content">
            <h4 className="title">
              <a href="#">We can help you find a local real estate agent</a>
            </h4>
            <div className="text-addres">
              <p>
                Connect with a trusted agent who knows the market inside out -
                whether you’re buying or selling.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center gap-4 ">
            <a
              href="#"
              className=" fw-6 tf-btn flex-grow-1 bg-color-primary fw-6"
            >
              Messages
            </a>
            <a className="tf-btn style-border flex-grow-1">Book Call</a>
          </div>
        </div>
      </div>
      <div className="map">
        <h4 className="fs-2">Map View</h4>

        <div className="m">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340558.00429688476!2d-74.14430905755695!3d40.69728463436563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1746167546739!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen=""
            className="rounded-5"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
