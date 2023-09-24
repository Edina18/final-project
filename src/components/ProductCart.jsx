
import './ProductCart.css'

function ProductCart(props) {

const {oneProduct} = props;
console.log('oneProduct',oneProduct);

    return(
        <div className='product-cart'>
           <img alt="Product Image" className="product-image"/>
            <h2 className="product-name">Product Name</h2>
            <p className="price">$99.99</p>
            <button className='button'>Details</button>
            <button className='button'>Add to cart</button>
            
        </div>
        
    )
}

export default ProductCart;