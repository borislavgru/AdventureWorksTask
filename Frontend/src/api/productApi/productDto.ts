export interface ProductDto {
  productID: number;
  name: string;
  productNumber: string;
  makeFlag: boolean;
  finishedGoodsFlag: boolean;
  color: string;
  safetyStockLevel: number;
  description: string; // TODO: Description missing?
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
  sellStartDate: string;
  sellEndDate: string;
  discontinuedDate: string;
}
