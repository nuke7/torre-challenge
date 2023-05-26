"use client";
import { BioData, IStrengths } from "@/assets/models";
import { createContext, useContext } from "react";

interface searchContext {
  username: string;
  data: IStrengths[];
  handleUsername: (search: string) => void;
  fetchSkills: (username: string) => void;
}

export const searchContext = createContext<searchContext>({
  username: "torrenegra",
  handleUsername: (search: string) => {},
  data: [],
  fetchSkills: (username: string) => Promise.resolve([]),
});

export const useSearchContext = () => useContext(searchContext);
