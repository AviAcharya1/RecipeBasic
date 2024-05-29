// src/script.js
// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form form');
    const loginForm = document.querySelector('.login-form form');
    const addRecipeForm = document.querySelector('.add-recipe-form form');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    const recipesLink = document.getElementById('recipes-link');
    const addRecipeLink = document.getElementById('add-recipe-link');
  
    signupForm.addEventListener('submit', handleSignup);
    loginForm.addEventListener('submit', handleLogin);
    addRecipeForm.addEventListener('submit', handleAddRecipe);
    signupLink.addEventListener('click', showSignupForm);
    loginLink.addEventListener('click', showLoginForm);
    logoutLink.addEventListener('click', handleLogout);
    recipesLink.addEventListener('click', showRecipeList);
    addRecipeLink.addEventListener('click', showAddRecipeForm);
  
    // Call the renderRecipeList function to display the recipes
    renderRecipeList();
  });
  
  // Fake API implementation
  const fakeAPI = {
    recipes: [
      { id: 1, title: 'Pasta Carbonara', description: 'Creamy pasta dish with bacon and egg' },
      { id: 2, title: 'Greek Salad', description: 'Fresh vegetables with feta cheese and olives' },
      { id: 3, title: 'Sushi Rolls', description: 'Assorted fresh sushi rolls with soy sauce and wasabi' },
      { id: 4, title: 'Margherita Pizza', description: 'Classic Italian pizza with tomato sauce, basil, and mozzarella' },
      { id: 5, title: 'Beef Stir-Fry', description: 'Tender beef strips with mixed vegetables and savory sauce' },
    ],
    users: [],
    loggedInUser: null,
  };
  
  // Recipe list rendering
  function renderRecipeList() {
    const recipeList = document.querySelector('.recipe-list ul');
    recipeList.innerHTML = '';
  
    // Fetch recipe data from the fake API
    const recipes = fakeAPI.recipes;
  
    recipes.forEach(recipe => {
      const listItem = document.createElement('li');
      listItem.textContent = recipe.title;
      listItem.addEventListener('click', () => showRecipeDetails(recipe));
      recipeList.appendChild(listItem);
    });
  }
  
  // Recipe details rendering
  function showRecipeDetails(recipe) {
    const recipeDetails = document.querySelector('.recipe-details');
    recipeDetails.innerHTML = `
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <!-- Add more recipe details as needed -->
    `;
  }
  
// Authentication form handling
function handleSignup(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('signup-username');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
  
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Implement signup logic using the fake API
    const existingUser = fakeAPI.users.find(user => user.email === email);
    if (existingUser) {
      alert('Email already registered. Please try a different email.');
    } else {
      const newUser = { username, email, password };
      fakeAPI.users.push(newUser);
      alert('Signup successful!');
    }
  
    // Clear form inputs
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  }
  
  function handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
  
    const usernameOrEmail = usernameInput.value;
    const password = passwordInput.value;
  
    // Implement login logic using the fake API
    const user = fakeAPI.users.find(
      user => (user.email === usernameOrEmail || user.username === usernameOrEmail) && user.password === password
    );
  
    if (user) {
      fakeAPI.loggedInUser = user;
      alert('Login successful!');
      showRecipeList();
      showAddRecipeForm();
    } else {
      alert('Invalid username/email or password.');
    }
  
    // Clear form inputs
    usernameInput.value = '';
    passwordInput.value = '';
  }
  
  function handleLogout() {
    fakeAPI.loggedInUser = null;
    alert('You have been logged out.');
    showLoginForm();
    hideRecipeList();
    hideAddRecipeForm();
  }
  
  function handleAddRecipe(event) {
    event.preventDefault();
    const titleInput = document.getElementById('recipe-title');
    const descriptionInput = document.getElementById('recipe-description');
  
    const title = titleInput.value;
    const description = descriptionInput.value;
  
    // Add the new recipe to the fake API
    const newRecipe = { id: fakeAPI.recipes.length + 1, title, description };
    fakeAPI.recipes.push(newRecipe);
  
    // Clear form inputs
    titleInput.value = '';
    descriptionInput.value = '';
  
    // Render the updated recipe list
    renderRecipeList();
  }
  
  function showSignupForm() {
    document.querySelector('.signup-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.recipe-list').style.display = 'none';
    document.querySelector('.recipe-details').style.display = 'none';
    document.querySelector('.add-recipe-form').style.display = 'none';
  }
  
  function showLoginForm() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.recipe-list').style.display = 'none';
    document.querySelector('.recipe-details').style.display = 'none';
    document.querySelector('.add-recipe-form').style.display = 'none';
  }
  
  function showRecipeList() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.recipe-list').style.display = 'block';
    document.querySelector('.recipe-details').style.display = 'none';
    document.querySelector('.add-recipe-form').style.display = 'none';
  }
  
  function showAddRecipeForm() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.recipe-list').style.display = 'none';
    document.querySelector('.recipe-details').style.display = 'none';
    document.querySelector('.add-recipe-form').style.display = 'block';
  }
  
  function hideRecipeList() {
    document.querySelector('.recipe-list').style.display = 'none';
  }
  
  function hideAddRecipeForm() {
    document.querySelector('.add-recipe-form').style.display = 'none';
  }
  