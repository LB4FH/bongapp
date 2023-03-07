import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App">
    <header className="App-header">
     <h1>
        God idé (nesten)
      </h1>
      Aldri bruk eller stol på QR-koder, og stol heller ikke på linker som er nesten like vårt eget
    </header>
  </div>
  },
  {
      path: "/qr",
      element: <div className="App">
      <header className="App-header">
       <h1>
          Å nei, der ble du phishet 🎣
        </h1>
        Aldri bruk eller stol på QR-koder, og stol heller ikke på linker som er nesten like de du har
      </header>
    </div>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);