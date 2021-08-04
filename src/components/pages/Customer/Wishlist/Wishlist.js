import './wishlist.css';
import dress1 from '../../../../images/dress1.jpg';


const Wishlist =() =>{
    return(
        <div class="wishlist-container">

            <div class="container-fluid">

           

       
                <section>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 cart-heading">
                            <div class="text-center">
                                <h4 class="text-light text-center cart-title">
                                    Wishlist
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="table-responsive">

                
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Item</th>

                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={dress1} class="img-fluid img-thumbnail" alt="Dress" />
                        </td>
                        <td>
                          <p class="text-uppercase">Hutch</p>
                          <p>Printed Leona Dress</p>
                          <p>$355</p>
                        </td>
                        <td></td>
                        <td></td>

                        <td id="iconedit"><i class="fas fa-cart-plus"></i></td>
                        <td id="icondel"><i class="fas fa-trash-alt"></i></td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <img src={dress1} class="img-fluid img-thumbnail" alt="Dress" />
                        </td>
                        <td>
                          <p class="text-uppercase">Hutch</p>
                          <p>Printed Leona Dress</p>
                          <p>$355</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td id="iconedit"><i class="fas fa-cart-plus"></i></td>
                        <td id="icondel"><i class="fas fa-trash-alt"></i></td>
                      </tr>
                    </tbody>
                  </table>

                  </div>

    </div>

    </div>

    )


}

export default Wishlist