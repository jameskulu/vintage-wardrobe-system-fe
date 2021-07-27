
import './cart.css';
import dress1 from '../../../../images/dress1.jpg'
const Cart = () =>{
    return (
        <div class="container-fluid cart">
  <section>
        <div class="row">
            <div class="col-md-12 col-sm-12 cart-heading" >
                <div class="text-center">
                    <h4 class="text-light text-center cart-title">Add to Cart</h4>

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
      <th colspan="2" scope="col"></th>
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
      <td id="icondel"><i class="bi bi-trash"></i></td>
    </tr>
   
   
  </tbody>
</table>

<div class= "row d-grid gap-2 d-md-flex justify-content-md-end ">
<button type="button" class="btn btn-Checkout btn-lg ">Proceed to Checkout</button>

</div>


</div>
      
    )
}

export default Cart