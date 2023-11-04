import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import styles from './styles/Main.css'

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;