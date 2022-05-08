const CARD = document.querySelector("#card")
const FIELDS = document.querySelectorAll(".field"); // représente les champs du formulaire

// reinitialisation des champs au chargement de la page
window.onload = FIELDS.forEach(field => field.type != "color" ? field.value = "": field.value = "#ffffff");

function toPhoneNumber(number) {
    // fonction qui espace les caractères 2 par 2
    let result = "";

    for (let i = 0;i < number.length;i++) {
        i % 2 == 0 ? result += " " + number[i]: result += number[i];
    }

    return result;
}

let label;

FIELDS.forEach(field => field.addEventListener("input", () => {
    // changement de la couleur de fond de la carte de visite
    field.type == "color" ? CARD.style.backgroundColor = field.value: {};

    label = document.querySelector(`.${field.id.toString()}`);

    if (field.value == "") return label.textContent = field.id.toUpperCase();

    switch (field.id) {
        case "nom": label.textContent = field.value.toUpperCase(); break;

        case "prenom": label.textContent = field.value[0].toUpperCase() + field.value.substr(1).toLowerCase(); break;

        case "telephone": label.textContent = toPhoneNumber(field.value); break;

        case "email": label.textContent = field.value.toLowerCase(); break;
    }
 }))
