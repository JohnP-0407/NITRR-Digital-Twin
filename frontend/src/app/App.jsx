import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}