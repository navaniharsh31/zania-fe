import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </React.StrictMode>
  );
});
