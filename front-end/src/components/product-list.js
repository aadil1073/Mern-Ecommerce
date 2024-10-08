import { Link } from "react-router-dom";


const ProductList = ({products, addToCart}) => (
    <div class="container mb-5">
          <div id="products" class="row">

            {products.map(product=> <div class="col-xl-3 col-lg-4 col-md-6 position-relative">

            <div class="card product-item">
              <i class="bi bi-heart-fill position-absolute liked"></i>
              <i class="bi bi-heart position-absolute like"></i>
              <Link to={`/product/${product._id}`}><img src={`images/${product.image}.jpg`} class="card-img-top" alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/></Link>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted  fw-light">{product.category}</h6>
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text price"> ${product.price} <span class="float-end rating-stars" >
                  {[...Array(product.rating)].map(()=><i class="bi bi-star-fill"></i>)}
                </span> </p>
                <div class="text-center">
                  <a class="btn btn-dark w-100" onClick= {()=>addToCart(product)} role="button" > Add To Cart</a>
                </div>
              </div>
            </div>
            </div>)}
          </div>
    </div>
)

export default ProductList;