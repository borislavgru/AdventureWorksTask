import { api } from "../api";
import { PurchasesTimeframeRequestDto } from "./purchaseOrderSearchRequestDto";
import { TimeFramePurchaseDetailsDto } from "./TimeframePurchaseDetailsDto";

const fetchPurchaseOrders = (
  params: PurchasesTimeframeRequestDto
): Promise<TimeFramePurchaseDetailsDto> => {
  return api
    .post<TimeFramePurchaseDetailsDto>("/purchases", params)
    .then((response) => response.data);
};

export const purchaseOrderApi = {
  fetchPurchaseOrders,
};
