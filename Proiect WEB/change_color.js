function schimb_light() {
    var element = document.getElementById("id_mod");
    document.getElementById("id_mod").href = "style_light_mode.css";
    document.getElementById('img_sigla').src = 'poze_light_mode/sigla.svg';
    if (typeof(Storage) !== "undefined") {

        localStorage.tema = "style_light_mode.css";


    }

}

function schimb_red() {
    var element = document.getElementById("id_mod");
    document.getElementById("id_mod").href = "style_red.css";
    document.getElementById('img_sigla').src = 'poze_mod_culoare_2/sigla_general.svg';
    if (typeof(Storage) !== "undefined") {

        localStorage.tema = "style_red.css";


    }

}

function schimb_dark() {
    var element = document.getElementById("id_mod");
    document.getElementById("id_mod").href = "style.css";
    document.getElementById('img_sigla').src = 'poze/sigla.svg';
    if (typeof(Storage) !== "undefined") {

        localStorage.tema = "style.css";
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
    if (mode === "style.css") {
        schimb_dark();
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function onClickCancel() {
    document.getElementById('id01').style.display = 'none';
    document.getElementById("usernameID").value = "";
    document.getElementById("passwordID").value = "";
}

// buton scroll


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };
//Get the button


function scrollFunction() {

    var mybutton = document.getElementById("myBtn");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//alert mail

function alertMail() {
    var myVar;
    myVar = setTimeout(alertFunc, 1000);
}

function alertFunc() {
    alert("Ați fost adaugat in lista de abonați.");
}

//dropdown teme

function Drop_teme() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}