const drinks = [
    { name: "Living Waters", image: "images/livingwaters.jpg", description: 'A refreshing blend of orange juice, blue curacao, lemonade syrup, and soda water, finished with mint and an orange slice.', recipe: "50 ml Orange Juice\n15 ml Blue Curacao Syrup (last)\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice (optional)\nSoda Water to fill up to 400 ml\nGarnish: Fresh mint and an orange slice" },
    { name: "Very Berry Blessed", image: "images/veryberryblessed.jpg", description: 'A sweet and tart strawberry juice mocktail with grenadine, bitter lemon, lime juice, and soda water, garnished with frozen berries and mint.', recipe: "80 ml Strawberry Juice\n15 ml Grenadine Syrup\n10 ml Bitter Lemon Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Frozen berries and mint sprig" },
    { name: "Heavenly Harmony", image: "images/heavenlyharmony.jpg", description: 'A delightful mix of strawberry juice, blue curacao, lemonade syrup, lime juice, and soda water, with optional ginger ale syrup and frozen berries. Garnished with mint.', recipe: "80 ml Strawberry Juice\n15 ml Blue Curacao Syrup\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice\nSoda Water\nOptional: 10 ml Ginger Ale Syrup\nGarnish: Fresh mint sprig and frozen berries" },
    { name: "Garden of Eden", image: "images/gardenofeden.jpg", description: 'Mango and orange juice blend with pineapple syrup, blue curacao, lime juice, and bitter lemon syrup, topped with soda water, mint, and frozen berries.', recipe: "60 ml Mango Juice\n40 ml Orange Juice\n15 ml Pineapple Syrup\n10 ml Blue Curacao Syrup\n10 ml Fresh Lime Juice\n10 ml Bitter Lemon Syrup\nSoda Water\nGarnish: Mint leaves and frozen berries" },
    { name: "Adam’s Apple", image: "images/adamsapple.jpg", description: 'A crisp combination of orange juice, pink guava juice, green apple syrup, lime juice, and bitter lemon syrup, finished with soda water, mint, and a lime slice.', recipe: "50 ml Orange Juice\n50 ml Pink Guava Juice\n15 ml Green Apple Syrup\n10 ml Fresh Lime Juice\n10 ml Bitter Lemon Syrup\nSoda Water\nGarnish: Mint leaves and a lime slice" },
    { name: "Eve’s Apple", image: "images/evesapple.jpg", description: 'A fruity and fresh mix of green apple syrup, orange juice, mango juice, ginger ale syrup, and lime juice, garnished with frozen berries, mint sprig, and a lime twist.', recipe: "25-30 ml Green Apple Syrup\n40 ml Orange Juice\n40 ml Mango Juice\n10 ml Ginger Ale Syrup\n5-10 ml Fresh Lime Juice (to taste)\nSoda Water\nGarnish: Frozen berries, mint sprig, and lime twist" },
    
    { name: "Pineapple Paradise", image: "images/pineappleparadise.jpg", description: 'A tropical treat made with pineapple syrup, mango juice, pink guava juice, lime juice, and soda water, garnished with mint and a pineapple slice (or lime wedge).', recipe: "30 ml Pineapple Syrup\n60 ml Mango Juice\n40 ml Pink Guava Juice\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Mint sprig and a pineapple slice (or lime wedge)" },
    { name: "Man(go) on Fire", image: "images/mangoonfire.jpg", description: 'A vibrant mix of mango juice, strawberry juice, lemonade syrup, and grenadine, topped with soda water and garnished with frozen berries and a lime wedge.', recipe: "50 ml Mango Juice\n50 ml Strawberry Juice\n20 ml Lemonade Mix Syrup\n10 ml Grenadine (last)\nSoda Water\nGarnish: Frozen berries and lime wedge" },
    { name: "Man 'Go Dream (Joseph Edition)", image: "images/mangodream.jpg", description: 'A sweet tropical blend of mango juice, pineapple syrup, blue curacao syrup, and lime juice, finished with soda water and garnished with pineapple and mint.', recipe: "70 ml Mango Juice\n30 ml Pineapple Syrup\n15 ml Blue Curacao Syrup\n10 ml Fresh Lime Juice\nSoda Water to fill up to 400 ml\nGarnish: Pineapple slice and fresh mint" },
    { name: "Amazing Guava Grace", image: "images/amazingguavagrace.jpg", description: 'Pink guava juice, orange juice, lemonade mix syrup, lime juice, and soda water, garnished with an orange slice and fresh mint.', recipe: "60 ml Pink Guava Juice\n30 ml Orange Juice\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Orange slice and mint" },
    { name: "Tropical Testimony", image: "images/tropicaltestimony.jpg", description: 'A tropical fusion of mango and orange juices, pineapple and green apple syrups, lime juice, and soda water, garnished with mint and a lime wedge.', recipe: "60 ml Mango Juice\n40 ml Orange Juice\n15 ml Pineapple Syrup\n15 ml Green Apple Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Mint sprig and a lime wedge" },
    { name: "Citrus Christ", image: "images/citruschrist.jpg", description: 'A zesty mix of orange juice, lemonade mix syrup, lime juice, grenadine, and soda water, garnished with frozen berries and a lime wedge.', recipe: "50 ml Orange Juice\n30 ml Lemonade Mix Syrup\n10 ml Lime Juice\n10 ml Grenadine\nSoda Water\nGarnish: Frozen berries and lime wedge" },
];

