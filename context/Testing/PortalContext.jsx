"use client";

const { createContext, useContext, useState } = require("react");

export const portalContext = createContext({});

export const PortalProvider = ({ children }) => {
  const [portal, setPortal] = useState(
    localStorage.getItem("portal") || "user"
  );

  return (
    <portalContext.Provider value={{ portal, setPortal }}>
      {children}
    </portalContext.Provider>
  );
};
