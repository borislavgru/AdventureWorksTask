import { api } from "../api";
import { ProductDto } from "./productDto";
import { ProductSearchRequestDto } from "./productSearchRequestDto";

export interface ProductSearchResultDto {
  products: ProductDto[];
  pageSize: number;
  pageNumber: number;
  totalResultsCount: number;
}

const fetchProducts = (
  requestDto: ProductSearchRequestDto
): Promise<ProductSearchResultDto> => {
  return api
    .post<ProductSearchResultDto>("/products", requestDto)
    .then((response) => response.data); // TODO: Replace with network call here
};

export const productApi = {
  fetchProducts,
};
