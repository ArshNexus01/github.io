
"use strict";
// IIFE  , immidieately invoked functional experession
// its a function which calls itself , we dont need client side code to call , irt calls itself when its lioaded

(function () {

    function DisplayHomePage() {
        // attach to the dom
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = ` ${FirstString} is my second paragraph`;
        MainParagraph.textContent = SecondString;

        //attach to the dom
        MainContent.appendChild(MainParagraph);

        let DocumentBody= document.body;
        //<article><p></p></article>
        let Article = document.createElement("article");
        let Paragraph = `<p`
        Paragraph.textContent = "This is my first paragraph";
        Article.appendChild(Paragraph);
        DocumentBody.appendChild(Article);





    }

    function DisplayAboutPage() {
        console.log(" Called DisplayAboutPage");
    }

    let aboutUsBtn = document.getElementById("AboutUsBtn");
    aboutUsBtn.addEventListener("click", function () {
        location.href = "about.html";
    })

    let MainContent = document.getElementById("MainContent")[0];

    //<p id="MainParagraph" class="mt-3"> This is my first paragraph</p>
    let MainParagraph = document.getElementById("MainParagraph");


    function DisplayProductsPage() {
        console.log(" Called DisplayProductsPage");

    }
    function DisplayServicesPage() {
        console.log(" Called DisplayServicesPage");
    }
    function DisplayContactsPage() {
        console.log(" Called DisplayContactsPage");
    }

    function Start () {
        console.log("Start App..");

        switch(document.title){
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
    window.addEventListener("load", Start);



}) () // these para make a call for the function
