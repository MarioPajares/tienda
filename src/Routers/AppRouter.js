import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Error } from "../Components/error/Error";
import { Tienda } from "../Components/tienda/Tienda";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
