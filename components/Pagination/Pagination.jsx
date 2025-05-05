import React from "react";

const Pagination = () => {
  return (
    <div className="wrap-pagination">
      <p className="text-1">Showing 1-8 of 42 results.</p>
      <ul className="wg-pagination justify-center">
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
          <a href="#">20</a>
        </li>
        <li className="arrow">
          <a href="#">
            <i className="icon-arrow-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
