import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { addCart } from "../../redux/cartAction";

const ProductsComponent = ({ products, status }) => {

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    return (
      <div><div className="container my-5">
      <div className="row">
          <div className="col-12 mb-5">
              <h1 className='display-6 fw-bolder
              text-center'>Latest Products</h1>
              <hr />
          </div>
      </div>
      <div className='row justify-content-center' width="70%" >
      {products.map((product) =>{
            return(
                <>
                <div className="col-md-4 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                    <div class="card-body">
                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                        <p class="card-text lead fw-bold">${product.price}</p>
                        <button className='btn btn-outline-dark px-2 py-2'
                onClick={()=>addProduct(product)}
                >
                    Add to Cart
                </button>
                        <Link to={"/cart"} class="btn btn-outline-dark mx-3">
                           Go to Cart
                        </Link>
                    </div>
                </div>
                </div>
                </>
            )
        })}
      </div>

  </div>
      </div>
    );
  };
  
  export default ProductsComponent;
  