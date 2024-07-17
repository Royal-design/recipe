import { useContext } from "react";
import { MenuContext } from "../context/ContextProvider";

export const UseMenuHook = () => {
  return useContext(MenuContext);
};
