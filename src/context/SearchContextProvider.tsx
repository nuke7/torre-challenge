"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { searchContext } from "./SearchContext";
import { IStrengths, IPersonData } from "@/assets/models";

interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<IStrengths[]>([]);
  const [personData, setPersonData] = useState<IPersonData>({
    name: "Alexander Torrenegra",
    pictureThumbnail:
      "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg",
  });

  const fetchSkills = async (username: string = "torrenegra") => {
    const res = await fetch(`https://torre-backend-3eon.onrender.com/data/${username}`);
    const data = await res.json();
    let strengths: IStrengths[] = [];
    data.strengths.forEach((item: IStrengths) => strengths.push(item));
    setData(strengths);
    setPersonData(data.person);
  };

  useEffect(() => {
    fetchSkills(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const contextValue = {
    username,
    handleUsername,
  };

  return (
    <searchContext.Provider
      value={{ username, handleUsername, data, fetchSkills, personData }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;

