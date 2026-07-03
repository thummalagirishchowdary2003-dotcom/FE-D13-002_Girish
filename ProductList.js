import React from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 55000,
      company: "Dell",
    },
    {
      id: 2,
      name: "Mobile",
      category: "Electronics",
      price: 25000,
      company: "Samsung",
    },
    {
      id: 3,
      name: "Headphones",
      category: "Accessories",
      price: 3000,
      company: "Boat",
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Wearables",
      price: 7000,
      company: "Noise",
    },
  ];

  return (
    <div className="container">
      <h1>Product Details</h1>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <h3>{product.name}</h3>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Company:</strong> {product.company}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;