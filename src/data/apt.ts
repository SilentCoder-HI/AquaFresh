import axios from "axios";
import type { Order, Status } from "../types/Order";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });


export const getOrder = ()=> api.get<Order[]>("/orders").then((r)=>r.data)

export const updateStatus = (id: string, status: Status) =>
  api.patch<Order>(`/orders/${id}`, { status }).then((r) => r.data);

export const deleteOrder = (id : string)=> api.delete<Order>(`/orders/${id}`)