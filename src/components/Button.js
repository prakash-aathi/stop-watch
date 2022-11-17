import React from "react";
const Button = ({ value, action }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="mx-2 hover:bg-blue-800 bg-blue-600 mt-4 text-3xl rounded text-white  px-8"
    >
      {value}
    </button>
  );
};
export default Button;
