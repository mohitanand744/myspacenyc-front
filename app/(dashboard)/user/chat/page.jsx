"use client";

import BannerC from "@/components/bannerC";
import SortDropdown from "@/components/Filters/SortDropdown";
import SearchBar from "@/components/SearchBar/SearchBar";
import React, { useRef, useState, useEffect } from "react";
import { FiReply, FiShare2, FiUserX, FiTrash2 } from "react-icons/fi";
import {
  BsThreeDotsVertical,
  BsTelephone,
  BsCameraVideo,
  BsSearch,
} from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { GoPin } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "active",
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "active",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    status: "offline",
    lastSeen: "2 hours ago",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    status: "active",
  },
  {
    id: 5,
    name: "Jessica Lee",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    status: "offline",
    lastSeen: "5 minutes ago",
  },
];

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    text: "Hey!",
    timestamp: "10:27am",
    isRead: true,
  },
  {
    id: 2,
    senderId: 0, // 0 represents current user
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    timestamp: "10:28am",
    isRead: true,
  },
  {
    id: 3,
    senderId: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    timestamp: "10:30am",
    isRead: true,
  },
  {
    id: 4,
    senderId: 1,
    text: "Can we meet tomorrow?",
    timestamp: "10:32am",
    isRead: false,
  },
];

const mockConversations = [
  {
    id: 1,
    user: mockUsers[0],
    lastMessage: "Can we meet tomorrow?",
    timestamp: "12:01 pm",
    unread: 5,
    isPinned: true,
    category: "primary",
  },
  {
    id: 2,
    user: mockUsers[1],
    lastMessage: "I've sent the documents",
    timestamp: "11:45 am",
    unread: false,
    isPinned: true,
  },
  {
    id: 3,
    user: mockUsers[2],
    lastMessage: "Meeting at 3pm",
    timestamp: "10:30 am",
    unread: 2,
    isPinned: true,
  },
  {
    id: 4,
    user: mockUsers[3],
    lastMessage: "Lorem Ipsum is simply dummy...",
    timestamp: "9:15 am",
    unread: false,
    category: "primary",
  },
  {
    id: 5,
    user: mockUsers[4],
    lastMessage: "Please review the proposal",
    timestamp: "8:30 am",
    unread: false,
  },
];

const currentUser = {
  id: 0,
  name: "You",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  status: "active",
};

