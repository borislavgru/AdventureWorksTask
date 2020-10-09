import { productApi } from "../../api/productApi/productApi";
import { ProductDto } from "../../api/productApi/productDto";

export interface Product {
  productID: number;
  name: string;
  productNumber: string;
  makeFlag: boolean;
  finishedGoodsFlag: boolean;
  color: string;
  safetyStockLevel: number;
  description: string;
  reorderPoint: number;
  standardCost: number;
  listPrice: number;
  size: string;
  sizeUnitMeasure: string;
  weightUnitMeasure: string;
  weight: number;
  daysToManufacture: number;
  productLine: string;
  class: string;
  style: string;
  productSubcategory: string;
  productModel: string;
  sellStartDate: Date;
  sellEndDate: Date;
  discontinuedDate: string;
}

const productDtoToProduct = (productDto: ProductDto): Product => {
  return {
    ...productDto,
    sellStartDate: new Date(productDto.sellStartDate),
    sellEndDate: new Date(productDto.sellEndDate),
  };
};

interface ProductSearchParams {
  name?: string;
  description?: string;
  sellStartDate?: Date;
  pageSize: number;
  pageNumber: number;
}

export interface ProductSearchResult {
  products: Product[];
  totalResultsCount: number;
}

const getProducts = ({
  description,
  name,
  sellStartDate,
  pageSize,
  pageNumber,
}: ProductSearchParams): Promise<ProductSearchResult> => {
  return productApi
    .fetchProducts({
      description,
      name,
      sellStartDate: sellStartDate?.toISOString(),
      pageSize,
      pageNumber,
    })
    .then((searchResultDto) => ({
      products: searchResultDto.products.map(productDtoToProduct),
      totalResultsCount: searchResultDto.totalResultsCount,
    }));
};

export const productsRepository = {
  getProducts,
};
