import React from "react";

// gif
import Spinner from "../gif/spinner.gif";

export default function Loader() {
  return (
    <div>
      <img src={Spinner} alt="Loading" />
    </div>
  );
}
