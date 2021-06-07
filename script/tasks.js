
// 1. Создайте функцию, которая принимает в качестве аргументов два числа и возвращает их сумму.

function addition(a, b) {
	return a + b;
}
console.log(addition(5, 2));
/* 2. Создайте функцию, которая принимает число в качестве аргумента.
   Сложите все числа от 1 до числа, которое вы передали функции.
   Например, если на входе 4, ваша функция должна вернуть 10, потому что 1 + 2 + 3 + 4 = 10.
*/

function addUp(num) {
	return num * (num + 1) / 2;
}
console.log(addUp(4));
/* 3. Создайте функцию, которая возвращает количество true в массиве.
      Пример: countTrue([true, false, false, true, false]) ➞ 2  
*/

function countTrue(arr) {
	 return arr.filter(elem => elem).length;
}
console.log(countTrue([true, false, false, true, false]));
/* 4. Напишите функцию, которая принимает три измерения кирпича: высоту (a), ширину (b) и глубину (c).
      Сможет ли этот кирпич поместиться в отверстие шириной (w) и высотой (h).
    doesBrickFit(1, 1, 1, 1, 1) ➞ true
    doesBrickFit(1, 2, 2, 1, 1) ➞ false
*/

// (a,b,c) -- Размеры кирпича
// (w,h) -- Размеры отверстия
function doesBrickFit(a,b,c, w,h) {
	let minSides = [a, b, c].sort((min1, min2) => min1 - min2).splice(0, 2);
	return (minSides[0] <= w && minSides[1] <= h) || (minSides[0] <= h && minSides[1] <= w);
}
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));
/* 5. Напишите функцию, которая извлекает 3 самых длинных слова из заголовка газеты и преобразует их в хэштеги.
      Если несколько слов имеют одинаковую длину, найдите слово, которое встречается первым.

      getHashTags("How the Avocado Became the Fruit of the Global Trade")
      ➞ ["#avocado", "#became", "#global"]
*/

function getHashTags(str) {
    //почему этот способ нормально не срабатывает ?
	//return str.toLowerCase().split(" ").sort((a, b) => b.length - a.length).splice(0, 3).map(elem => "#" + elem);

    //какой из двух способов наиболее предпочтительный?

    //1 способ:
   /* return str.toLowerCase().split(" ").map((elem, index) => {
        let obj = {};
        obj.item = elem;
        obj.id = index;
        return obj;
    }).sort((a, b) =>{
        if(a.item.length < b.item.length) return 1;
        if(a.item.length > b.item.length) return -1;
        if(a.item.length === b.item.length){
            if(a.id < b.id) return -1;
            if(a.id > b.id) return 1;
        }
    }).splice(0, 3).map(elem => "#" + elem.item);*/

    // 2 способ:
    return str.split(" ").sort((a, b) => {
        if(a.length < b.length) return 1;
        if(a.length > b.length) return -1;
        if(a.length === b.length){
            return str.indexOf(a) < str.indexOf(b) ? -1 : 1;
        }
    }).splice(0, 3).map(elem => "#" + elem.toLowerCase());
}
console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("How the Avocado bbbbbb Became the Fruit of the Global Trade"));
console.log(getHashTags("How the Avocado Became the Fruit Ffffff of the Global Trade"));