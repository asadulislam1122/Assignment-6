const lodedCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};
const loadCointener = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadCointener(data.plants));
};

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }

const displayLoadCointener = (catagorys) => {
  // console.log(catagorys);
  const catagoryCointener = document.getElementById("green-cointener");
  catagoryCointener.innerHTML = "";
  catagorys.forEach((catagory) => {
    console.log(catagory);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
    
    <!-- Image -->
    <div class="w-full h-40 sm:h-48 md:h-56 lg:h-60 mb-4 overflow-hidden rounded">
      <img
        class="w-full h-full object-cover"
        src="${catagory.image}"
        alt="${catagory.name}"
      />
    </div>

    <!-- Title & description -->
    <div class="flex-1">
      <h3 class="font-bold text-lg mb-1">${catagory.name}</h3>
      <p class="text-sm text-gray-600 line-clamp-3">
        ${catagory.description}
      </p>
    </div>

    <!-- Tag & price -->
    <div class="flex items-center justify-between mt-3">
      <span
        class="px-3 py-1 rounded-xl bg-teal-100 text-green-700 font-semibold text-sm"
      >
        ${catagory.category}
      </span>
      <span class="font-semibold">${catagory.price}</span>
    </div>

    <!-- Add to cart -->
    <button
      class="w-full mt-4 py-2 rounded-full bg-green-700 text-white font-medium hover:bg-green-800 transition"
    >
      Add to Cart
    </button>
  </div>
    `;
    catagoryCointener.append(card);
  });
};

// display
const displayCategories = (names) => {
  //   1 get
  const levelCategories = document.getElementById("category-list");
  levelCategories.innerHTML = "";
  //   2
  for (let name of names) {
    // console.log(name);
    // 3
    const asideCategories = document.createElement("ul");
    asideCategories.innerHTML = `
            
           <a href="#" onclick="loadCointener('${name.id}')" class="block px-3 py-1 rounded-sm text-center hover:bg-green-600 hover:text-white"> ${name.category_name} </a>
          

    `;
    levelCategories.append(asideCategories);
  }
};

lodedCategories();
//
