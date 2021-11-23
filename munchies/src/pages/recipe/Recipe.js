import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p> Takes {recipe.cookingTime} to yum yum time </p>
        </>
      )}
    </div>
  );
};

export default Recipe;
