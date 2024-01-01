import React from "react";
import ReactDOM from "react-dom/client";
import Boxfile from "./Boxfile";
import "./Apidata";
import { Apidata } from "./Apidata";
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <>
    {/* <Boxfile head1="vivek" detail1="this is my page" />
    <Boxfile head1="dev" detail1="this is you page" /> */}
    {Apidata.map(function (content, indexing) {
      return <Boxfile head1={content.head} detail1={content.detail} />;
    })}
  </>
);
