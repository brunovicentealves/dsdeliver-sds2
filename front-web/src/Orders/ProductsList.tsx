import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    product: Product[];
}

function ProductsList({product}:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {product.map(product => (
                    <ProductCard key={product.id} product={product}/>
                    
                    ))}
            </div>
        </div>
    )
}

export default ProductsList;