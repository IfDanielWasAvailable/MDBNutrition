import React,{useState,useEffect,useCallback,useContext} from 'react';
import './Homepage.scss';
import { myContext } from '../Context/Context';



const Homepage = () => {

    const[searchTerm, setSearchTerm]=useState("");    
    
    
    const{ fetchHomePageMeals,meals }= useContext(myContext);

    const fetchMealsHandler= useCallback(() => {

        fetchHomePageMeals(searchTerm);
    

    },[searchTerm,fetchHomePageMeals]);
    

    return (
        <div className='home'>
            <div className="home-search">
                <input type="text" 
                placeholder="Type a meal ..."
                 value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  />
                <button onClick={fetchMealsHandler}>Search</button>
            </div>

            <div className="home-grid">
            {meals? (
                 meals.map((meal) => (
                    <div className="home-meal" key={meal.idMeal}>
                      <img src={meal.strMealThumb} alt="#" />
                     <h4>{meal.strMeal}</h4>
                     </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
      </div>
    </div>
    );
};

export default Homepage
