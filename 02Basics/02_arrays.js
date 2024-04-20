const marvel_heros=["thor","IronMan","SpiderMan"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
//[ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]
//suppose if u want to get superman 
console.log(marvel_heros[3][0]);//superman
//suppose if u want to get spiderman
console.log(marvel_heros[3]);//SpiderMan

const allHeros=marvel_heros.concat(dc_heros)
console.log(marvel_heros);
//[ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]
console.log(allHeros);
//[ 'thor', 'IronMan', 'SpiderMan', 'superman', 'flash', 'batman' ]

const allNewHeros=[...marvel_heros,...dc_heros]
console.log(allNewHeros);
//[ 'thor', 'IronMan', 'SpiderMan', 'superman', 'flash', 'batman' ]

let another_array=[1,2,3,[4,5,6],7,[8,9,[1,2]]]
let yetAnother_array=another_array.flat(Infinity)
console.log(yetAnother_array);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]
