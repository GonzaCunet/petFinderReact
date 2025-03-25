import { Routes, Route } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/home/Index";
import { Login } from "../pages/login/Index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
