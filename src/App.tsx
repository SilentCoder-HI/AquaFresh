import { useState } from 'react'
import './App.css'
import type { Order } from './types/Order'
import Card from './components/Card';

function App() {
  const [orders] = useState<Order[]>([
    { id: 1, packageSize: "19L Bottle x 2", customer: "Ali Khan", status: "Paid" },
    { id: 2, packageSize: "6L Pack x 6", customer: "Sara Office", status: "Pending" },
    { id: 3, packageSize: "19L Bottle x 5", customer: "City Clinic", status: "Pending" },
  ]);
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className="text-2xl font-bold p-4">AquaFresh Order Board</h1>
        <div className='bg-white'>
          {orders.map((order) => (
            <Card key={order.id} Order={order} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
