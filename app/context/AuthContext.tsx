"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IAuthContextProps {
  children: ReactNode;
}

const AuthContext = ({ children }: IAuthContextProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
