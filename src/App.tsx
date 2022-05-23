import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductsPage } from "./pages/product/ProductsPage";
import { AppRouter } from "./routes/AppRouter";
import { UIProvider } from "./context/ui/UIProvider";
import { FavoriteProvider } from "./context/favorite";
import { CartProvider } from "./context/cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <ProductsPage/> */}
      <UIProvider>
        <FavoriteProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </FavoriteProvider>
      </UIProvider>
    </div>
  );
}

export default App;
