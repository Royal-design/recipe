import { Navbar } from "../components/navbar/Navbar";
import { getApibyId } from "../api/GetMenu";
import { endPoint } from "../api/GetMenu";
import { UseMenuHook } from "../hooks/UseMenuHook";
import useSWR from "swr";
import { MainPageDetails } from "../components/mainPageComp/MainPageDetails";
export const Mainpage = () => {
  const { query, setQuery, data, id } = UseMenuHook();

  const {
    data: idData,
    isLoading: idLoading,
    error: idError
  } = useSWR([endPoint, id], ([endpoint, id]) => getApibyId(endpoint, id));

  if (idData) console.log(idData);

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} data={data} />
      <MainPageDetails data={idData} idLoading={idLoading} idError={idError} />
    </div>
  );
};
