"use strict";

// IIFE (Immediately Invoked Function Expression)
(function () {

    // Function to dynamically inject content into the Home page
    function DisplayHomePage() {
        // Select the <main> element (previously <div class="container">)
        let MainContent = document.getElementsByTagName("main")[0]; // 'main' is more appropriate for HTML5 semantics

        // 1. Create the new paragraph element
        let newParagraph = document.createElement("p");

        // 2. Configure the new paragraph element (ID and Bootstrap class)
        newParagraph.id = "dynamicParagraph"; // Assigning an ID
        newParagraph.classList.add("mt-3"); // Adding Bootstrap margin-top class

        // 3. Update the paragraph's text content using a template string
        let FirstString = "Welcome to INFT 2202!";
        let SecondString = `${FirstString} This content is dynamically injected using JavaScript and template strings.`;
        newParagraph.textContent = SecondString; // Adding text content to the paragraph

        // 4. Append the new paragraph to the main content
        MainContent.appendChild(newParagraph);

        // 5. Dynamically create an HTML article element
        let newArticle = document.createElement("article");

        // Add content to the article using template strings
        newArticle.innerHTML = `
            <h2>Dynamic Article Heading</h2>
            <p>This article was created dynamically using JavaScript and template strings.</p>
        `;

        // Append the article to the main content
        MainContent.appendChild(newArticle);
    }

    // Function to handle About page (for other pages, similar functions can be added)
    function DisplayAboutPage() {
        console.log("Called DisplayAboutPage");
    }

    // Event listener for the About Us button
    let aboutUsBtn = document.getElementById("AboutUsBtn");
    if (aboutUsBtn) {
        aboutUsBtn.addEventListener("click", function () {
            location.href = "about.html";
        });
    }

    // Placeholder functions for other pages
    function DisplayProductsPage() {
        console.log("Called DisplayProductsPage");
    }

    function DisplayServicesPage() {
        console.log("Called DisplayServicesPage");
    }

    function DisplayContactsPage() {
        console.log("Called DisplayContactsPage");
    }

    // Function to start the app and show the appropriate content based on the document title
    function Start() {
        console.log("Start App..");

        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact":
                DisplayContactsPage();
                break;
        }
    }

    // Add event listener to run the Start function when the page is loaded
    window.addEventListener("load", Start);

})();
