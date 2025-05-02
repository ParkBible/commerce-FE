import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TanstackQueryProviders from "./shared/TanstackQueryProviders.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TanstackQueryProviders>
            <App />
        </TanstackQueryProviders>
    </StrictMode>,
);
