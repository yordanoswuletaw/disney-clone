import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { selectRoute } from "./features/viewer/viewerSlice";
import { selectUserName } from "./features/user/userSlice";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  const route = useSelector(selectRoute);
  const name = useSelector(selectUserName);
  console.log(route);
  return (
    <div>
      <Header />
      {route === "/" && name ? (
        <Home />
      ) : route === "/detail" ? (
        <Detail />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
