"use client";
import React from "react";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const statusClasses = {
    Ongoing: "status-ongoing",
    Pending: "status-pending",
    Completed: "status-completed",
    Cancelled: "status-cancelled",
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-secondary" />);
    }

    return stars;
  };

  return (
    <div className="bg-C">
      <StatusFilter />
      <TaskCardComponent />
    </div>
  );
};

// Default props with mock data
export default TaskCard;

const StatusFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const statusFilters = ["All", "Ongoing", "Pending", "Completed", "Cancelled"];

  const statusColors = {
    All: "warning",
    Ongoing: "warning",
    Pending: "warning",
    Completed: "warning",
    Cancelled: "warning",
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setShowDropdown(false);
    // Here you would typically trigger a state update or API call to filter tasks
    console.log(`Filtering by: ${filter}`);
  };

  return (
    <div className="my-4">
      {/* Desktop View - Horizontal Filters */}
      <div className="d-none d-md-flex rounded-5 transition justify-content-between bg-light align-items-center gap-2 overflow-hidden">
        {statusFilters.map((filter) => (
          <button
            key={filter}
            className={`btn fs-4 rounded-5 transition p-3 py-2 ${
              activeFilter === filter ? `btn-warning text-white` : `text-secondary`
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Mobile View - Dropdown */}
      <div className="d-md-none">
        <div className="dropdown">
          <button
            className={`btn btn-warning dropdown-toggle`}
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            aria-expanded={showDropdown}
          >
            {activeFilter}
          </button>
          <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
            {statusFilters.map((filter) => (
              <li key={filter}>
                <button
                  className={`dropdown-item ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";

const TaskCardComponent = () => {
  // Mock data
  // Array of tasks
  const tasks = [
    {
      userName: "John Doe",
      taskTitle: "House helping and moving",
      price: 9540.99,
      date: "March 22, 2024",
      status: "Ongoing",
      rating: 4.5,
      reviews: 355,
      img: "https://img.freepik.com/premium-photo/close-up-headshot-portrait-smiling-young-caucasian-businessman-glasses-posing-office-profile-picture-happy-millennial-male-employee-worker-eyewear-workplace-employment-concept_656932-4946.jpg?semt=ais_hybrid&w=740",
    },
    {
      userName: "Jane Smith",
      taskTitle: "Gardening services",
      price: 3200.5,
      date: "April 15, 2024",
      status: "Completed",
      rating: 4.8,
      reviews: 210,
      img: "https://img.freepik.com/free-photo/portrait-successful-happy-business-woman_1262-2094.jpg?w=740&t=st=1715100000~exp=1715100600~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    },
    {
      userName: "Mike Johnson",
      taskTitle: "Plumbing repair",
      price: 1850.0,
      date: "May 5, 2024",
      status: "Pending",
      rating: 4.2,
      reviews: 120,
      img: "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man_23-2148911841.jpg?w=740&t=st=1715100000~exp=1715100600~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    },
    {
      userName: "Sarah Williams",
      taskTitle: "Home cleaning",
      price: 2750.75,
      date: "May 10, 2024",
      status: "Ongoing",
      rating: 4.7,
      reviews: 430,
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1715100000~exp=1715100600~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    },
  ];

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-muted" />);
    }

    return stars;
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="card border border-warning rounded-4 serviceCard shadow-sm mb-4"
        >
          <div className="card-body p-4">
            {/* User and Task Info */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <div className="d-flex gap-2">
                  <img
                    className="rounded-circle profileCircle"
                    src={task.img}
                    alt={task.userName}
                  />
                  <div className="">
                    <h5 className="card-title mb-1 fs-3 fw-bold">
                      {task.userName}
                    </h5>
                    <h6 className="card-subtitle fs-5 text-muted">
                      {task.taskTitle}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="text-orange fw-bold fs-4">
                $ {task.price.toLocaleString()}
              </div>
            </div>

            {/* Date and Status */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="">
                <span className="text-muted">{task.date}</span>
                <div className="d-flex align-items-center">
                  <div className="me-2">{renderStars(task.rating)}</div>
                  <div>
                    <span className="fw-bold">{task.rating}</span>
                    <span className="text-secondary ms-1">
                      ({task.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <span
                  className={`badge ${
                    task.status === "Ongoing"
                      ? "text-warning"
                      : task.status === "Completed"
                      ? "text-success"
                      : "text-secondary"
                  }`}
                >
                  {task.status}
                </span>
                <button className="btn btn-warning fs-5 text-white px-3 py-2">
                  <FaMapMarkerAlt className="me-1" /> Track
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
