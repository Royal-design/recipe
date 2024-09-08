import { RootLayout } from "./pages/RootLayout";
import { Mainpage } from "./pages/Mainpage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { MainpageId } from "./pages/MainpageId";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="mainpage/:id" element={<MainpageId />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
