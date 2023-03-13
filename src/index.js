import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

export const WidgetContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <WidgetContext.Provider value={{ isOpen: false, isMuted: false }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </WidgetContext.Provider>
);
