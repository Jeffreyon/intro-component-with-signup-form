import { useState } from "react";
import ProductCard from "./ProductCard";
import imageMobile from "./image-product-mobile.jpg";
import imageDesktop from "./image-product-desktop.jpg";

function App() {
    const sampleProduct = {
        images: {
            imageDesktop,
            imageMobile,
        },
        category: "perfume",
        name: "Gabrielle Essence Eau De Parfum",
        description:
            "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL",
        price: "$149.99",
        formerPrice: "$169.99",
    };

    const [product, setProduct] = useState(sampleProduct);

    return (
        <div className="stage">
            <ProductCard product={product} />
        </div>
    );
}

export default App;
