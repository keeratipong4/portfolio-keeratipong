// import React from "react";
import ActiveSectionContextProvider from "./active-section";
import ThemeContextProvider from "./ThemeContext";
// import { Analytics } from "@vercel/analytics/react";
// import { Toaster } from "react-hot-toast";
// import dynamic from "next/dynamic";

export default function Providers({ children }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {/* <Analytics /> */}
        {/* <Toaster /> */}
        {children}
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
