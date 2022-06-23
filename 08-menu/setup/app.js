const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];



// Function that allows us to display our current menu items to the DOM
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {

    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}

// Function that allows us to filter menu categories and be left with only the unique ones
function getUniqueCategories(menuItems) {
  let uniqueItems = ['all']
  menuItems.forEach(item => uniqueItems.push(item.category))
  // Use set to ensure that the values are unique
  return [...new Set(uniqueItems)]
}

// Function that allows us display only unique property buttons
function displayProperty(menuCategories) {
  // Where we will place our elements
  const sectionMenu = document.querySelector('.menu')

  // Make sure the properties are unique
  const properties = getUniqueCategories(menuCategories)

  // Creating the button container
  let btnContainer = document.createElement('div')
  btnContainer.className = 'btn-container'


  // Loop through each unique property
  properties.forEach(category => {
    // Create a button with the class name "filter-btn" and custom attribute data-id equal to the unique category
    let btn = document.createElement('button')
    btn.className = 'filter-btn'
    btn.setAttribute('data-id', category)
    btn.textContent = category
    // Place each button inside of our existing btn-container div (that we have created above)
    btnContainer.appendChild(btn)
  })

  // Placing our btn-container (with each property button nested inside) 
  // => append that to the HTML section dedicated to displaying our menu items
  sectionMenu.insertBefore(btnContainer, sectionMenu.children[1])
}




// Once the page has loaded 
// Run the functions that will allow us to display our menu items and unique pro 
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)


})

displayProperty(menu)

// Getting elements out of our HTML
const sectionCenter = document.querySelector('.section-center')
const filterBtns = document.querySelectorAll('.filter-btn')


// filter button functionality
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = event.currentTarget.dataset.id
    console.log('clicking buttons')
    category === 'all' ? displayMenuItems(menu) :
                        displayMenuItems(menu.filter(item => item.category === `${category}` ))
  })
})