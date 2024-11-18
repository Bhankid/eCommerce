
const Grocery = () => {
  const products = [
    {
      id: 1,
      name: "Kingsbite Milk Chocolate 100g",
      image: "https://placehold.co/300x300",
      alt: "Kingsbite Milk Chocolate 100g",
    },
    {
      id: 2,
      name: "Arrow root",
      image: "https://placehold.co/300x300",
      alt: "Arrow root",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://placehold.co/300x300",
      alt: "Product 3",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://placehold.co/300x300",
      alt: "Product 4",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Groceries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative bg-white p-4 rounded-lg shadow-lg w-64 mx-auto">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full">
                  Add to cart
                </button>
              </div>
              <p className="mt-2 text-green-700 font-bold">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
