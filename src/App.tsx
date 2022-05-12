import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductsPage } from './pages/product/ProductsPage';
import { AppRouter } from "./routes/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <ProductsPage/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
