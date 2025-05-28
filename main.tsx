import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div>
    <App />
    {/* Dummy Tailwind styles to ensure CSS is bundled during Vite build */}
    <div className="hidden text-blue-500 bg-red-500 p-4 m-2"></div>
  </div>
);
