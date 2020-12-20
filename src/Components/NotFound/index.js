import React from "react";
import notfound from "./notfound.jpg";

import "../../Assets/css/NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
