/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchContext } from "@/context/SearchContext";
import { useState } from "react";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const { username, handleUsername, fetchSkills } = useSearchContext();

  return (
    <div className="flex justify-between px-4 py-2 shadow-md">
      <div className="flex gap-4">
        <p>hamburger placeholder</p>
        <div className="flex">
          <p>torre</p>
          <p>.co</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col md:flex-row items-end md:items-center">
          {showInput && (
            <input
              type="text"
              placeholder="username"
              className="text-black"
              value={username}
              onChange={(e) => handleUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchSkills(username);
                }
              }}
            />
          )}
          <button
            className="bg-black text-white px-4 py-2 mx-1 rounded-md"
            onClick={() => {
              setShowInput(!showInput);
            }}
          >
            {showInput ? "X" : "SEARCH"}
          </button>
        </div>
        <p>SIGN IN</p>
      </div>
    </div>
  );
};

export default Navbar;

