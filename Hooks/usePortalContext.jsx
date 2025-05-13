import { portalContext } from "@/context/Testing/PortalContext";
import React from "react";

const usePortalContext = () => {
  const { portal, setPortal } = React.useContext(portalContext);

  return { portal, setPortal };
};

export default usePortalContext;
