import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";
import "./styles/theme.css";
import { WishlistProvider } from "./context/WishlistContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="303743344751-d7fu4aqkereqpfp0dribl9oa5cloho39.apps.googleusercontent.com">
      <CartProvider>
        <WishlistProvider>

          <App />

        </WishlistProvider>
      </CartProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);




<App />
