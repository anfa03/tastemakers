import React, { useEffect, useState } from 'react'

const Popular = () => {
    const [popular,setPopular]= useState([]);
    useEffect(()=>{
        getPopular();
    },[])
    const getPopular=async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setPopular(data.recipes)

    }
  return (
    <div>
      {popular.map((recipes) => {
        return(
            <div key={recipes.id}>
                <p>{recipes.title}</p>

            </div>
        );
      })}
    </div>
  );
}

export default Popular
