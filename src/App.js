import React, { useState } from "react";
import './App.css'

const foodData = [
  { country: "India", dishes: ["Biryani", "Paneer Butter Masala", "Dosa", "Butter Chicken", "Chole Bhature"] },
  { country: "Italy", dishes: ["Margherita Pizza", "Lasagna", "Spaghetti", "Risotto", "Tiramisu"] },
  { country: "Japan", dishes: ["Sushi", "Ramen", "Tempura", "Okonomiyaki", "Udon"] },
  { country: "Mexico", dishes: ["Tacos", "Quesadillas", "Enchiladas", "Guacamole", "Churros"] },
  { country: "China", dishes: ["Sweet and Sour Pork", "Kung Pao Chicken", "Fried Rice", "Dumplings", "Peking Duck"] },
  { country: "France", dishes: ["Croissant", "Baguette", "Ratatouille", "Coq au Vin", "Crème Brûlée"] },
  { country: "Spain", dishes: ["Paella", "Tapas", "Gazpacho", "Churros", "Tortilla Española"] },
  { country: "Thailand", dishes: ["Pad Thai", "Green Curry", "Tom Yum Soup", "Som Tum", "Mango Sticky Rice"] },
  { country: "United States", dishes: ["Burgers", "Hot Dogs", "Fried Chicken", "Apple Pie", "Barbecue Ribs"] },
  { country: "Greece", dishes: ["Moussaka", "Tzatziki", "Souvlaki", "Spanakopita", "Baklava"] },
  { country: "Turkey", dishes: ["Doner Kebab", "Baklava", "Lahmacun", "Pide", "Kofte"] },
  { country: "Germany", dishes: ["Schnitzel", "Bratwurst", "Sauerkraut", "Pretzels", "Black Forest Cake"] },
  { country: "Korea", dishes: ["Kimchi", "Bibimbap", "Bulgogi", "Japchae", "Tteokbokki"] },
  { country: "Brazil", dishes: ["Feijoada", "Pão de Queijo", "Churrasco", "Brigadeiro", "Moqueca"] },
  { country: "Russia", dishes: ["Borscht", "Pelmeni", "Blini", "Beef Stroganoff", "Pirozhki"] },
  { country: "Vietnam", dishes: ["Pho", "Banh Mi", "Spring Rolls", "Bun Cha", "Cao Lau"] },
  { country: "Australia", dishes: ["Meat Pie", "Lamingtons", "Vegemite Toast", "Pavlova", "Barbecued Sausages"] },
  { country: "Egypt", dishes: ["Koshari", "Falafel", "Shawarma", "Baba Ghanoush", "Basbousa"] },
  { country: "South Africa", dishes: ["Biltong", "Bobotie", "Bunny Chow", "Chakalaka", "Melktert"] },
  { country: "United Kingdom", dishes: ["Fish and Chips", "Shepherd's Pie", "Full English Breakfast", "Scones", "Sticky Toffee Pudding"] },
  { country: "Canada", dishes: ["Poutine", "Butter Tarts", "Nanaimo Bars", "BeaverTails", "Maple Syrup Dishes"] },
  { country: "Argentina", dishes: ["Empanadas", "Asado", "Milanesa", "Dulce de Leche", "Chimichurri"] },
  { country: "Indonesia", dishes: ["Nasi Goreng", "Satay", "Gado-Gado", "Rendang", "Bakso"] },
  { country: "Malaysia", dishes: ["Nasi Lemak", "Laksa", "Roti Canai", "Char Kway Teow", "Satay"] },
];


function App() {
  const [country, setCountry] = useState("");
  const [dishes, setDishes] = useState([]);

  const handleRecommend = () => {
    const result = foodData.find(
      (item) => item.country.toLowerCase() === country.toLowerCase()
    );
    setDishes(result ? result.dishes : []);
  };

  return (
    <div
  style={{
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  }}
>
  <h1 style={{ color: "#ff6347", fontSize: "2.5rem", marginBottom: "20px" }}>
    🌍 Food Recommendation System
  </h1>
  <div style={{ marginBottom: "20px" }}>
    <input
      type="text"
      placeholder="Enter a country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      style={{
        padding: "15px",
        width: "380px",
        fontSize : "18px",
        marginRight: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        outline: "none",
      }}
    />
    <button
      onClick={handleRecommend}
      style={{
        padding: "15px 25px",
        backgroundColor: "#ff6347",
        fontSize : "18px",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#e55342")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6347")}
    >
      Recommend
    </button>
  </div>
  <div
    style={{
      marginTop: "30px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "inline-block",
      maxWidth: "400px",
    }}
  >
    <h2 style={{ color: "#333", fontSize: "1.8rem", marginBottom: "15px" }}>
      Recommended Dishes:
    </h2>
    {dishes.length > 0 ? (
      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
        {dishes.map((dish, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#ffefd5",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ffcd94",
              fontWeight: "bold",
            }}
          >
            {dish}
          </li>
        ))}
      </ul>
    ) : (
      country && (
        <p style={{ color: "#999", fontStyle: "italic" }}>
          No dishes found for "{country.toLowerCase()}".
        </p>
      )
    )}
  </div>
</div>

  );
}

export default App;
