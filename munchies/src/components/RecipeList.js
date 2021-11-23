import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 90)}...</div>
          {/* <h3>{recipe.image}</h3> */}
          <Link to={`/recipes/${recipe.id}`}>Yum Yum</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
