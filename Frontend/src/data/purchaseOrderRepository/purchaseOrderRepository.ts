import { purchaseOrderApi } from "../../api/purchaseOrderApi/purchaseOrderApi";
import { TimeFramePurchaseDetailsDto } from "../../api/purchaseOrderApi/TimeframePurchaseDetailsDto";

export interface DateDetail {
  date: Date;
  unitNumber: number;
  lineTotal: number;
}

export interface TimeFramePurchaseDetails {
  dateDetails: DateDetail[];
  lineTotal: number;
  unitsSoldTotal: number;
  totalResultsCount: number;
}

const timeframePurchaseDetailsDtoToTimeframePurchaseDetails = (
  timeframePurchaseDetails: TimeFramePurchaseDetailsDto
): TimeFramePurchaseDetails => {
  console.log(timeframePurchaseDetails);
  return {
    lineTotal: timeframePurchaseDetails.lineTotal,
    unitsSoldTotal: timeframePurchaseDetails.unitsSoldTotal,
    dateDetails: timeframePurchaseDetails.lineTotalsByDay.map(
      (lineTotalByDay, index) => ({
        date: new Date(lineTotalByDay.date),
        lineTotal: lineTotalByDay.lineTotal,
        unitNumber:
          timeframePurchaseDetails.productUnitsSoldByDay[index].unitNumber,
      })
    ),
    totalResultsCount: timeframePurchaseDetails.totalResultsCount,
  };
};

interface PurchaseOrderSearchParams {
  startTime: Date;
  endTime: Date;
  pageNumber: number;
  pageSize: number;
}

const getTimeframeDetails = ({
  startTime,
  endTime,
  pageNumber,
  pageSize,
}: PurchaseOrderSearchParams): Promise<TimeFramePurchaseDetails> => {
  return purchaseOrderApi
    .fetchPurchaseOrders({
      startTime: startTime?.toISOString(),
      endTime: endTime?.toISOString(),
      pageSize,
      pageNumber,
    })
    .then((purchaseOrderDtos) =>
      timeframePurchaseDetailsDtoToTimeframePurchaseDetails(purchaseOrderDtos)
    );
};

export const purchaseOrderRepository = {
  getTimeframeDetails,
};
