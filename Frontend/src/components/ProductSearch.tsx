import React, {
  CSSProperties,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import {
  Product,
  productsRepository,
  ProductSearchResult,
} from "../data/productRepository/productRepository";
import { ProductsTable } from "./ProductTable";

export const ProductSearch: FunctionComponent<{ style?: CSSProperties }> = ({
  style,
}) => {
  const [name, setName] = useState<string>("");
  const [sellStartDate, setSellStartDate] = useState<Date>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [description, setDescription] = useState<string>("");
  const [searchResult, setSearchResult] = useState<ProductSearchResult>();
  const [loading, setLoading] = useState<boolean>(false);

  const searchProducts = () => {
    setLoading(true);

    productsRepository
      .getProducts({
        description,
        name,
        sellStartDate,
        pageNumber: pageNumber + 1,
        pageSize,
      })
      .then((searchResult) => {
        console.log(searchResult);
        setSearchResult(searchResult);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    searchProducts();
  }, [pageNumber, pageSize]);

  return (
    <Container maxWidth="xl" style={style}>
      <h1>Product Search</h1>

      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        label="Name"
        style={styles.textInput}
        size="small"
      />

      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        label="Description"
        style={styles.textInput}
        size="small"
      />

      <TextField
        label="Sell start date"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setSellStartDate(new Date(e.target.value));
        }}
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
        <Button variant="outlined" onClick={searchProducts} disabled={loading}>
          Search
        </Button>
        {loading && <CircularProgress size={32} style={{ marginLeft: 16 }} />}
      </div>

      <ProductsTable
        products={searchResult?.products || []}
        page={pageNumber}
        rowsPerPage={pageSize}
        onRowsPerPageChange={setPageSize}
        onPageChange={setPageNumber}
        count={searchResult?.totalResultsCount || 0}
      />
    </Container>
  );
};

// TODO: Extract to .css file and use class names
const styles = {
  textInput: {
    marginTop: 16,
    marginBottom: 16,
    display: "block",
  },
};
