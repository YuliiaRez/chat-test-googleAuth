import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage.js/Homepage";
import Login from "../../pages/Login/Login";
import Messanger from "../../pages/Messanger";
import { UserAuth } from "../../index";

function Routers() {
  const { user, logOut } = UserAuth();
  console.log("user", user);
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Messanger />} /> */}
        <Route path="/" element={<Homepage />} />

        {user && <Route path="/chats" element={<Messanger />} />}

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default Routers;
