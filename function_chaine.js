/*  ---------- Fonction qui inverse une chaine de caractère ------------ */

let motAInverse = (mot) => {
  return mot.split("").reverse().join("");
};
console.log("Le mot inversé ", motAInverse("Transformateur"));

/*  Fin Fonction qui inverse une chaine de caractère */

/* ------------ Fonction qui compte le nombre de caractère d'une chaine ------------ */

let compteNombreCaractereMot = (mot) => {
  return mot.split("").length;
};
console.log(
  "Le nombre de caractère est : ",
  compteNombreCaractereMot("Transformateur")
);
/*  Fin Fonction qui compte le nombre de caractère d'une chaine */

/* ------------ Fonction qui met en majuscule la première lettre de chaque mot d'une phrase ------------ */

function strUcFirst(mot) {
  let motAtrans = mot.split(" ");
  let tab = [];
  for (let m of motAtrans) {
    tab.push(
      (m + "").charAt(0).toUpperCase() + (m + "").substring(1, m.length)
    );
  }
  return tab.join(" ");
}

console.log(strUcFirst("Isidore debut pour les activiste"));

/*  Fin Fonction qui met en majuscule la première lettre de chaque mot d'une phrase */
