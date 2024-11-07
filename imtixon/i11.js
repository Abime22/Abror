function daraja(a, b) {
   
    if (b === 0) {
        return 1;
    } else if (b > 0) {
        return a * daraja(a, b - 1);
    } else {
        return 1 / daraja(a, -b);
    }
}

console.log(daraja(2, 3)); 
console.log(daraja(5, 0)); 
console.log(daraja(2, -2)); 
