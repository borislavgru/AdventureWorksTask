import React, { useState } from "react";
import "fontsource-roboto";
import { ProductSearch } from "./components/ProductSearch";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { TimeframeDetailSearch } from "./components/TimeframeDetailSearch";

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={(e, newTab) => setActiveTab(newTab)}>
          <Tab label="Product Search" value={0} />
          <Tab label="Purchase Order Search" value={1} />
        </Tabs>
      </AppBar>

      <ProductSearch style={{ display: activeTab === 0 ? "block" : "none" }} />
      <TimeframeDetailSearch
        style={{ display: activeTab === 1 ? "block" : "none" }}
      />
    </div>
  );
}

export default App;
