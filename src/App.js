// App.js
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserListProfile from "./UserListProfile";
import UserDetailsProfile from "./UserDetailsProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListProfile />} />
        <Route path="/:username" element={<UserDetailsProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
