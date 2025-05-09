import React from "react";

const RecentNotification = () => {
  const mockMessages = [
    {
      id: 1,
      avatar:
        "https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg",
      name: "Themesflat",
      time: "3 days ago",
      message: "Hello there! I was wondering about the new update features.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      time: "1 hour ago",
      message: "Hello there! I was wondering about the new update features.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Chen",
      time: "5 minutes ago",
      message:
        "The project is due next week. Let me know if you need any help.",
    },
  ];

  return (
    <div className="widget-box-2 mess-box mb-20">
      <h5 className="title">Recent Messages</h5>
      <ul className="list-mess">
        {mockMessages.map((item) => (
          <li key={item.id} className="mess-item">
            <div className="user-box">
              <div className="avatar">
                <img
                  alt="avt"
                  className="h-100 w-100 object-fit-cover"
                  src={item.avatar}
                />
              </div>
              <div className="content">
                <div className="name fw-6">{item.name}</div>
                <span className="caption-2 text-variant-3">{item.time}</span>
              </div>
            </div>
            <p>{item.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentNotification;
