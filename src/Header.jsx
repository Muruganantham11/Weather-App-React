import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1 className="font-bold text-4xl underline pt-4 pb-5 mb-7 bg-blue-500 rounded-t-2xl text-center">{title}</h1>
      </header>
    </div>
  );
};

export default Header;
