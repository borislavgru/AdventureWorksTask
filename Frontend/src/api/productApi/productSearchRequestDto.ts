export interface ProductSearchRequestDto {
  name?: string;
  description?: string;
  sellStartDate?: string;
  pageSize: number;
  pageNumber: number;
}
