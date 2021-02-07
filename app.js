fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = meals => {
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        console.log(meal.idMeal);
        
    }
}