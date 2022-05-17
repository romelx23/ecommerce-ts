import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductsPage } from "./pages/product/ProductsPage";
import { AppRouter } from "./routes/AppRouter";
import { UIProvider } from "./context/ui/UIProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <ProductsPage/> */}
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </div>
  );
}

export default App;