const menuGrid = document.getElementById('menuGrid');

menuGrid.innerHTML = '<h2 class="menu-title"><span class="script">The</span> Mocktail Menu</h2>';

drinks.forEach(drink => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}">
        
        <div class="card-content">
            
            <h2>${drink.name}</h2>
            <p class="description">${drink.description}</p>
            <p class="click-instruction">Click for recipe</p>
            
        </div>
        <div class="recipe">
        ${drink.recipe.replace(/\n/g, '<br>')}
        <br/>
        <button class="order-button" data-drink="${drink.name}">Order</button>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('open'));

    menuGrid.appendChild(card);
});

// EmailJS init
emailjs.init("hXPDQPliREUdY3cA0");

// Inject popup HTML into the page
const popup = document.createElement("div");
popup.id = "orderPopup";
popup.className = "popup hidden";
popup.innerHTML = `
  <div class="popup-content">
    <h3>Order <span id="drinkNameSpan"></span></h3>
    <input type="text" id="userNameInput" placeholder="Enter your name" />
    <button id="submitOrder">Send Order</button>
    <button id="cancelOrder">Cancel</button>
  </div>
`;
document.body.appendChild(popup);

// Event handling
const popupEl = document.getElementById("orderPopup");
const drinkNameSpan = document.getElementById("drinkNameSpan");
const userNameInput = document.getElementById("userNameInput");
let selectedDrink = "";

function showPopup(drinkName) {
  selectedDrink = drinkName;
  drinkNameSpan.textContent = drinkName;
  popupEl.classList.remove("hidden");
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("order-button")) {
    const drink = event.target.getAttribute("data-drink");
    showPopup(drink);
    event.stopPropagation();
  }
});

document.getElementById("submitOrder").addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) return alert("Please enter your name.");

  emailjs.send("service_yngam5u", "template_0m0kemx", {
    name: name,
    drink: selectedDrink,
    email: "sharondigwe@gmail.com"
  }).then(() => {
    alert("Order sent!");
    popupEl.classList.add("hidden");
    userNameInput.value = "";
  }).catch((error) => {
    alert("Failed to send order.");
    console.error("EmailJS error:", error);
  });
});

document.getElementById("cancelOrder").addEventListener("click", () => {
  popupEl.classList.add("hidden");
  userNameInput.value = "";
});
