/* ------------ Fonction rechercher Max et Min d'un tableau ------------ */

let searchMinMax = (tab) => {
  return [Math.min(...tab), Math.max(...tab)];
};

let tableau = [23, 21, 9, 8, 13, 10, 11, 22, 2];

console.log(searchMinMax(tableau));

/* FIN Fonction rechercher Max et Min d'un tableau  */

/**
 * ----------------
 *-----------------
 */

/* ------------ Fonction somme des éléments d'un tableau ------------ */

let sommeElTableau = (tableau) => {
  let somme = 0;
  for (let elt of tableau) {
    somme += elt;
  }
  return somme;
};
console.log(sommeElTableau(tableau));

/* FIN Fonction somme des éléments d'un tableau  */

/**
 * ----------------
 *-----------------
 */

/* ------------ Fonction Filtrer des éléments d'un tableau ------------ */

let filtreTableau = (tableau) => {
  return tableau.filter((valeur) => valeur >= 10);
};

console.log(filtreTableau(tableau));

/* FIN Fonction somme des éléments d'un tableau  */