const Page = () => {
  const [activeConversation, setActiveConversation] = React.useState(1);
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredConversations = mockConversations.filter((conv) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "read") return !conv.unread;
    if (activeCategory === "unread") return conv.unread;
    if (activeCategory === "primary") return conv.category === "primary";
    return true;
  });

  const pinnedConversations = filteredConversations.filter(
    (conv) => conv.isPinned
  );
  const todayConversations = filteredConversations.filter(
    (conv) => !conv.isPinned
  );

  const currentChatUser = mockUsers.find(
    (user) => user.id === activeConversation
  );
  const currentChatMessages = mockMessages.filter(
    (msg) => msg.senderId === activeConversation || msg.senderId === 0
  );

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh">
          <BannerC className="" />
        </div>
        <div className="widget-box-2 my-5 wd-listing">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-3">
              <h3 className="fs-1">Chat</h3>
              <SearchBar />
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SortDropdown />
            </div>
          </div>
          <div className="d-flex my-5">
            {/* Sidebar */}
            <div className="border-end p-3" style={{ width: "320px" }}>
              <div className="d-flex  justify-content-between align-items-center mb-3">
                <div className="fs-4 mb-4 ">
                  <button
                    className={`btn rounded-4 ${
                      activeCategory === "all" ? "btn-dark" : "btn-light"
                    } me-2 fs-4`}
                    onClick={() => setActiveCategory("all")}
                  >
                    All
                  </button>
                  <span
                    className={`me-2 ${
                      activeCategory === "unread" ? "text-primary fw-bold" : ""
                    }`}
                    onClick={() => setActiveCategory("unread")}
                    style={{ cursor: "pointer" }}
                  >
                    <FaCircle size={10} color="red" /> Unread
                  </span>
                  <span
                    className={`me-2 ${
                      activeCategory === "read" ? "text-primary fw-bold" : ""
                    }`}
                    onClick={() => setActiveCategory("read")}
                    style={{ cursor: "pointer" }}
                  >
                    <FaCircle size={10} color="green" /> Read
                  </span>
                  <span
                    className={`${
                      activeCategory === "primary" ? "text-primary fw-bold" : ""
                    }`}
                    onClick={() => setActiveCategory("primary")}
                    style={{ cursor: "pointer" }}
                  >
                    <FaCircle size={10} color="blue" /> Primary
                  </span>
                </div>
              </div>

              {pinnedConversations.length > 0 && (
                <>
                  <h6 className="text-secondary fs-4 mb-3">
                    <GoPin /> Pinned Conversations
                  </h6>
                  {pinnedConversations.map((conv) => (
                    <div
                      className={`d-flex transition align-items-center mb-3 p-4 rounded-4 ${
                        activeConversation === conv.id
                          ? "bg-active rounded"
                          : ""
                      }`}
                      key={conv.id}
                      onClick={() => setActiveConversation(conv.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={conv.user.avatar}
                        className="rounded-circle"
                        alt="User"
                        style={{
                          width: "45px",
                          height: "45px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ms-2 flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong
                            className={` ${
                              activeConversation === conv.id ? "text-white" : ""
                            }`}
                          >
                            {conv.user.name}
                          </strong>
                          <span
                            className={` ${
                              activeConversation === conv.id
                                ? "text-white"
                                : "text-secondary"
                            }`}
                            style={{ fontSize: "12px" }}
                          >
                            {conv.timestamp}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <small
                            className={` ${
                              activeConversation === conv.id
                                ? "text-white"
                                : "text-secondary"
                            }`}
                          >
                            {conv.lastMessage}
                          </small>
                          {conv.unread && (
                            <div className="unread">{conv.unread}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              <h6 className="text-secondary fs-4 my-4">Today</h6>
              {todayConversations.map((conv) => (
                <div
                  className={`d-flex transition align-items-center mb-3 p-4 rounded-4 ${
                    activeConversation === conv.id ? "bg-active rounded" : ""
                  }`}
                  key={conv.id}
                  onClick={() => setActiveConversation(conv.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={conv.user.avatar}
                    className="rounded-circle"
                    alt="User"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-2 flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong
                        className={` ${
                          activeConversation === conv.id
                            ? "text-white"
                            : "text-secondary"
                        }`}
                      >
                        {conv.user.name}
                      </strong>
                      <span
                        className={` ${
                          activeConversation === conv.id
                            ? "text-white"
                            : "text-secondary"
                        }`}
                        style={{ fontSize: "12px" }}
                      >
                        {conv.timestamp}
                      </span>
                    </div>
                    <small
                      className={` ${
                        activeConversation === conv.id
                          ? "text-white"
                          : "text-secondary"
                      }`}
                    >
                      {conv.lastMessage}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Panel */}
            <div className="flex-grow-1 d-flex flex-column">
              {/* Header */}
              <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                <div className="d-flex align-items-center">
                  <IoMdArrowBack className="me-3" size={20} />
                  <img
                    src={
                      currentChatUser?.avatar ||
                      "https://randomuser.me/api/portraits/women/44.jpg"
                    }
                    className="rounded-circle me-2"
                    alt="User"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <strong>{currentChatUser?.name || "Sarah Johnson"}</strong>
                    <br />
                    <small
                      className={
                        currentChatUser?.status === "active"
                          ? "text-success"
                          : "text-secondary"
                      }
                    >
                      {currentChatUser?.status === "active"
                        ? "Active"
                        : `Last seen ${
                            currentChatUser?.lastSeen || "2 hours ago"
                          }`}
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                 {/*  <BsTelephone size={18} />
                  <BsCameraVideo size={18} /> */}

                  <div className="position-relative">
                    {/* Dropdown toggle button */}
                    <button
                      className="btn btn-link p-0 border-0"
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <BsThreeDotsVertical size={20} className="text-secondary" />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`dropdown-menu ${isOpen ? "show" : ""}`}
                      style={{
                        width: "170px",
                        border: "1px solid rgba(0,0,0,0.1)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        padding: "0.5rem 0",
                      }}
                    >
                      <div className="dropdown-item d-flex align-items-center py-2">
                        
                        <span>Reply</span>
                      </div>
                      <div className="dropdown-item d-flex align-items-center py-2">
                        
                        <span>Forward</span>
                      </div>
                      <div className="dropdown-item d-flex align-items-center py-2">
                        
                        <span>Block</span>
                      </div>
                      <div className="dropdown-divider my-1"></div>
                      <div className="dropdown-item d-flex align-items-center py-2 text-danger">
                       
                        <span>Delete</span>
                      </div>
                    </div>

                    {/* Add hover effects */}
                    <style jsx>{`
                      .dropdown-item:hover {
                        background-color: #f8f9fa;
                      }
                      .dropdown-item:active {
                        background-color: #e9ecef;
                      }
                    `}</style>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                className="flex-grow-1 px-4 py-3"
                style={{ overflowY: "auto" }}
              >
                {currentChatMessages.map((message, index) => {
                  const showTimestamp =
                    index === 0 ||
                    (index > 0 &&
                      currentChatMessages[index - 1].timestamp !==
                        message.timestamp);

                  return (
                    <React.Fragment key={message.id}>
                      {showTimestamp && (
                        <div className="text-center text-secondary small mb-4">
                          Today {message.timestamp}
                        </div>
                      )}
                      <div
                        className={`d-flex mb-3 ${
                          message.senderId === 0 ? "justify-content-end" : ""
                        }`}
                      >
                        {message.senderId !== 0 && (
                          <img
                            src={
                              currentChatUser?.avatar ||
                              "https://randomuser.me/api/portraits/women/44.jpg"
                            }
                            className="rounded-circle me-2"
                            alt="User"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                          />
                        )}
                        <div
                          className={`border ${
                            message.senderId === 0
                              ? "bg-light text-secondary"
                              : "bg-primary text-white"
                          } rounded-4 px-3 py-2`}
                          style={{ maxWidth: "60%" }}
                        >
                          {message.text}
                          {!message.isRead && message.senderId === 0 && (
                            <FaCircle size={8} color="red" className="ms-2" />
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Footer Input */}
              <div className="p-3 border-top d-flex align-items-center">
                <input
                  type="text"
                  className="form-control text-secondary fs-4 h-100 rounded-2 me-2"
                  placeholder="Message"
                />
                <button className=" btn-light-warning rounded-circle">
                  <CiMicrophoneOn size={24} className="text-warning" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
