const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".fetch-section .cities");

const apiKey = "0768a4e78af72dde6ad5e5ddc1ac8c17";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

/* copied from the sample
  // //check if there's already a city
  // const listItems = list.querySelectorAll(".fetch-section .city");
  // const listItemsArray = Array.from(listItems);

  // if (listItemsArray.length > 0) {
  //   const filteredArray = listItemsArray.filter(el => {
  //     let content = "";
  //      if (inputVal.includes(",")) {
  //        if (inputVal.split(",")[1].length > 2) {
  //         inputVal = inputVal.split(",")[0];
  //         content = el
  //           .querySelector(".city-name span")
  //           .textContent.toLowerCase();
  //       } else {
  //         content = el.querySelector(".city-name").dataset.name.toLowerCase();
  //       }
  //     } else {
  //      content = el.querySelector(".city-name span").textContent.toLowerCase();
  //     }
  //     return content == inputVal.toLowerCase();
  //   });

  //   if (filteredArray.length > 0) {
  //     msg.textContent = `You already know the weather for ${
  //       filteredArray[0].querySelector(".city-name span").textContent
  //     } ...otherwise please add in country code like "Melbourne, AU"`;
  //     form.reset();
  //     input.focus();
  //     return;
  //   }
  // }
  */
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  //fetch openweathermap 
  const searchAPI = () => {
    fetch(url)
     .then(response => response.json())
     .then(responseJSONed => {
      render(responseJSONed.main, responseJSONed.name, responseJSONed.sys,responseJSONed.weather);
    
      let cityweather = responseJSONed.data;
   
      if (cityweather) {
       cityweather.forEach((city) => {
  
        // create an li
      const li = document.createElement("li");
      li.classList.add("city");
  
       // Create a div with a card class
      
      const card = document.createElement('div')
      card.setAttribute('class', 'card')        
    
      // Create an h1 and set the text content to city.main.temp
      const h1 = document.createElement('h1')
      h1.textContent = city.main.temp
    
      // Create a p and set the text content to city weather details
      const p = document.createElement('p')
      p.textContent = `${city.main}${city.name}${city.sys.country}${city.weather}`
    
      // Append the cards to the container element
      container.appendChild(card)
    
      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
      });
  // .catch(console.error);

   } else {
 const errorMessage = document.createElement('alert')
 errorMessage.textContent = `not working!~~`
 errorMessage.style.color = "red"; 
 app.appendChild(errorMessage)
 };
});
  
    searchAPI();
    
    const render = (main, name, sys, weather) => {
      console.log(main);
      console.log(name);
      console.log(sys);
      console.log(weather);
    };

  };
  });
  
  
