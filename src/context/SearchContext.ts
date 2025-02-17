"use client";
import { IStrengths, IPersonData } from "@/assets/models";
import { createContext, useContext } from "react";

interface searchContext {
  username: string;
  data: IStrengths[];
  personData: IPersonData;
  loading: boolean;
  handleUsername: (search: string) => void;
  fetchSkills: (username: string) => void;
}

export const searchContext = createContext<searchContext>({
  username: "torrenegra",
  handleUsername: (search: string) => {},
  data: [],
  personData: {
    name: "",
    pictureThumbnail: "",
  },
  loading: false,
  fetchSkills: (username: string) => Promise.resolve([]),
});

export const useSearchContext = () => useContext(searchContext);
