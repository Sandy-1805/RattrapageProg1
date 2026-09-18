let valeur = [0, 1, 0];

function Echanger(tab, index1, index2) {
    let temp = tab[index1];
    tab[index1] = tab[index2];
    tab[index2] = temp;
    return tab;
}
console.log(Echanger(valeur, 1, 2));

console.log("-------------------");


let nouvelle_valeur = [0, 1, 0, 0, 1, 0];

function Ranger(tab) {
    let i = 0;
    let j = tab.length - 1;
    while (i < j) {
        while (tab[i] === 0 && i < j) {
            i++;
        }
        while (tab[j] === 1 && i < j) {
            j--;
        }
        if (i < j) {
            Echanger(tab, i, j);
        }
    }
    return tab;
}

console.log(Ranger(nouvelle_valeur));

console.log("-------------------");

function NombreUn(tab) {
    let count = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === 1) {
            count++;
        }
    }
    return count;
}

console.log(NombreUn([0, 0, 0, 0, 1, 1]));