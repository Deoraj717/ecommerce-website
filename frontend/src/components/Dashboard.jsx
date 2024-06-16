import Orders from "./Orders";
import Reviews from "./Reviews";
import bell from '/images/bell.png';

export default function Dashboard(){

    const order = [
        {
          product_image:{bell},
          username:"sunny",
          userid:1234,
          product_name:"shirt rx500",
          date:"12/12/12",
          time:"12:30 pm",
          quantity:2,
          amount:100
        },
        {
          product_image:{bell},
          username:"sunny",
          userid:1234,
          product_name:"shirt rx500",
          date:"12/12/12",
          time:"12:30 pm",
          quantity:2,
          amount:100
        }
      ]

    return(
            <div className="container-dashboard">
                <div className="details-dashboard">
                    <div className="pie-dashboard">

                    </div>
                    <div className="sales-dashboard">
                        <div className="total-sales-dashboard">
                            
                        </div>
                        <div className="total-income-dashboard">

                        </div>
                    </div>
                    <div className="recent-orders-dashboard">
                        <Orders order_details = {order}/>
                    </div>
                </div>
                <div className="lower-dashboard">
                    <div className="reviews-dashboard">
                        {/* <Reviews/> */}
                    </div>
                    <div className="top-products-dashboard">

                    </div>
                </div>
            </div>
    );
}