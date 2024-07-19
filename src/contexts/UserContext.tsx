import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface User {
  user: {
    email: string;
    accessToken: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{ email: string; accessToken: string }>
  >;
}

export const UserContext = createContext<User | null>(null);

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({ email: "", accessToken: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
