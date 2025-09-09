const lodedCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// button bg remove
const removeActive = () => {
  const treeButton = document.querySelectorAll(".tree-btn");
  // console.log(treeButton);
  treeButton.forEach((btn) => btn.classList.remove("active"));
};

const loadCointener = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickTree = document.getElementById(`all-trees-${id}`);

      // console.log(clickTree);
      clickTree.classList.add("active");
      displayLoadCointener(data.plants);
    });
};
// 1111111111111111111111111111111111111111

// tree name modal
const detailTrees = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  // console.log(url);
  const res = await fetch(url);
  const treeDetails = await res.json();
  displayTreeDtails(treeDetails.plants);
};
const displayTreeDtails = (catagory) => {
  console.log(catagory);
  const detailsTrees = document.getElementById("details-cointener");
  detailsTrees.innerHTML = `<div>
             <h1 class="font-bold text-xl">${catagory.name}</h1>
           <div class="w-full h-40 sm:h-48 md:h-56 lg:h-60 mb-4 overflow-hidden rounded">
      <img
        class="w-full h-full object-cover"
        src="${catagory.image}"
        
      />
    </div>
            <p class="text-xl font-semibold">
              Category: <span class="text-gray-500 text-[20px]">${catagory.category}</span>
            </p>
            <p class="text-xl font-semibold">
              Price: <span class="text-gray-500 text-[20px]">${catagory.price}</span>
            </p>
            <p class="text-xl font-semibold">
              Description:
              <span class="text-gray-500 text-[20px]"
                >${catagory.description}</span
              >
            </p>
           </div>`;
  document.getElementById("my_modal_5").showModal();
};

const displayLoadCointener = (catagorys) => {
  // console.log(catagorys);
  const catagoryCointener = document.getElementById("green-cointener");
  catagoryCointener.innerHTML = "";
  catagorys.forEach((catagory) => {
    // console.log(catagory);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
    
    <!-- Image -->
    <div class="w-full h-40 sm:h-48 md:h-56 lg:h-60 mb-4 overflow-hidden rounded">
      <img
        class="w-full h-full object-cover"
        src="${catagory.image}"
        
      />
    </div>

    <!-- Title & description -->
    <div class="flex-1">
     <button> <h3 onclick="detailTrees(${catagory.id})" class=" font-bold text-lg mb-1">${catagory.name}</h3></button>
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
// 222222222222222222222222222222222222222222222222222222222222222222

const loadCointener2 = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadCointener2(data.plants));
};

const displayLoadCointener2 = (catagorys) => {
  // console.log(catagorys);
  const catagoryCointener = document.getElementById("green-cointener");
  catagoryCointener.innerHTML = "";
  catagorys.forEach((catagory) => {
    // console.log(catagory);
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
// 2222222222222222222222222222222222222222222
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
            
           <a href="#" id="all-trees-${name.id}" onclick="loadCointener('${name.id}')" class=" tree-btn block px-3 py-1 rounded-sm text-center hover:bg-green-600 hover:text-white"> ${name.category_name} </a>
          

    `;
    levelCategories.append(asideCategories);
  }
};

lodedCategories();
loadCointener2(1);
