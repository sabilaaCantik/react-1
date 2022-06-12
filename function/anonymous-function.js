function fungsi1(cb,cb2){
    console.log("Hai");
    cb();
    cb2();
}

//anonymiuse functionn
fungsi1(function(){
    console.log("Assalamualaikum")
},function(){
    console.log("Sabila Cantik")
});
