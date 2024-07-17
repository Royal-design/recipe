import axios from "axios";

const api = axios.create({
  baseURL: "https://forkify-api.herokuapp.com"
});
const delay = () => new Promise<void>((res) => setTimeout(() => res(), 1800));

const APIKEY = "0d52eb7d-bf0e-438c-a25e-e3a2fa6ace25";
export const endPoint = `/api/v2`;

export const getApi = async (url: string, query: string) => {
  await delay();
  const response = await api.get(
    `${url}/recipes?search=${query}&key=${APIKEY}`
  );
  return response.data.data.recipes;
};

export const getApibyId = async (url: string, id: string) => {
  await delay();
  const response = await api.get(`${url}/recipes/${id}?key=${APIKEY}`);
  return response.data.data.recipe;
};
