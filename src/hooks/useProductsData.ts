import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ProductResponse } from "../interfaces/product-data";

const fetchData = async (search: string = ""): Promise<ProductResponse> => {

  if (!search){
    return {results: []} as ProductResponse;
  }

  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;
  const response = await axios.get<ProductResponse>(API_URL);

  return response?.data;
};

export const useProductsData = (
  search?: string,
): UseQueryResult<ProductResponse, Error> => {
  return useQuery<ProductResponse, Error>({
    queryFn: () => fetchData(search ?? ""),
    queryKey: ["product-data", search ?? ""],
    enabled: !!search,
  });
};
