import { useContext } from "react";
import GlobalContext from "../context/GlobalProvider";

const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

export default useGlobal;

