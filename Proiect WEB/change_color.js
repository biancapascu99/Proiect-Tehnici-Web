function schimb_light() {
    var element = document.getElementById("id_mod");
    //console.log(window.location.pathname);

    document.getElementById("id_mod").href = "style_light_mode.css";
    document.getElementById('img_sigla').src = 'poze_light_mode/sigla.svg';
    if (typeof(Storage) !== "undefined") {

        localStorage.tema = "style_light_mode.css";


    }

}

function schimb_red() {
    var element = document.getElementById("id_mod");
    //console.log(window.location.pathname);

    document.getElementById("id_mod").href = "style_red.css";
    document.getElementById('img_sigla').src = 'poze_mod_culoare_2/sigla_general.svg';
    // if (document.getElementById('sigla_biography').src != NULL)
    //     document.getElementById('sigla_biography').src = 'poze_mod_culoare_2/sigla_biography.svg';
    // else
    // if (document.getElementById('sigla_books').src != NULL)
    //     document.getElementById('sigla_books').src = 'poze_mod_culoare_2/sigla_books.svg';

    if (typeof(Storage) !== "undefined") {

        localStorage.tema = "style_red.css";


    }

}

function checkCookies() {
    var mode = localStorage.tema;
    if (mode === "style_red.css") {
        schimb_red();
    }
    if (mode === "style_light_mode.css") {
        schimb_light();
    }

}
/* When the user clicks on the button, 
                                                                                               toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}