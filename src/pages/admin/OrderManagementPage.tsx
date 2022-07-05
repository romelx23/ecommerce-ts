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

type Estado = "ordenado" | "en proceso" | "entregado" | "cancelado";

export const OrderManagementPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const [detail, setDetail] = useState<DetallePedido[]>([]);
  const { toggleModal } = useContext(UIContext);
  const [show, setShow] = useState(true);
  const [orderDetail, setOrderDetail] = useState({
    _id: "",
    bodega: "",
    fecha: "",
    importe: 0,
    nombre: "",
    usuario: "",
  } as Order);

  const [estado, setEstado] = useState<Estado>("ordenado");

  const loadOrders = async () => {
    // validar si el usuario tiene bodega
    const { uid } = user;
    const resp = await fetchContoken(
      `api/usuarios/datosBodega/${uid}`,
      {},
      "POST"
    );
    const data = await resp!.json();
    // console.log(data);
    if (data.ok) {
      const resp = await fetchContoken(`api/pedido`, {}, "GET");
      const data: OrderResponse = await resp?.json();
      console.log(data);
      if (data.success) {
        const { data: ordenes } = data;
        setOrders(ordenes);
      }
    }
  };

  const getOrderDetails = async (order: Order) => {
    const { _id } = order;
    const resp = await fetchContoken(`api/pedido/${_id}`, {}, "GET");
    const data: PedidoResponse = await resp?.json();
    console.log(data);
    if (data.success) {
      setDetail(data.detallePedido);
    }
    if (orderDetail !== undefined) {
      setOrderDetail(order);
      console.log(order);
    }
  };

  // abrir un modal para mostrar el detalle de la orden
  const handleDetail = (order: Order) => {
    toggleModal(true);
    getOrderDetails(order);
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
                S/.{item.importe.toFixed(2)}
              </h1>
              <div className="flex justify-between">
                <h1 className="text-lg">
                  {new Date(item.fecha).toLocaleDateString()}
                </h1>
                <button
                  onClick={() => handleDetail(item)}
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
          <div className="modal_page">
            <div className="modal_page_header">
              <button
                onClick={() => setShow(true)}
                className="btn_modal_header"
              >
                <p className="font-semibold">Pedido</p>
                <i className="far fa-clipboard"></i>
              </button>
              <button
                onClick={() => setShow(false)}
                className="btn_modal_header"
              >
                <p className="font-semibold">Estado</p>
                <i className="fas fa-search-location"></i>
              </button>
            </div>
            {show ? (
              <>
                <h1 className="font-semibold text-2xl">Detalle Pedido</h1>
                <p className="text-left ml-6">
                  <span className="font-semibold">Nombre:</span>{" "}
                  {orderDetail.nombre}
                </p>
                <p className="text-left ml-6">
                  <span className="font-semibold">Total:</span>{" "}
                  {orderDetail.importe.toFixed(2)}
                </p>
                <p className="text-left ml-6">
                  <span className="font-semibold">Fecha:</span>{" "}
                  {new Date(orderDetail.fecha).toLocaleDateString()}
                </p>
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
                              <p className="text-left">
                                {item.producto.nombre}
                              </p>
                            </td>
                            <td>
                              <p>S/.{item.precio.toFixed(2)}</p>
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
              </>
            ) : (
              <>
                <h1 className="font-semibold text-2xl">Estado del Pedido</h1>
                <div className="estado-pedido-container">
                  <button
                    onClick={() => setEstado("ordenado")}
                    className={`estado-circle ${estado==="ordenado" ? "bg-green-600" : ""}`}
                  >
                    <i className="fas fa-shopping-basket"></i>
                    <p className="absolute -bottom-8">Ordenado</p>
                  </button>
                  <div className="h-4 w-16 bg-white"></div>
                  <button
                    onClick={() => setEstado("en proceso")}
                    className={`estado-circle ${estado==="en proceso" ? "bg-green-600" : ""}`}
                  >
                    <i className="fas fa-dolly"></i>
                    <p className="absolute -bottom-8">Pendiente</p>
                  </button>
                  <div className="h-4 w-16 bg-white"></div>
                  <button
                    onClick={() => setEstado("entregado")}
                    className={`estado-circle ${estado==="entregado" ? "bg-green-600" : ""}`}
                  >
                    <i className="fas fa-check-circle"></i>
                    <p className="absolute -bottom-8">Atendido</p>
                  </button>
                </div>
                <div className="estado-pedido-container mt-8">
                  <button
                    onClick={() => setEstado("cancelado")}
                    className={`estado-circle ${estado==="cancelado" ? "bg-red-600" : ""}`}
                  >
                    <i className="fas fa-times"></i>
                    <p className="absolute -bottom-8">Cancelado</p>
                  </button>
                </div>
              </>
            )}
            {/* <p>Total: {detail.reduce((total,item)=>total+item.precio)}</p> */}
          </div>
        </div>
      </Modal>
    </LayoutProfile>
  );
};
