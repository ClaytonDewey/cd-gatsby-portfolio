import React from "react";
import nothingToSee from "../assets/images/nothing_to_see.gif";

const NotFoundPage = () => {
  return (
    <div>
      <div className="text-center mt-4">
        <p>The page you were looking for doesn't exist.</p>
        <p>You may have mistyped the address or the page may have moved.</p>
        <img src={nothingToSee} alt="404 Not Found" />
      </div>
    </div>
  );
};

export default NotFoundPage;
