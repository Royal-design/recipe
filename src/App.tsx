import { RootLayout } from "./pages/RootLayout";
import { Mainpage } from "./pages/Mainpage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="mainpage/:id" element={<Mainpage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
