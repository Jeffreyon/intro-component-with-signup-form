function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="image-container">
                <img
                    className="card-image mobile"
                    src={product.images.imageMobile}
                    alt="Product Image"
                />
                <img
                    className="card-image desktop"
                    src={product.images.imageDesktop}
                    alt="Product Image"
                />
            </div>
            <div className="card-body">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="prices">
                    <p className="product-price">{product.price}</p>
                    <p className="product-former-price">
                        {product.formerPrice}
                    </p>
                </div>

                <button className="cta">
                    <i className="icon"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
