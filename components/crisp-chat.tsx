"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("15bce963-cd6c-4c4a-a194-d7003a392f6e");
  }, []);

  return null;
};
