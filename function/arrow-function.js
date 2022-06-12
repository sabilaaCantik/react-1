function fungsi1(cb,cb2){
    console.log("Hai");
    cb();
    cb2();
}

//anonymiuse arrow functionn
fungsi1(
    () => console.log("Assalamualaikum"),
    () => console.log("Sabila Cantik")
);