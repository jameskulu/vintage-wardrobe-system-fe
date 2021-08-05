import './category.css'

import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jpg'

const Category =() =>{
    return (

        <div class="category-container">
            <heading>Categories</heading>
    <div class="container">
      <div class="row">
        <div class="col-5 col-sm-3">
          <h1>Filters</h1>
          <h3>Men</h3>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Shirt</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Pants</p>
          </div>
          <h3>Women</h3>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Shirt</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Pants</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Dress</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Bags</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Skirt</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Shorts</p>
          </div>
          <h3>Kids</h3>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Shirt</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Pants</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Dress</p>
          </div>
          <div class="select-item">
            <input type="checkbox" class="check-input" />
            <p>Bags</p>
          </div>
          <h3>Price</h3>
          <div class="price-item">
            <div>
              <p>Min Price</p>
              <span id="price">
                <i class="bi bi-currency-dollar"></i>
                <input type="text" class="form-control" />
              </span>
            </div>
            <div>
              <p>Max Price</p>
              <span id="price">
                <i class="bi bi-currency-dollar"></i>
                <input type="text" class="form-control" />
              </span>
            </div>
          </div>
          <h3>Colors</h3>
          <div class="color">
            <div class="filter-input-pairs filter-input-pairs--colors">
              <div class="input-wrapper grid-color-1">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-2">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-3">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-4">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-5">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-6">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-7">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-8">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-9">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-10">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-11">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-12">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-13">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-14">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-15">
                <input type="checkbox" />
              </div>
              <div class="input-wrapper grid-color-16">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-7">
          <div class="row product-section">
            <div class="card">
              <img
                class="card-img-top"
                src={img1}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={img3}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={img1}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src={img3}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Dress</p>
                <h5 class="card-title">$40 To Rent</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Category





