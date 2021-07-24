 
import './rentOrder.css'
import dress1 from '../../../images/dress1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

 const RentOrder = () => {

    const [order, setOrder] = useState([]);


    useEffect(() => {
        const getOrder = async () => {
            const token = localStorage.getItem('auth-token');
            const orderResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/renter/orders`,
                { headers: { Authorization: 'Bearer ' + token } }
                
            );
            const sortedOrderResponse = orderResponse.data.data.reverse();
            setOrder(sortedOrderResponse);
            console.log(sortedOrderResponse);
        };
        getOrder();
    }, []);



    return (
        <div>

<headings>
      <h1>Rent Orders</h1>
    </headings>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>

          <th scope="col">Arrival- Return Date</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
          <th scope="col">Customer</th>
        </tr>
      </thead>
      <tbody>
      {order.map((orders) => (
        <tr>
        
          <td>
            <img src={dress1} class="img-fluid img-thumbnail" alt="Dress" />
          </td>
          <td>
          
            <p class="text-uppercase">name</p>
            <p></p>
            <p>$355</p>
          </td>
          <td id="date">{orders.startDate} - {orders.endDate}</td>

          <td id="price">$ 64.00</td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Approved
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Approved</a>
                <a class="dropdown-item" href="#">Pending</a>
              </div>
            </div>
          </td>
          <td><p>User</p></td>
          
        </tr>
        ))}
       
      </tbody>
      <tbody>
        <tr>
          <td>
            <img src="dress.jpg" class="img-fluid img-thumbnail" alt="Sheep" />
          </td>
          <td>
            <p class="text-uppercase">Hutch</p>
            <p>Printed Leona Dress</p>
            <p>$355</p>
          </td>
          <td id="date">Sat, Jun 19 - Sat, Jul 09</td>

          <td id="price">$ 64.00</td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pending
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Approved</a>
                <a class="dropdown-item" href="#">Pending</a>
              </div>
            </div>
          </td>
          <td><p>User</p></td>
        </tr>
      </tbody>
    </table>

        </div>
    )
 }


 export default RentOrder