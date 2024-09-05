function reverterarray(){

    let arrayInvertido = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayInvertido.push(arr[i]);
    }
    
    return arrayInvertido;

}

let arrayOriginal = [1, 2, 3, 4, 5];
let arrayRevertido = reverterArray(arrayOriginal);

console.log(arrayRevertido); // [5, 4, 3, 2, 1]
