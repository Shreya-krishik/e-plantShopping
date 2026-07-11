import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    price: 15,
    description: "A fragrant plant known for its calming aroma.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400"
  },
  {
    id: 2,
    name: "Mint",
    category: "Aromatic Plants",
    price: 10,
    description: "Fresh mint leaves with a refreshing fragrance.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400"
  },
  {
    id: 3,
    name: "Rosemary",
    category: "Aromatic Plants",
    price: 18,
    description: "Aromatic herb widely used in cooking.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 20,
    description: "Popular medicinal plant with healing properties.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 5,
    name: "Tulsi",
    category: "Medicinal Plants",
    price: 12,
    description: "Holy basil known for its medicinal benefits.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400"
  },
  {
    id: 6,
    name: "Neem",
    category: "Medicinal Plants",
    price: 16,
    description: "Traditional medicinal plant with many uses.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-container">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <h4>${plant.price}</h4>

                  <button
                    className="add-btn"
                    disabled={addedItems.includes(plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;