function NombreUn(tab) {
    let count = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === 1) {
            count++;
        }
    }
    return count;
}

function Echanger(tab, index1, index2) {
    let temp = tab[index1];
    tab[index1] = tab[index2];
    tab[index2] = temp;
    return tab;
}

function triLignes(M) {
    let m = M.length;
    for (let i = 0; i < m - 1; i++) {
        for (let j = i + 1; j < m; j++) {
            if (NombreUn(M[i]) > NombreUn(M[j])) {
                Echanger(M, i, j);
            }
        }
    }
}

let M = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

for (let i = 0; i < M.length; i++) {
    console.log("Nombre de 1 dans la ligne " + i + " : " + NombreUn(M[i]));
}

triLignes(M);

console.log("Tableau apres triLignes :");

console.log(M);

