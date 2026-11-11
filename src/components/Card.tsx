import { Draggable } from "@hello-pangea/dnd";
import type { Order } from "../types/Order";

interface Props {
  order: Order;
  index: number;
  onDelete: (id: string) => void;
}

export default function Card({ order, index, onDelete }: Props) {

  return (
    <Draggable draggableId={String(order._id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-3 flex items-center  justify-between flex-row cursor-grab rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition
            ${snapshot.isDragging ? "shadow-lg ring-2 ring-sky-300" : "hover:shadow-md"}`}
        >
          <div className="flex flex-col">
            <p className="font-semibold text-slate-800">{order.customer}</p>
            <p className="mt-1 text-sm text-slate-500">💧 {order.packageSize}</p>
          </div>
          <button
            type="button"
            aria-label="Delete order"
            title="Delete order"
            onClick={() => onDelete(order._id)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-lg font-semibold leading-none text-red-500 shadow-sm ring-1 ring-red-200 transition duration-150 hover:bg-red-500 hover:text-white hover:shadow-md active:scale-90 cursor-pointer"
          >
            ×
          </button>
        </div>
      )}
    </Draggable>
  );
}