import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DesktopPage from "pages/Desktop";
// import Excel from "components/Excle";
import DownloadExcel from "components/DownloadExcel"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DesktopPage />} />
          <Route path="/excel" element={<DownloadExcel />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
