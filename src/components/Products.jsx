
import { useEffect, useState } from "react";
import './Products.css';
import ProductsList from "./ProductsList";

function Products() {

        const [productsFromApi, setProductsFromApi] = useState({});

        useEffect(() => {
            // fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProductsFromApi(data))
        }, [])
        console.log('result from api', productsFromApi);

        return(
    
            <div className="products">
            Products list below
            <ProductsList productsList={productsFromApi}/>
        </div>
        
    )
}

export default Products;