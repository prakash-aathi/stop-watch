import React from "react";
const Display = ({ timer }) => {
  const { hr, m, s, ms } = timer;
  return (
    <>
      <span>{hr >= 10 ? hr : "0" + hr}</span>:
      <span>{m >= 10 ? m : "0" + m}</span>:<span>{s >= 10 ? s : "0" + s}</span>:
      <span>{ms >= 10 ? ms : "0" + ms}</span>
    </>
  );
};

export default Display;
