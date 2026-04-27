import React, { createContext, useContext, useState } from "react";

const TransportContext = createContext();

export const TransportProvider = ({ children }) => {
  const [transportType, setTransportType] = useState("tram");

  return (
    <TransportContext.Provider
      value={{ transportType, setTransportType }}
    >
      {children}
    </TransportContext.Provider>
  );
};

export const useTransport = () => useContext(TransportContext);