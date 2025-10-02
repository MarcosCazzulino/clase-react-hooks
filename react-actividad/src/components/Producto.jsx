import "./MisComponentes.css";

const Producto = ({name, price, discount = 0, category}) => {
  // Calcular el precio con descuento si es que hay
    let discountedPrice = price;

    if (discount > 0) {
    discountedPrice = price * (1 - discount / 100);
    }

  return (
    <div className="product">
      <h2>{name}</h2>
      <span className="category">{category}</span>
      <div>
        {discount > 0 && (
          <>
            <span className="original-price">${price.toFixed(2)}</span>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
            <span className="discount-badge">-{discount}%</span>
          </>
        )}

        {discount === 0 && (
          <span className="discounted-price">${price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default Producto;