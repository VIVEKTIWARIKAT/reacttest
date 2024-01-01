import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import Details from "./Details";

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <>
    <Heading head="Home" />
    <Details detail="this is a home page" />
  </>
);
