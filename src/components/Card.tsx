import type { Order } from './../types/Order'
type Card = {
    Order: Order,
}
export default function Card({ Order }: Card) {
    return (
        <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '8px' }}>
            <h3>Customer: {Order.customer}</h3>
            <p><strong>Package Size:</strong> {Order.packageSize}</p>
            <p><strong>Status:</strong> <span className={`status-${Order.status.toLowerCase()}`}>{Order.status}</span></p>
        </div>
    )
}
