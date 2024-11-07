function faktoriyal(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriyal(n - 1);
    }
}


console.log(faktoriyal(5)); 
console.log(faktoriyal(0)); 
console.log(faktoriyal(7)); 
