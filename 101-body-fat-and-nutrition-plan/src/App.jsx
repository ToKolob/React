import { RouterProvider } from "react-router-dom";
import router from "./router"; // Fix: remove curly braces

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
