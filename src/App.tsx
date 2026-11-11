import { useEffect, useState } from 'react'
import './App.css'
import type { Order, Status } from './types/Order'
import Card from './components/Card';
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { deleteOrder, getOrder, updateStatus } from './data/apt';

const COLUMNS = [
  { name: "Pending", bg: "bg-amber-50", border: "border-amber-200", title: "text-amber-700", badge: "bg-amber-200 text-amber-800" },
  { name: "In-Transit", bg: "bg-sky-50", border: "border-sky-200", title: "text-sky-700", badge: "bg-sky-200 text-sky-800" },
  { name: "Delivered", bg: "bg-emerald-50", border: "border-emerald-200", title: "text-emerald-700", badge: "bg-emerald-200 text-emerald-800" },
];

function App() {
  const [orders, setOrder] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  function onMove(id: string, newStatus: Status) {
    const previous = orders;
    setOrder((prev) => prev.map((o) => (o._id === id ? { ...o, status: newStatus } : o)));
    updateStatus(id, newStatus).catch((e) => {
      console.error("Could not save the change", e);
      setOrder(previous); // undo the move
    });
  }

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    onMove(draggableId, destination.droppableId as Status)
  }
  function onDelete(id: string) {
    if (!window.confirm("Delete this order?")) return;

    const previous = orders;
    setOrder((prev) => prev.filter((o) => o._id !== id)); // card disappears at once
    deleteOrder(id).catch((e) => {
      console.error("Could not delete", e);
      setOrder(previous);                                 // bring it back if the server failed
    });
  }


  useEffect(() => {
    getOrder()
      .then(setOrder)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [])
  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center bg-linear-to-b from-sky-100 to-white'>

        {/* Header */}
        <header className='w-full bg-linear-to-r from-sky-600 to-cyan-500 shadow-md'>
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center p-5 tracking-wide">
            💧 AquaFresh Order Board
          </h1>
        </header>


        {/* Three columns */}
        <div className='w-full max-w-6xl p-4 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <DragDropContext onDragEnd={onDragEnd}>

            {loading &&
              [1, 2, 3].map((i) => (
                <div key={i} className="min-h-80 animate-pulse space-y-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="h-4 w-24 rounded bg-slate-200" />
                  <div className="h-3 w-3/4 rounded bg-slate-200" />
                  <div className="h-3 w-1/2 rounded bg-slate-200" />
                </div>
              ))}

            {COLUMNS.map((col) => {
              const colOrders = orders.filter((o) => o.status === col.name);
              return (
                <Droppable key={col.name} droppableId={col.name}>
                  {(provided, snapshot) => (
                    <section
                      key={col.name}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`rounded-2xl border ${col.border} ${col.bg} p-3 min-h-80 shadow-sm transition
                      ${snapshot.isDraggingOver ? "ring-2 ring-sky-300" : ""}`}
                    >
                      <div className='flex items-center justify-between mb-3'>
                        <h2 className={`text-lg font-semibold ${col.title}`}>{col.name}</h2>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${col.badge}`}>
                          {colOrders.length}
                        </span>
                      </div>

                      <div className='space-y-3'>
                        {colOrders.map((order, index) => (
                          <Card key={order._id} index={index} order={order} onDelete={onDelete} />
                        ))}
                      </div>
                      {!loading && colOrders.length === 0 && (
                        <p className="text-center text-sm text-slate-400 py-8">
                          No orders available
                        </p>
                      )}
                      {provided.placeholder}
                    </section>
                  )}
                </Droppable>
              );
            })}
          </DragDropContext>
        </div>

      </div>
    </>
  )
}

export default App