//   const callApi = async () => {
//       let response = await fetch ('https://reqres.in/api/unknown');
//       let data = await response.json();
//       return data;
//   };

//   fetch('https://reqres.in/api/unknown')
//      .then((response) => {
//       response.json().then((data) =>{
//           return data;
//       });
//   });

//   fetch('https://reqres.in/api/unknown')
//      .then(response => response.json())
//      .then(data => console.log(data));
  

const myStorage = window.localStorage;

function addItem(item){
    const itemHTML = 
    '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' +
        item.name+'</h5>\n' +
        '        <p class="card-text">' +
        item.year+'</p>\n' +
        '        <div style="background:'+item.color+';">'+
        item.color+'</div>\n' +
        '        <p class="card-text">' +        
        item.pantone_value+'</p>\n' +      
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



// function fetchColorsList(){
//     fetch('https://reqres.in/api/unknown')
//     .then(response => response.json())
//     .then(responseJSONed => {
//      let colorList = responseJSONed.data;
//      for (i=0; i<colorList.length; i++){
//            addItem(colorList[i]);
//      }
//     });
// }


function fetchColorsList(){
    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(responseJSONed => {
     let colorList = responseJSONed.data;
     myStorage.setItem("colorList", JSON.stringify(colorList));
     for (i=0; i<colorList.length; i++){
        addItem(colorList[i]);
     };
});
};


function loadColorsFromStorage(){
   let color2=JSON.parse(myStorage.getItem("colorList"));
   for (j=0; j<color2.length; j++){
    addItem(color2[j]);
    };
};

// loadColorsFromStorage();

document.querySelector('#fetchColorsListBtn').addEventListener('click', fetchColorsList);
// fetchColorsList();

document.querySelector('#clear').addEventListener('click', localStorage.clear())


// this is not working
