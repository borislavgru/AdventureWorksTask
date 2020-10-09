import { ProductSearchResultDto } from "../productApi/productApi";
import { ProductDto } from "../productApi/productDto";

const MOCK_PRODUCT_DTOS: ProductDto[] = [
  {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    productNumber: "FR-R92B-58",
    description: "Some description", // TODO: Description exists in response?
    makeFlag: true,
    finishedGoodsFlag: true,
    color: "Black",
    safetyStockLevel: 500,
    reorderPoint: 375,
    standardCost: 1059.31,
    listPrice: 1431.5,
    size: "58",
    sizeUnitMeasure: "m",
    weightUnitMeasure: "kg",
    weight: 2.24,
    daysToManufacture: 1,
    productLine: "R ",
    class: "H ",
    style: "U ",
    productSubcategory: "subcategory",
    productModel: "MK II",
    sellStartDate: "2002-06-01T00:00:00",
    sellEndDate: "0001-01-01T00:00:00",
    discontinuedDate: "0001-01-01T00:00:00",
  },
  {
    productID: 700,
    name: "PK Frame - Black, 23",
    productNumber: "TT-R92B-58",
    description: "Some description", // TODO: Description exists in response?
    makeFlag: true,
    finishedGoodsFlag: true,
    color: "Red",
    safetyStockLevel: 500,
    reorderPoint: 375,
    standardCost: 1059.31,
    listPrice: 1431.5,
    size: "58",
    sizeUnitMeasure: "m",
    weightUnitMeasure: "kg",
    weight: 2.24,
    daysToManufacture: 1,
    productLine: "R ",
    class: "H ",
    style: "U ",
    productSubcategory: "subcategory",
    productModel: "MK II",
    sellStartDate: "2002-06-01T00:00:00",
    sellEndDate: "0001-01-01T00:00:00",
    discontinuedDate: "0001-01-01T00:00:00",
  },
];

export const MOCK_PRODUCT_SEARCH_RESPONSE_DTO: ProductSearchResultDto = {
  products: MOCK_PRODUCT_DTOS,
  pageNumber: 1,
  pageSize: 5,
  totalResultsCount: 2,
};
