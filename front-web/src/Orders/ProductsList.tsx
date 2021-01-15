import { checkIsSelected } from "../helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    product: Product[];
    selectedProduct:Product[];
    onSelectProduct: (product : Product) =>void;
}

function ProductsList({product,selectedProduct,onSelectProduct}:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {product.map(product => (
                    <ProductCard key={product.id}
                    product={product} 
                    onSelectProduct={onSelectProduct}
                    isSelected ={checkIsSelected(selectedProduct,product)}
                    />
                    
                    ))}
            </div>
        </div>
    )
}

export default ProductsList;