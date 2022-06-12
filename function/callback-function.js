//callback function = fungsi yang dijadikan argumen fungsi lain
//kemjudian dipannggil dalam fungsi tsb

function fungsi1(cb,cb2){
    console.log("Hai");
    cb2();
    cb();
}

let fungsi2 = function(){
    console.log("hallo")
}
let fungsi3 = function(){
    console.log("Assalammualaikum")
}

fungsi1(fungsi2,fungsi3);