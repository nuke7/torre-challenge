"use client";

import { useSearchContext } from "@/context/SearchContext";

const Title = () => {
  const data = useSearchContext();
  
  return (
    <div className="flex flex-col py-10 items-center gap-2">
      <div className="hex">
        <div className="flex hex-background items-center align-center justify-center">
          <img src="" alt="picture thumbnail" />
        </div>
      </div>
      <h3 className="text-xl">Title placeholder</h3>
    </div>
  );
};

export default Title;
