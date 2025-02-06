"use client";

import { useContext } from "react";

import { AppContext } from "@/context/appContext";

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error("Error in useAppContext");
  }

  return ctx;
};
