import React from 'react';

function Thumb({ classes, src, alt }) {
  return (
    <div className={classes}>
      <img src={src} alt={alt} />
    </div>
  )
}

function Product({ addProduct, product }) {
  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {product.currencyId}
        </b>
      </div>
    );
  }
  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={`/static/images/${product.sku}_1.jpg`}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{product.price}</b>
          <span>{product.price}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
}

Product.defaultProps = {
  addProduct: (product) => {},
}

export default function ProductList({ products = [] }) {
  return (
    <div className={"shelf-container"}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
