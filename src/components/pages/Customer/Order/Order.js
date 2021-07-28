import '../Cart/cart.css'
import dress1 from '../../../../images/dress1.jpg'

const Order = () => {
    return (

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
          <tr>
            
            <td><img
                   src={dress1}
                   class="img-fluid img-thumbnail"
                   alt="Dress"
                 />
            </td>
            <td> 
              <p class="text-uppercase">Hutch</p>
                  <p>Printed Leona Dress</p>
                  <p>$355</p>
            </td>
            <td>
              <p>Sat, Jun 19 - Tue, Jun 22 (4 days)</p>
            </td>
            <td>
              <p class="font-weight-bold">$64.00</p>
            </td>
            <td >
              <p>Approved</p>
              
            </td>
            <td>
              <button type="button" class="btn btn-secondary" disabled>Cancel</button>
            </td>
          </tr>
         
         
        </tbody>
      
        <tbody>
          <tr>
            
            <td><img
                   src={dress1}
                   class="img-fluid img-thumbnail"
                   alt="Dress"
                 />
            </td>
            <td> 
              <p class="text-uppercase">Hutch</p>
                  <p>Printed Leona Dress</p>
                  <p>$355</p>
            </td>
            <td>
              <p>Sat, Jun 19 - Tue, Jun 22 (4 days)</p>
            </td>
            <td>
              <p class="font-weight-bold">$64.00</p>
            </td>
            <td >
              <p>Pending</p>
              
            </td>
            <td>
              <button type="button" class="btn btn-danger">Cancel</button>
            </td>
          </tr>
         
         
        </tbody>
      </table>
      
      
      </div>

    )
}


export default Order