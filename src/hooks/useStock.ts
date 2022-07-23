import { fetchContoken } from "../helpers";

export const useStock = (id: string) => {
  const updateStock = async (stock: number) => {
    try {
      const resp = await fetchContoken(`api/productos/stock/${id}`, { stock:20 }, "PUT");
      const data = await resp?.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const decrement = async () => {
    try {
      const response = await fetchContoken(`api/productos/stock/decrementar/${id}`, {}, "PUT");
      const data = await response!.json();
      if (data.success) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const increment = async () => {
    try {
      const response = await fetchContoken(`api/productos/stock/incrementar/${id}`, {}, "PUT");
      const data = await response!.json();
      if (data.success) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
    return {
        decrement,
        increment,
        updateStock
    };
};
