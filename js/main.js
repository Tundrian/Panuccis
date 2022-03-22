// Dom Selectors
let mobileNavIcon = document.querySelector(".mobileNavIcon")
let menuSelection = document.querySelector(".menuSelectionNav")

// Dom Functions
const toggleMenuItems = (e) => {
    console.log("clicked")
    let pizza = document.querySelector(".pizzas")
    let sides =  document.querySelector(".sides")
    let drinks =  document.querySelector(".drinks")
    let desserts =  document.querySelector(".desserts")
    
    pizza.style.display = "none"
    sides.style.display = "none"
    drinks.style.display = "none"
    desserts.style.display = "none"
    document.querySelector(".activeSelection").classList.remove("activeSelection")
    
    // console.log(e.target.id)
     switch(e.target.id){
         case 'menuPizza':
            pizza.style.display = "flex"
            break
        case 'menuSides':
            sides.style.display = "flex"
            break
        case 'menuDrinks':
            drinks.style.display = "flex"
            break
        case 'menuDesserts':
            desserts.style.display = "flex"
            break
     }
     e.target.classList.add("activeSelection")
    
     
}

// Event Listeners
mobileNavIcon.addEventListener("click", mobileNavToggle = () => {
    document.querySelector(".nav-mobileMenu").classList.toggle("hidden")
 })
 menuSelection.addEventListener("click", toggleMenuItems)





 

 
