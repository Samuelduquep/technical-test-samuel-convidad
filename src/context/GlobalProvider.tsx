import React, { useState, createContext, ReactNode } from "react";

type GlobalContextType = {
  titlePage: string;
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
  success: boolean,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
  activePage: string,
  setActivePage: React.Dispatch<React.SetStateAction<string>>
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalProviderProps = {
  children: ReactNode;
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [titlePage, setTitlePage] = useState<string>("Weather");
  const [success, setSuccess] = useState<boolean>(false)
  const [activePage, setActivePage] = useState<string>("")

  return (
    <GlobalContext.Provider
      value={{
        titlePage,
        setTitlePage,
        success,
        setSuccess,
        activePage,
        setActivePage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };

export default GlobalContext;
