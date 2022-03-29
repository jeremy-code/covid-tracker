import React, { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";

import "./App.css";
import { Navbar, Footer, ChartCard, DataDisplay } from "./components";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);

  return (
    <>
      <section>
        <CssBaseline />
        <Navbar />
        <main className="container">
          <DataDisplay data={data} />
          <ChartCard data={data} setData={setData} />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default App;
