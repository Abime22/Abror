const promise1 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 1 tugadi");
    }, 3000);
});

const promise2 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 2 tugadi");
    }, 2000);
});

const promise3 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 3 tugadi");
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("Birinchi tugagan Promise:", result);
    })
    .catch(error => {
        console.error("Xato yuz berdi:", error);
    });
