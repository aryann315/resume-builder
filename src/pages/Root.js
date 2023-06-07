import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
