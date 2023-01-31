let province = document.querySelector('#province');
let telephone = document.querySelector('#Telephone');
let patate = document.querySelector('#patate');
let pomme = document.querySelector('#pomme');

/**
 *  * pour afficher le nombre de patate dans range
 */
function afficher() {
    let valeur = document.forms[0]["patates"].value;
    document.getElementById("valeur").innerText = valeur;
}

function differencePommPatate(patate = "", pomme = "") {
    return parseInt(patate, 10) > parseInt(pomme, 10);
}

function choixTelProvince(telephone = "819", province = "Quebec") {
    let regex = /\(?819(\) |-)?[0-9]{3}-?[0-9]{4}/;
    switch (province) {
        case "on":
            regex = /\(?613(\) |-)?[0-9]{3}-?[0-9]{4}/;
            break;
        case "mb":
            regex = /\(?(204|431)(\) |-)?[0-9]{3}-?[0-9]{4}/
            break;
    }
    return regex.test(telephone);
}

document.querySelector("form").addEventListener('submit', function (evenement) {
    //réinitialiser le message d,erreur
    document.querySelectorAll(".erreur").forEach(message => message.classList.add("invisible"));

    let valider = true;
    if (!choixTelProvince(telephone.value, province.value)) {
        valider = false;
        document.querySelector("#province + .erreur").classList.remove("invisible");
    }
    if (!differencePommPatate(patate.value, pomme.value)) {
        valider = false;
        document.querySelector("#commande .erreur").classList.remove("invisible");
    }
    if (!valider) {
        evenement.preventDefault();
    }
    else {
        document.getElementById("erreur_tel").setAttribute("class", "");
        return false;
    }
});