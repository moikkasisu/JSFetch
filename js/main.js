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
  



function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});

  //TODO implement this function
  document.querySelector('#fetchColorsListBtn').addEventListener('click', fetchColorsList);
  
function fetchColorsList(){
    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(json=>console.log(json))
  }

function loadColorsFromStorage(){
    //TODO implement this function
}

fetchColorsList();
loadColorsFromStorage();
