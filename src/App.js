import React, { useState } from "react";
import './App.css';

function App() {
  const [country, setCountry] = useState("Indian");
  const [dishes, setDishes] = useState([]);

  const fetchFoodByCountry = async (country) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      const data = await response.json();
      if (data.meals) {
        setDishes(data.meals.map((meal) => meal.strMeal)); 
      } else {
        setDishes([]);
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
      setDishes([]);
    }
  };

  const handleRecommend = () => {
    if (country.trim() !== "") {
      fetchFoodByCountry(country);
    } else {
      setDishes([]);
    }
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
            fontSize: "18px",
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
            fontSize: "18px",
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
              No dishes found for "{country}".
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
