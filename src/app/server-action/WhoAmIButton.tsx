"use client";

import React, { useState } from "react";

interface IProps {
  children: React.ReactNode;
  whoAmIAction: () => Promise<string>;
}

const WhoAmIButton = ({ children, whoAmIAction }: IProps): JSX.Element => {
  const [name, setName] = useState<string>("");
  const handleClick = async () => {
    setName("loading...");
    const response = await whoAmIAction();
    setName(response);
  };

  return (
    <div className="h-[80vh] flex flex-col gap-2 justify-center items-center">
      <button onClick={handleClick} className="bg-blue-500 rounded px-2 py-1">
        {children}
      </button>

      {name && <p>you are {name}</p>}
    </div>
  );
};

export default WhoAmIButton;
