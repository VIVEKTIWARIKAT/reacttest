import React from "react";
import Heading from "./Heading";
import Details from "./Details";
const Boxfile = (props1) => {
  return (
    <>
      {/* {console.log(props1)} */}
      <Heading head={props1.head1} />
      <Details detail={props1.detail1} />
    </>
  );
};

export default Boxfile;
