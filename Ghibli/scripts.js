// const myStorage = window.localStorage;

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'ghibli_logo_gold.png'

const container = document.createElement('div'); 
container.setAttribute('class', 'container')  //what is the container for? 

app.appendChild(logo)
app.appendChild(container)

document.querySelector('#listFilmsBtn').addEventListener('click', listFilms);

function listFilms() {
  fetch('https://ghibliapi.herokuapp.com/films')
   .then(response => response.json())
   .then(responseJSONed => {
   let dataFilm = responseJSONed.data;
  //  myStorage.setItem("root", JSON.stringify(dataFilm));
   if (dataFilm) {
   dataFilm.forEach((movie) => {
    console.log("testing");
  //   // Create a div with a card class
  //   const card = document.createElement('div')
  //   card.setAttribute('class', 'card')
  
  //   // Create an h1 and set the text content to the film's title
  //   const h1 = document.createElement('h1')
  //   h1.textContent = movie.title
  
  //   // Create a p and set the text content to the film's description
  //   const p = document.createElement('p')
  //   movie.description = movie.description.substring(0, 300) // Limit to 300 chars
  //   p.textContent = `${movie.description}...` // End with an ellipses
  
  //   // Append the cards to the container element
  //   container.appendChild(card)
  
  //   // Each card will contain an h1 and a p
  //   card.appendChild(h1)
  //   card.appendChild(p)

  });

   } else {
    const errorMessage = document.createElement('alert')
    errorMessage.textContent = `not working!~~`
    errorMessage.style.color = "red"; 
    app.appendChild(errorMessage)
   };
   });
  }
 
//  function loadFilmsFromStorage(){
  
//     let dataFilm2=JSON.parse(myStorage.getItem("root"));
//     if(dataFilm2){
//     for (j=0; j<dataFilm2.length; j++){
//      console.log(dataFilm2[j]);
//      };
//     } else {
//       "error horror"
//     }
//  };

//  loadFilmsFromStorage()





