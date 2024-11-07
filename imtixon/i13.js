const promise1 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 1");
    }, 1000); 
});


const promise2 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 2");
    }, 1000);
});


const promise3 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 3");
    }, 1000); 
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("Barcha Promiselar bajarildi:");
        console.log(results);  
    })
    .catch((error) => {
        console.error("Xato yuz berdi:", error);
    });
