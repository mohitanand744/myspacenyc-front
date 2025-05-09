import React from "react";

const RecentReviews = () => {
  const mockReviews = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Bessie Cooper",
      time: "3 days ago",
      message: "Maecenas eu lorem et urna accumsan vestibulum vel vitae magna.",
      rating: 5,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Smith",
      time: "1 week ago",
      message:
        "Excellent product! Very satisfied with the quality and service.",
      rating: 4,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Wilson",
      time: "2 days ago",
      message: "Good experience overall, but delivery could be faster.",
      rating: 3,
    },
  ];
  return (
    <div className="widget-box-2 mess-box">
      <h5 className="title">Recent Reviews</h5>
      <ul className="list-mess">
        {mockReviews.map((review) => (
          <li key={review.id} className="mess-item">
            <div className="user-box">
              <div className="avatar">
                <img
                  alt="avt"
                  className="h-100 w-100 object-fit-cover"
                  src={review.avatar}
                />
              </div>
              <div className="content">
                <div className="name fw-6">{review.name}</div>
                <span className="caption-2 text-variant-3">{review.time}</span>
              </div>
            </div>
            <p>{review.message}</p>
            <div className="ratings">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`icon-star ${i < review.rating ? "filled" : ""}`}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentReviews;
