/*
    Odyssey Permits
    Main JavaScript
*/


document.addEventListener("DOMContentLoaded", function () {


    // Highlight current page in navigation

    const currentPage = window.location.pathname.split("/").pop();


    const navLinks = document.querySelectorAll("nav a");


    navLinks.forEach(link => {


        const linkPage = link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }


    });



    // Smooth scroll for internal links

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {


        anchor.addEventListener("click", function(e){


            const target = document.querySelector(this.getAttribute("href"));


            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }


        });


    });



    // Simple form protection

    const forms = document.querySelectorAll("form");


    forms.forEach(form => {


        form.addEventListener("submit", function(){


            const button = form.querySelector("button[type='submit']");


            if(button){

                button.innerHTML = "Sending...";

                button.disabled = true;

            }


        });


    });



});