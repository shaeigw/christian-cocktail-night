const drinks = [
    { name: "Living Waters", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/LivingWaters.jpg", recipe: "50 ml Orange Juice\n15 ml Blue Curacao Syrup (last)\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice (optional)\nSoda Water to fill up to 400 ml\nGarnish: Fresh mint and an orange slice" },
    { name: "Very Berry Blessed", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/VeryBerryBlessed.jpg", recipe: "80 ml Strawberry Juice\n15 ml Grenadine Syrup\n10 ml Bitter Lemon Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Frozen berries and mint sprig" },
    { name: "Heavenly Harmony", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/HeavenlyHarmony.jpg", recipe: "80 ml Strawberry Juice\n15 ml Blue Curacao Syrup\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice\nSoda Water\nOptional: 10 ml Ginger Ale Syrup\nGarnish: Fresh mint sprig and frozen berries" },
    { name: "Garden of Eden", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/GardenOfEden.jpg", recipe: "60 ml Mango Juice\n40 ml Orange Juice\n15 ml Pineapple Syrup\n10 ml Blue Curacao Syrup\n10 ml Fresh Lime Juice\n10 ml Bitter Lemon Syrup\nSoda Water\nGarnish: Mint leaves and frozen berries" },
    { name: "Adam’s Apple", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/AdamsApple.jpg", recipe: "50 ml Orange Juice\n50 ml Pink Guava Juice\n15 ml Green Apple Syrup\n10 ml Fresh Lime Juice\n10 ml Bitter Lemon Syrup\nSoda Water\nGarnish: Mint leaves and a lime slice" },
    { name: "Eve’s Apple", image: "https://raw.githubusercontent.com/shaeigw/christian-cocktail-night/refs/heads/main/EvesApple.jpg", recipe: "25-30 ml Green Apple Syrup\n40 ml Orange Juice\n40 ml Mango Juice\n10 ml Ginger Ale Syrup\n5-10 ml Fresh Lime Juice (to taste)\nSoda Water\nGarnish: Frozen berries, mint sprig, and lime twist" },
    
    { name: "Pineapple Paradise", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/PineappleParadise.jpg", recipe: "30 ml Pineapple Syrup\n60 ml Mango Juice\n40 ml Pink Guava Juice\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Mint sprig and a pineapple slice (or lime wedge)" },
    { name: "Man(go) on Fire", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/MangoOnFire.jpg", recipe: "50 ml Mango Juice\n50 ml Strawberry Juice\n20 ml Lemonade Mix Syrup\n10 ml Grenadine (last)\nSoda Water\nGarnish: Frozen berries and lime wedge" },
    { name: "Man 'Go Dream (Joseph Edition)", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/ManGoDream.jpg", recipe: "70 ml Mango Juice\n30 ml Pineapple Syrup\n15 ml Blue Curacao Syrup\n10 ml Fresh Lime Juice\nSoda Water to fill up to 400 ml\nGarnish: Pineapple slice and fresh mint" },
    { name: "Amazing Guava Grace", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/AmazingGuavaGrace.jpg?raw=true", recipe: "60 ml Pink Guava Juice\n30 ml Orange Juice\n15 ml Lemonade Mix Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Orange slice and mint" },
    { name: "Tropical Testimony", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/TropicalTestimony.jpg", recipe: "60 ml Mango Juice\n40 ml Orange Juice\n15 ml Pineapple Syrup\n15 ml Green Apple Syrup\n10 ml Fresh Lime Juice\nSoda Water\nGarnish: Mint sprig and a lime wedge" },
    { name: "Citrus Christ", image: "https://github.com/shaeigw/christian-cocktail-night/blob/main/CitrusChrist.jpg", recipe: "50 ml Orange Juice\n30 ml Lemonade Mix Syrup\n10 ml Lime Juice\n10 ml Grenadine\nSoda Water\nGarnish: Frozen berries and lime wedge" },
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
            <p class="click-instruction">Click for recipe</p>
        </div>
        <div class="recipe">${drink.recipe.replace(/\n/g, '<br>')}</div>
    `;

    card.addEventListener('click', () => card.classList.toggle('open'));

    menuGrid.appendChild(card);
});
