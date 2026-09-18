let valeur = [3, -1, 0, 4, -2, 5, -3];
let valeur2 =[0, 5, -6, 4, 6, -2, -99];

function tableau(tab, index1, index2) {
    let temp = tab[index1];
    tab[index1] = tab[index2];
    tab[index2] = temp;
}

function NegatifPositif(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        while (arr[i] < 0 && i < j) {
            i++;
        }
        while (arr[j] > 0 && i < j) {
            j--;
        }
        if (i < j) {
            tableau(arr, i, j);
        }
    }
    return arr;
}

console.log(NegatifPositif(valeur));
console.log(NegatifPositif(valeur2));
