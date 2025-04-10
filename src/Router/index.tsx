import { Routes, Route } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/home/Index";
import { Login } from "../pages/login/Index";
import { HomeMascotas } from "../pages/homemascotas/Index";
import { ReportPets } from "../pages/reportPets";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-mascotas" element={<HomeMascotas />} />
        <Route path="/reportpets" element={<ReportPets />} />
      </Route>
    </Routes>
  );
}
