import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <Header />
    <main> 
      <p>This is the root layout</p>      
      <Outlet />
    </main>
    <Footer />
    </>
  );
}