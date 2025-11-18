'use client';
import { useEffect, useState } from 'react';

export default function ProductsClient() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Client Products</h1>

      <div className="grid grid-col-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-3 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="h-32 w-full object-contain mb-2"
            />
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
