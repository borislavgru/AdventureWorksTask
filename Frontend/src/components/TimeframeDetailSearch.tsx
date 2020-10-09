import React, {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import {
  purchaseOrderRepository,
  TimeFramePurchaseDetails,
} from "../data/purchaseOrderRepository/purchaseOrderRepository";
import { PurchaseDateDetailTable } from "./PurchaseDateDetailTable";

export const TimeframeDetailSearch: FunctionComponent<{
  style?: CSSProperties;
}> = ({ style }) => {
  const [sellStartDate, setSellStartDate] = useState<Date>(new Date());
  const [sellEndDate, setSellEndDate] = useState<Date>(new Date());
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [
    timeframeDetails,
    setTimeframeDetails,
  ] = useState<TimeFramePurchaseDetails | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const getTimeframeDetails = useCallback(() => {
    setLoading(true);

    purchaseOrderRepository
      .getTimeframeDetails({
        startTime: sellStartDate,
        endTime: sellEndDate,
        pageNumber: pageNumber + 1,
        pageSize: rowsPerPage,
      })
      .then((timeframeDetails) => {
        console.log(timeframeDetails.dateDetails.length);
        setTimeframeDetails(timeframeDetails);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sellStartDate, sellEndDate, pageNumber, rowsPerPage]);

  useEffect(() => {
    getTimeframeDetails();
  }, [pageNumber, rowsPerPage]);

  return (
    <Container maxWidth="xl" style={style}>
      <h1>Timeframe Details</h1>

      <TextField
        label="Sell start date"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setSellStartDate(new Date(e.target.value));
        }}
        defaultValue={new Date().toISOString().slice(0, 10)}
        required
        style={{ display: "block" }}
      />

      <TextField
        label="Sell end date"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setSellEndDate(new Date(e.target.value));
        }}
        defaultValue={new Date().toISOString().slice(0, 10)}
        required
        style={{ display: "block", marginTop: 16 }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <Button
          variant="outlined"
          onClick={getTimeframeDetails}
          disabled={loading}
        >
          Search
        </Button>
        {loading && <CircularProgress size={32} style={{ marginLeft: 16 }} />}
      </div>

      <div style={{ marginBottom: 16 }}>
        <div>
          Line total: <strong>{timeframeDetails?.lineTotal}</strong>
        </div>
        <div>
          Total units sold: <strong>{timeframeDetails?.unitsSoldTotal}</strong>
        </div>
      </div>

      <PurchaseDateDetailTable
        dateDetails={timeframeDetails?.dateDetails || []}
        page={pageNumber}
        onPageChange={setPageNumber}
        onRowsPerPageChange={setRowsPerPage}
        rowsPerPage={rowsPerPage}
        count={timeframeDetails?.totalResultsCount || 0}
      />
    </Container>
  );
};
