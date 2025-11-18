import React from "react";

// ✅ Fetch products from FakeStore API (server-side)
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // always fetch fresh data
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="antialiased text-gray-900">
      <div className="bg-gray-200 min-h-screen p-8 flex flex-wrap items-center justify-center gap-8">
        {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 group transition-transform duration-300 hover:-translate-y-2"
          >
            {/* 🖼 Product Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-125"
                src={product.image}
                alt={product.title}
              />
            </div>

            {/* 📝 Card Content */}
            <div className="p-6 pb-4 group-hover:bg-gray-700 duration-300">
              {/* 💰 Price */}
              <div className="mt-1">
                <span className="text-2xl font-semibold">${product.price}</span>
                <span className="text-gray-600 text-sm"> / item</span>
              </div>

              {/* 📘 Title */}
              <h4 className="mt-1 font-semibold text-xl leading-tight truncate group-hover:text-teal-600 duration-300">
                {product.title}
              </h4>

              {/* 📄 Description */}
              <p className="text-gray-500 mt-2 group-hover:text-white text-sm">
                {product.description.substring(0, 80)}...
              </p>

              {/* 👤 Author section (fake demo) */}
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline hover:text-teal-600 duration-300">
                      John Doe
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500 group-hover:text-white duration-300">
                    <time>Oct 25, 2025</time>
                    <span aria-hidden="true">·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* ⭐ Ratings section */}
              <div className="mt-3 flex items-center justify-between">
                <span className="flex gap-1 text-teal-600">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                </span>
                <span className="ml-2 text-gray-600 text-sm">
                  {product.rating.count} reviews
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
