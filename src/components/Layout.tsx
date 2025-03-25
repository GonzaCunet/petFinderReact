import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>soy header</header>
      <Outlet />
      <footer>soy footer</footer>
    </>
  );
}
