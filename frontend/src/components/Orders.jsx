export default function Orders({order_details}){

    const orders = order_details.map((order)=>{
        return (
            <div className="order-detail">
                <div className="order-product-image">
                    <img src={order.product_image} alt="product image here" />
                    {order.product_name}
                </div>
                <div className="customer-detail">
                    <div className="customer-name">{order.username}</div>
                    <div className="customer-id">{order.userid}</div>
                    <div className="order-date">{order.date}</div>
                    <div className="order-time">{order.time}</div>
                    <div className="order-quantity">{order.quantity}</div>
                    <div className="order-amount">{order.amount}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="orders">
            {orders}
        </div>
    );
}