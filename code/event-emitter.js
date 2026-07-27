// The standard pattern: extend EventEmitter for your own classes:
import {EventEmitter} from "node:events"

class OrderService extends EventEmitter {
    createOrder(order){
        const savedOrder={id:Date.now(),...order}
        this.emit("order:create",savedOrder)
        return savedOrder 
    }
    cancelOrder(orderId){
        this.emit("order:canceled",orderId)
    }

}
// usage of the events

const orders= new OrderService()
orders.on("order:create",(order)=> console.log("Order created", order.id))
orders.on('order:create', (order) => {
  console.log('📊 Update analytics', order.id);
});
orders.on("order:canceled", (orderId)=> console.log("💸 Process refund for order", orderId))

// orders.createOrder({product:"Node.js Cours",price:49, customerId:1, amount: 100})
const saved = orders.createOrder({product:"Node.js Cours", price:49, customerId:1, amount:100})
orders.cancelOrder(saved.id)

