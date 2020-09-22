# JS - Fetch & Web Storage APIs


Part 1: Using the Fetch API
Download the js folder and the index.html files from this repository.
Open the index.html in the browser and observe what it does.
Open the js folder and the index.html with your code editor of choice and analyze the functionality and the code.
Implement the function fetchColorsList using the fetch API to download the full colors list from the following endpoint: https://reqres.in/api/unknown
Connect the fetchColorsList with the addItem funciton so the colors list is filled and displayed in the index.html page.
Part 2: Using the Web Storage API
Modify the fetchColorsList function so when the data is downloaded from the API, the colors list is stored using the local storage.
Implement the loadColorsFromStorage function so the color values are loaded from the local storage.
Open the developer tools and verify that the data is stored in the local storage.
Test your application without connection to the internet and verify that the colors list is loaded.
Challenge Yourself
Add a clear button that removes all the elements from the list.
Add a load button that calls the fetchColorsList function and loads the colors again.
