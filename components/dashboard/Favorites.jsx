import React from "react";
import Link from "next/link";
import BannerC from "../bannerC";
import ActionDropDown from "../ActionDropDown";
import Pagination from "../Pagination/Pagination";
import {
  FaShareAlt,
  FaTrash,
  FaPhone,
  FaEnvelope,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";
import SortDropdown from "../Filters/SortDropdown";
export default function Favorites() {
  const properties5 = [
    {
      id: 1,
      title: "594 Bushwick Ave",
      address: "Bushwick, Brooklyn, NY 11208",
      price: 3799,
      netEffective: 3165.83,
      promotion: "0.5 months free",
      agent: {
        name: "Mr. Goldberg",
        phone: "646.854.3513",
        email: "Goldberg@myspacenyc.com",
      },
      unitType: {
        number: "Unit 606",
        beds: 2,
        baths: 1,
      },
      status: "Available",
      imageSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/634413511.jpg?k=4855dc29fa06ca722e68a28f5d66578a15eaccfa5e94df14acd518cb04e0f1c2&o=&hp=1",
    },
    {
      id: 2,
      title: "Sunset Park Luxury",
      address: "Sunset Park, Brooklyn, NY 11220",
      price: 4295,
      netEffective: 3850.0,
      promotion: "1 month free",
      agent: {
        name: "Ms. Rodriguez",
        phone: "718.555.1234",
        email: "rodriguez@myspacenyc.com",
      },
      unitType: {
        number: "Unit 1204",
        beds: 3,
        baths: 2,
      },
      status: "Available",
      imageSrc:
        "https://photos.zillowstatic.com/fp/f6e9e7d69602575d42cb0ac5ebd10781-cc_ft_960.jpg",
    },
    {
      id: 3,
      title: "DUMBO Heights",
      address: "DUMBO, Brooklyn, NY 11201",
      price: 5499,
      netEffective: 4999.0,
      promotion: "6 weeks free",
      agent: {
        name: "Mr. Chen",
        phone: "917.555.6789",
        email: "chen@myspacenyc.com",
      },
      unitType: {
        number: "PH 42",
        beds: 4,
        baths: 3,
      },
      status: "Pending",
      imageSrc:
        "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=2048&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/tluxp/image/db0db3e6-6c72-4096-a77b-da8f938b68b3&settings=default",
    },
    {
      id: 4,
      title: "Williamsburg Lofts",
      address: "Williamsburg, Brooklyn, NY 11211",
      price: 4795,
      netEffective: 4395.0,
      promotion: "0.75 months free",
      agent: {
        name: "Ms. Johnson",
        phone: "347.555.9012",
        email: "johnson@myspacenyc.com",
      },
      unitType: {
        number: "Loft 3B",
        beds: 1,
        baths: 1,
      },
      status: "Rented",
      imageSrc:
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898609363897598754/original/19c52e7a-4241-485d-a2aa-8d5cf7ef564a.jpeg?im_w=720",
    },
    {
      id: 5,
      title: "Greenpoint Vista",
      address: "Greenpoint, Brooklyn, NY 11222",
      price: 3995,
      netEffective: 3595.0,
      promotion: "3 weeks free",
      agent: {
        name: "Mr. Williams",
        phone: "929.555.3456",
        email: "williams@myspacenyc.com",
      },
      unitType: {
        number: "Unit 805",
        beds: 2,
        baths: 2,
      },
      status: "Available",
      imageSrc:
        "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
    },
  ];

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 wd-listing mt-5 mb-24">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">Saved Listing</h3>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SearchBar />
              <SortDropdown />
            </div>
          </div>
          <div className="wrap-table">
            <div className="wrap-listing table-responsive">
              <table className="table-save-search">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title / Address</th>
                    <th className="d-none">Price</th>
                    <th className="d-none">Agent Info</th>
                    <th>Unit Type</th>
                    <th>Status</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {properties5.map((property) => (
                    <tr key={property.id} className="file-delete">
                      <td className="">
                        <Link
                          href={`/property-detail-v1/${property.id}`}
                          className="w-100 h-100"
                        >
                          <div className="listing-box">
                            <div className="images">
                              <img
                                alt="images"
                                width={615}
                                height={405}
                                src={property.imageSrc}
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="property-title">{property.title}</div>
                        <div className="property-address">
                          <BiMap className="me-1 text-warning" />{" "}
                          {property.address}
                        </div>
                      </td>
                      <td className="d-none">
                        <div className="property-price">
                          <div>${property.price.toLocaleString()} / Month</div>
                          <small className="">
                            ${property.netEffective.toLocaleString()} - Net
                            Effective
                          </small>
                          <small className="promotion ms-1">
                            {property.promotion}
                          </small>
                        </div>
                      </td>
                      <td className="d-none">
                        <div className="agent-info">
                          <div className="agent-name">
                            {property.agent.name}
                          </div>
                          <div className="agent-phone">
                            <FaPhone className="me-1 text-warning" />{" "}
                            {property.agent.phone}
                          </div>
                          <div className="agent-email">
                            <FaEnvelope className="me-1 text-warning" />{" "}
                            {property.agent.email}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="unit-info">
                          <div>{property.unitType.number}</div>
                          <div className="unit-features">
                            <span className="me-2">
                              <FaBed className="me-1 text-warning" />{" "}
                              {property.unitType.beds} Beds
                            </span>
                            <span>
                              <FaBath className="me-1 text-warning" />{" "}
                              {property.unitType.baths} Baths
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <button
                          className={`status-badge w-100 rounded-2 ${property.status.toLowerCase()}`}
                        >
                          {property.status}
                        </button>
                      </td>
                      <td>
                        <a
                          className="tf-btn rounded-2 fs-5 style-border h-75 px-2"
                          data-bs-toggle="modal"
                          href="#modalLogin"
                        >
                          Contact Agent
                        </a>
                        <a
                          className="tf-btn rounded-2 fs-5 mt-3 bg-color-primary h-75 px-2"
                          data-bs-toggle="modal"
                          href="#modalLogin"
                        >
                          Schedule Visit 
                        </a>
                      </td>
                      <td className="">
                        <ActionDropDown />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
        </div>
        {/* .footer-dashboard */}
        <div className="footer-dashboard my-4">
          <p>Copyright © {new Date().getFullYear()} MY Space NYC</p>
          <ul className="list">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* .footer-dashboard */}
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
