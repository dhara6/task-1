// script.js

document.addEventListener("DOMContentLoaded", async function () {
    const apiUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();

        // Sort data based on descending popularity
        data.sort((a, b) => b.Popularity - a.Popularity);

        // Display data
        displayData(data);
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }

    function displayData(data) {
        const appContainer = document.getElementById("app");

        // Create a list to display the data
        const list = document.createElement("ul");

        // Loop through the data and create list items
        data.forEach(product => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.Title} - $${product.Price}`;
            list.appendChild(listItem);
        });

        // Append the list to the app container
        appContainer.appendChild(list);
    }
});
