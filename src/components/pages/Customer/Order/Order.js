import '../Cart/cart.css'
import dress1 from '../../../../images/dress1.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {

    const [myOrders, setMyOrders] = useState([]);
    const [isDisabled, setDisabled] = useState(false);


    useEffect(()=> {
        const getMyOrder = async () => {
            const token = localStorage.getItem('auth-token');
            const myOrderResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/users/orders`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const sortedMyOrderResponse = myOrderResponse.data.data.reverse();
            if(sortedMyOrderResponse.data.data.status == "pending"){
              setDisabled(true);
            }
            
            setMyOrders(sortedMyOrderResponse);

        };
        getMyOrder();

        

    }, []);

    return (
        <div className="order-container">
            <div class="container-fluid cart">
                <section>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 cart-heading">
                            <div class="text-center">
                                <h4 class="text-light text-center cart-title">
                                    My Orders
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

        <div class="container-fluid cart">
        <section>
              <div class="row">
                  <div class="col-md-12 col-sm-12 cart-heading" >
                      <div class="text-center">
                          <h4 class="text-light text-center cart-title">My Orders</h4>
      
                      </div>
                     
                          
                  </div>
              </div>
      
            </section>
      
          <table class="table ">
        <thead class="thead-light">

          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Arrival-Return Date</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {myOrders.map((order)=>(
          
          
          <tr>
      
            <td><img
                   src={dress1}
                   class="img-fluid img-thumbnail"
                   alt="Dress"
                 />
            </td>
            <td> 
              <p class="text-uppercase">{order.item.name}</p>
                  <p>{order.item.description}</p>
                  <p>{order.item.price}</p>
            </td>
            <td>
              <p> {order.startDate} - {order.endDate}</p>
            </td>
            <td>
              <p class="font-weight-bold">{order.totalPrice}</p>
            </td>
            <td >
              <p>{order.status}</p>
              
            </td>
            <td>
              <button type="button" class="btn btn-secondary" disabled ={isDisabled}>Cancel</button>
            </td>
          </tr>
         
          ))}
        </tbody>
      
      </table>
      
      
      </div>

                       
                   
                </div>
            </div>
        
    );
};

export default Order;
