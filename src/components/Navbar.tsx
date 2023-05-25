"use client";
import { useRef } from "react";

const Navbar = () => {
  const ref = useRef<HTMLInputElement>(null);

  const toggleFunction = () => {
    const x: HTMLInputElement = ref.current!;
      x.style.display = "flex";
  };
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex gap-4">
        <p>hamburger placeholder</p>
        <div className="flex">
          <p>torre</p>
          <p>.co</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-end gap-1">
          <input id="searchInput" ref={ref} type="text" placeholder="username" className="text-black" />
          <button onClick={toggleFunction}>search</button>
        </div>
        <p>SIGN IN</p>
      </div>
    </div>
  );
};

export default Navbar;
