const words = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar','Dani']
const result = words.filter(word => word.length > 6);
console.log(result);
//Output : [ 'ari sandi', 'awaludin', 'arie akbar' ]

const name = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar','Dani']
const resultt = words.filter((name) => name.includes("r")); //mengecek apa ada huruf r nya atau tidak
console.log(resultt);
//Output : [ 'aren', 'ari sandi', 'arie akbar' ]

