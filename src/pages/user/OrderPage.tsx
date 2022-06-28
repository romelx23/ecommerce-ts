import React, { useContext, useEffect, useState } from "react";
import { LayoutProfile } from "../../components/layout";
import { Modal } from "../../components/ui";
import { AuthContext } from "../../context/auth";
import { UIContext } from "../../context/ui";
import { fetchContoken } from "../../helpers";
import {
  DetallePedido,
  Order,
  OrderResponse,
  PedidoResponse,
} from "../../interfaces";

export const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const [detail, setDetail] = useState<DetallePedido[]>([]);
  const { toggleModal } = useContext(UIContext);

  const loadOrders = async () => {
    const resp = await fetchContoken(`api/pedido/user`, {}, "GET");
    const data: OrderResponse = await resp?.json();
    console.log(data);
    if (data.success) {
      const { data: ordenes } = data;
      setOrders(ordenes);
    }
  };

  const getOrderDetails = async (id: string) => {
    const resp = await fetchContoken(`api/pedido/${id}`, {}, "GET");
    const data: PedidoResponse = await resp?.json();
    console.log(data);
    if (data.success) {
      setDetail(data.detallePedido);
    }
  };

  // abrir un modal para mostrar el detalle de la orden
  const handleDetail = (id: string) => {
    toggleModal(true);
    getOrderDetails(id);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <LayoutProfile>
      <div className="min-h-[85vh] flex justify-around flex-wrap gap-2">
        {orders.length !== 0 ? (
          orders.map((item, i) => (
            <div
              className="w-64 h-40 bg-indigo-600 text-white rounded-2xl flex flex-col justify-between p-3 text-center text-2xl relative"
              key={i}
            >
              <div className="flex justify-between">
                <h1>{i}.</h1>
                <h1>{item.nombre}</h1>
              </div>
              <h1 className="flex justify-center font-semibold">
                S/.{item.importe}
              </h1>
              <div className="flex justify-between">
                <h1 className="text-lg">
                  {new Date(item.fecha).toLocaleDateString()}
                </h1>
                <button
                  onClick={() => handleDetail(item._id)}
                  className="btn btn-detalle"
                >
                  ver detalle
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-64 h-40 bg-indigo-600 text-white rounded-2xl flex flex-col justify-between p-3 text-center text-2xl">
            <h1 className="flex justify-center font-semibold">
              No hay pedidos
            </h1>
          </div>
        )}
      </div>
      <Modal>
        <div className="w-full h-full flex justify-center">
          <div className="w-full md:w-[80vh] my-5 p-5 bg-[#f4f5fc]">
            <h1 className="font-semibold text-2xl">Detalle Pedido</h1>
            <div className="flex flex-col">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Imagen</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>
                          <p className="font-semibold">{i + 1}.-</p>
                        </td>
                        <td>
                          <p className="text-left">{item.producto.nombre}</p>
                        </td>
                        <td>
                          <p>{item.precio}</p>
                        </td>
                        <td>
                          <p>x{item.cantidad}</p>
                        </td>
                        <td className="flex justify-center items-center">
                          <img
                            className="w-12 h-12 border"
                            alt={item.producto.nombre}
                            src={item.producto.img}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* <p>Total: {detail.reduce((total,item)=>total+item.precio)}</p> */}
          </div>
        </div>
      </Modal>
    </LayoutProfile>
  );
};
