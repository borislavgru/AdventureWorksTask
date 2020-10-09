import { TimeFramePurchaseDetailsDto } from "../purchaseOrderApi/TimeframePurchaseDetailsDto";

export const MOCK_TIMEFRAME_PURCHASE_DTO: TimeFramePurchaseDetailsDto = {
  lineTotalsByDay: [
    {
      date: "2002-06-01T00:00:00",
      lineTotal: 23,
    },
    {
      date: "2002-06-02T00:00:00",
      lineTotal: 45,
    },
    {
      date: "2002-06-03T00:00:00",
      lineTotal: 11,
    },
    {
      date: "2002-06-04T00:00:00",
      lineTotal: 15,
    },
    {
      date: "2002-06-05T00:00:00",
      lineTotal: 15,
    },
  ],
  productUnitsSoldByDay: [
    {
      date: "2002-06-01T00:00:00",
      unitNumber: 2,
    },
    {
      date: "2002-06-02T00:00:00",
      unitNumber: 4,
    },
    {
      date: "2002-06-03T00:00:00",
      unitNumber: 13,
    },
    {
      date: "2002-06-04T00:00:00",
      unitNumber: 20,
    },
    {
      date: "2002-06-05T00:00:00",
      unitNumber: 30,
    },
  ],
  lineTotal: 68,
  unitsSoldTotal: 150,
  totalResultsCount: 5,
};
