// Dependencies
import React from "react";
import Header from "./components/Header";
import Clock from "./components/Clock";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Header></Header>
      <Clock />
    </div>
  );
};

export default App;
