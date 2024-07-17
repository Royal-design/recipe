import useSWR from "swr";
import { createContext } from "react";
import { ReactElement } from "react";
import { endPoint } from "../api/GetMenu";
import { getApi } from "../api/GetMenu";
import { useState } from "react";

export type MenuItemType = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

type useMenuType = {
  isLoading: boolean;
  data: MenuItemType[];
  error: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  result: MenuItemType[];
  setResult: any;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const useMenuState: any = {};

export const MenuContext = createContext<useMenuType>(useMenuState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ContextProvider = ({ children }: ChildrenType) => {
  const [query, setQuery] = useState("");
  const [id, setId] = useState("");
  const [result, setResult] = useState([]);
  const { data, isLoading, error } = useSWR(
    [endPoint, query],
    ([endPoint, query]) => getApi(endPoint, query)
  );

  return (
    <MenuContext.Provider
      value={{
        isLoading,
        error,
        data,
        query,
        setQuery,
        result,
        setResult,
        id,
        setId
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
