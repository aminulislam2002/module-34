const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  //   console.log(meals);
  // Step 01: get meal container
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    // Step 02: create meal div
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    console.log(meal);
    // Step 03: set content of the  child
    mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <!-- Button trigger modal -->
                <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                Details
                </button>
      </div>
    `;

    // Step 04: appendChild
    mealContainer.appendChild(mealDiv);
  });
};

const searchMeal = () => {
  const searchText = document.getElementById("search-filed").value;
  loadMeals(searchText);
};

// const loadMealDetails = (idMeal) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayMealDetails(data.meals[0]));
// };

// async wait
const loadMealDetails2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetails(data.meals[0]);
};

const displayMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  const mealsDetails = document.getElementById("mealDetailsBody");
  mealsDetails.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  `;
};

loadMeals("fish");

