import { Outlet } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidenav } from "./components/Sidenav";
import { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Sideout } from "./components/Sideout";
export function App() {
  const sidenavRef = useRef(null)
  useEffect(() => {
    const sideInstanse = M.Sidenav.init(sidenavRef.current, { inDuration: 300, outDuration: 225 });
    return () => {
      sideInstanse.destroy()
    }
  }, [])
  return (
    <div className="wrapper">
      <Header></Header>
      <Sideout></Sideout>
      <Sidenav innerRef={sidenavRef}></Sidenav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

