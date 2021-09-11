const description = document.querySelectorAll('.description-display');
for (let element of description.values()) {
    let content = element.innerText;
    if(content.length > 250) {
        content = content.slice(0, 250) + '<a href="#">...</a>'
    }
    element.innerHTML = content;
}

// const ratings = document.querySelectorAll('.rating-display .value');
// for (let rating of ratings.values())  {
//     let ratingValue = parseFloat(rating.innerText);
//     if(ratingValue > 4.7) {
//         rating.classList.add('high-rating');
//         rating.classList.remove('value');
//     }
// }

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement('div');
newElement.innerText = `${numberParks} exciting parks to visit!`;
// newElement.classList.add('header-statement');
newElement.style.color = 'skyblue';
newElement.style.fontSize = '3rem';
const header = document.querySelector('header');
header.appendChild(newElement)

// const main = document.querySelector('main');
// const park = main.querySelector('.park-display');
// main.removeChild(park);

const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
    event.preventDefault(); // default behavior of link is to follow the link when clicked. This stops it
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = ''; // content within 'main' removed
    const parksArray = Array.from(parksList) // Array.from() method converts array-like structure to an array
    
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector('h2').innerText;
        const parkBName = parkB.querySelector('h2').innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    });
    parksArray.forEach((park) => {
        main.appendChild(park);
    })
  });

const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector('.rating-display .value').innerText;
    console.log(parkARating)
    const parkBRating = parkB.querySelector('.rating-display .value').innerText;
    return parkBRating - parkARating
}

const ratingSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector('main');
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = '';
    const parksArray = Array.from(parksList);
    sortedArray = parksArray.sort(sortByRating);
    sortedArray.forEach((park) => {
        main.appendChild(park);
    })
}   

const ratingSorter = document.querySelector('#rating-sorter');

ratingSorter.addEventListener('click', ratingSorterClickHandler);

// the point where all the code starts
const main = () => {
    // select the nameSorter link
    const nameSorter = document.querySelector("#name-sorter");
  
    // add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    // select the ratingSorter link
    const ratingSorter = document.querySelector("#rating-sorter");
  
    // add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
  
    // select all the buttons for all the parks
    const allBtns = document.querySelectorAll(".rate-button");
  
    // iterate the list of buttons and add an event handler to each
    allBtns.forEach((btn) => {
      btn.addEventListener("click", favoriteButtonClickHandler);
    });
  };
  
  // Add event listener for DOMContentLoaded
  window.addEventListener("DOMContentLoaded", main);
