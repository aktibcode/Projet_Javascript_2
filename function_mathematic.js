/**
 * ----------------
 *-----------------
 */

/* ------------ Fonction pour calculer le factoriel d'un nombre ------------ */
function fact(n) {
  let nb = 1;
  let i = 1;
  if (n == 0) {
    return 1;
  } else {
    while (i <= n) {
      nb = nb * i;
      i++;
    }
    return nb;
  }
}

console.log(fact(7));

/* FIN Fonction pour calculer le factoriel d'un nombre  */

/**
 * ----------------
 *-----------------
 */

/* ------------ Fonction qui verifie si le nombre est 1er ou non ------------ */

let verifNbPremier = (nbr) => {
  let d = 2;
  if (nbr < d) {
    return "Ce nombre est inferieur a " + d + " donc n'est pas premier";
  }
  while (d < nbr) {
    if (nbr % d == 0) {
      return "Le nombre " + nbr + " n'est pas premier";
    }
    d++;
  }
  return "Le nombre " + nbr + " est premier";
};

console.log(verifNbPremier(2));
/* FIN Fonction qui verifie si le nombre est 1er ou non   */

function GenerateurFibonacci(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
console.log(GenerateurFibonacci(10));
