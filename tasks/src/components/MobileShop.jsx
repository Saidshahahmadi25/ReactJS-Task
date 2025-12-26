import { useState } from "react";

function MobileShop() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState("none");

  const mobiles = [
  { id: 1, name: "iPhone 15", brand: "Apple", price: 999, rating: 4.8, image: "https://via.placeholder.com/150?text=iPhone%2015" },
  { id: 2, name: "Galaxy S23", brand: "Samsung", price: 899, rating: 4.7, image: "https://via.placeholder.com/150?text=Galaxy%20S23" },
  { id: 3, name: "Pixel 8", brand: "Google", price: 799, rating: 4.6, image: "https://via.placeholder.com/150?text=Pixel%208" },
  { id: 4, name: "iPhone 14", brand: "Apple", price: 799, rating: 4.5, image: "https://via.placeholder.com/150?text=iPhone%2014" },
  { id: 5, name: "Galaxy A54", brand: "Samsung", price: 499, rating: 4.3, image: "https://via.placeholder.com/150?text=Galaxy%20A54" },
];



  // Filtering
  let filteredMobiles = mobiles.filter((mobile) => {
    const matchesSearch = mobile.name.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = brand === "all" || mobile.brand === brand;
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && mobile.price < 700) ||
      (priceRange === "mid" && mobile.price >= 700 && mobile.price <= 900) ||
      (priceRange === "high" && mobile.price > 900);
    const matchesRating =
      rating === "all" || mobile.rating >= Number(rating);

    return matchesSearch && matchesBrand && matchesPrice && matchesRating;
  });

  // Sorting
  if (sort === "price-asc") {
    filteredMobiles.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredMobiles.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    filteredMobiles.sort((a, b) => b.rating - a.rating);
  } else if (sort === "rating-asc") {
    filteredMobiles.sort((a, b) => a.rating - b.rating);
  }

  // Add to cart handler
  const handleAddToCart = (mobile) => {
    alert(`${mobile.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        📱 Mobile Shop
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6 w-full max-w-5xl">
        <input
          type="text"
          placeholder="Search mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Prices</option>
          <option value="low">Below $700</option>
          <option value="mid">$700 - $900</option>
          <option value="high">Above $900</option>
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Ratings</option>
          <option value="4.5">4.5+</option>
          <option value="4.0">4.0+</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="none">Sort</option>
          <option value="price-asc">Price Low → High</option>
          <option value="price-desc">Price High → Low</option>
          <option value="rating-desc">Rating High → Low</option>
          <option value="rating-asc">Rating Low → High</option>
        </select>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredMobiles.length > 0 ? (
          filteredMobiles.map((mobile) => (
            <div
              key={mobile.id}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition"
            >
              <img src={mobile.image} alt={mobile.name} className="w-32 h-32 object-cover mb-3 rounded-lg" />
              <div className="text-lg font-semibold text-gray-800">{mobile.name}</div>
              <div className="text-sm text-gray-500">{mobile.brand}</div>
              <div className="mt-2 text-gray-700 font-medium">{`$${mobile.price}`}</div>
              <div className="mt-1 text-yellow-500 font-semibold">{mobile.rating}</div>
              <button
                onClick={() => handleAddToCart(mobile)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No mobiles found</p>
        )}
      </div>
    </div>
  );
}

export default MobileShop;
