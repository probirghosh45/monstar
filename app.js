const searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener('click', function () {
    const mealItemsName = document.getElementById('mealInput').value;
    mealDetailsInfo(mealItemsName);
})


const mealDetailsInfo = MealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.meals != null){
                displayMealInfo(data.meals);
            }else{
                alert('No data');
            }
        })
        .catch(error => alert('Check Data Connection'))
}

const displayMealInfo = mealItemsDetailsInformations => {
    const mealContainer = document.getElementById('mealCard');
    dataErase('mealCard');
    dataErase('mealItemsInfo');
    mealItemsDetailsInformations.forEach(item => {
        const foodItemName = document.createElement('div');
        foodItemName.className = 'meal-items';
        itemPosition = item.idMeal;
        const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `
        foodItemName.innerHTML = mealInformation;
        foodItemName.addEventListener('click', function () {
            mealIngredientsInfo(item.idMeal);
        });
        mealContainer.appendChild(foodItemName);
    });
    document.getElementById('mealInput').value = '';

}

const mealIngredientsInfo = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.meals != null){
                displayDetails(data.meals);
            }else{
                alert('No data');
            }
        })
        .catch(error => alert('Check Data Connection'))
}

const displayDetails = mealItemDetails => {
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    dataErase('mealItemsInfo');
    mealItemDetails.forEach(items => {
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const li = `
         <li>${items.strIngredient1}</li>
         <li>${items.strIngredient2}</li>
         <li>${items.strIngredient3}</li>
         <li>${items.strIngredient4}</li>
         <li>${items.strIngredient5}</li>
         <li>${items.strIngredient6}</li>
         <li>${items.strIngredient7}</li>
         <li>${items.strIngredient8}</li>
         <li>${items.strIngredient9}</li>
         <li>${items.strIngredient10}</li>
         <li>${items.strIngredient11}</li>
         <li>${items.strIngredient12}</li>
         <li>${items.strIngredient13}</li>
        `
        ul.innerHTML = li;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);

    });

}

const dataErase = id => {
    const mealItemsInformation = document.getElementById(id);
    mealItemsInformation.innerHTML = "";
}