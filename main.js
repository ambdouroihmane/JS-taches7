//1) Créez un tableau de nombres et utilisez la methode .map pour doubler chaque nombre du tableau 
let tableau = [12,10,9,11,14];

let newTableau = tableau.map((x) => x * 2);

console.log(newTableau);

/**
 * 2) Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau
 * avec uniquement les chaînes dont la longueur est supérieure à 3.
 */

let tab = ["Jul","Main","Jus","Fin","Chaine"];

let newTab = tab.filter((mot) => mot.length > 3);

console.log(newTab);

/**
 * 3) Utiliser la methode .reduce() pour résumer tous les nombres dans un tableau de nombres.
 */
let val = 0;
let result = tableau.reduce((element,val) => element+val );

console.log(result);

/**
 * 4) Utiliser la methode .sort() pour trier un tableau de chaînes par ordre alphabetique.
 */
let chaine = tab.sort();

console.log(chaine);    

/**
 * 5) Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.
 */

chaine.forEach(element => {
    console.log(element)
});