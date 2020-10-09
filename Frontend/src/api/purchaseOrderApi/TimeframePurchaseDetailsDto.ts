interface DailyLineTotalDto {
  date: string;
  lineTotal: number;
}

interface DailyProductUnitsSoldDto {
  date: string;
  unitNumber: number;
}

export interface TimeFramePurchaseDetailsDto {
  lineTotalsByDay: DailyLineTotalDto[];
  productUnitsSoldByDay: DailyProductUnitsSoldDto[];
  lineTotal: number;
  unitsSoldTotal: number;
  totalResultsCount: number;
}
