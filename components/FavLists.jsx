import React from "react";
import ActionDropDown from "./ActionDropDown";
import Link from "next/link";
import { properties5 } from "@/data/properties";

const FavLists = () => {
  return (
    <div className="widget-box-2 wd-listing mb-24">
      <h3 className="title">My Favorites</h3>
      <div className="wrap-table">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Listing</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {properties5.map((listing) => (
                <tr key={listing.id} className="file-delete">
                  <td>
                    <div className="listing-box">
                      <div className="images">
                        <img
                          alt="images"
                          width={615}
                          height={405}
                          src={listing.imageSrc}
                        />
                      </div>
                      <div className="content">
                        <div className="title">
                          <Link
                            href={`/property-detail-v1/${listing.id}`}
                            className="link"
                          >
                            {listing.title}
                          </Link>
                        </div>
                        <div className="text-date">
                          Posting date: {listing.postingDate}
                        </div>
                        <div className="text-btn text-color-primary">
                          {listing.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-success">{listing.expiryDate}</span>
                  </td>
                  <td>
                    <ActionDropDown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="wg-pagination">
          <li className="arrow">
            <a href="#">
              <i className="icon-arrow-left" />
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li className="arrow">
            <a href="#">
              <i className="icon-arrow-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FavLists;
