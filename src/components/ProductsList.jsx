import ProductCart from './ProductCart';
import './ProductsList.css';

function ProductsList (props) {

    const { productsList } = props;

    console.log('productsList' , productsList);

    if (!Array.isArray(productsList.products)) {
      return <p>No products here</p>;
    }else

    return (
        <div className='products-list'>
        {productsList && productsList.products.map((product) => (
        <ProductCart key={product.id} oneProduct={product} />
      ))}
    </div>
    )
}

export default ProductsList;