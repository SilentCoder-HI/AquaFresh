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
    <div className='bg-white'>
      {orders.map((order,index)=>(
        <Card key={index} Order={order}/>
      ))}
      </div>
    </>
  )
}

export default App
