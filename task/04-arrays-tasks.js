'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Пожалуйста, прочтите информацию по ссылке перед выполнением заданий:                      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : ПОЖАЛУЙСТА, НЕ ИПОЛЬЗУЙТЕ ЦИКЛЫ!                                                   *
 * Во всех задачах данного раздела должны быть использованы встроенные в объект Array методы *
 *********************************************************************************************/


/**
 * Возвращает индекс переданного элемента в массиве, а если он остутствует то возвращает -1
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
    return arr.indexOf(value);
   //throw new Error('Not implemented');
}

/**
 * Возвращает массив, состоящий из нечетных чисел, заданной длины
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47];
    return array.slice(0,len);
    //throw new Error('Not implemented');
}

/**
 * Возвращает массив состоящий из двух копий переданного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
    return arr.concat(arr);
   //throw new Error('Not implemented');
}


/**
 * Возвращает массив, состоящий только из положительных чисел вводного массива, сохраняя порядок элементов
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, -3, 4, 5 ] => [1, 2, 4, 5 ]
 *    [-1, 2, -5, -4, 0, 19] => [ 2, 19 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
    return arr.filter((item) => {
        return item > 0;
    });
   //throw new Error('Not implemented');
}

/**
 *  Возвращает массив, состоящий только из элементов - строк вводного массива (сохранять порядок элементов)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
    return arr.filter((item) => {
        return typeof item == 'string';
    });
   //throw new Error('Not implemented');
}

/**
 * Удаляет ложные значения (== false) элементов массива из переданного массива
 * Ложные значения: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
    return arr.filter((item) => {
      return Boolean(item) === true;
    });
   //throw new Error('Not implemented');
}

/**
 * Возвращает массив, который состоит из элементов вводного массива в верхнем регистре
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
    return arr.map((item) => {
        return item.toUpperCase();
    });
   //throw new Error('Not implemented');
}


/**
 * Возвращает массив с длинами строк элементов входного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
    return arr.map((item) => {
        return item.length;
    });
   //throw new Error('Not implemented');
}

/**
 * Вставляет в переданный массив переданный элемент по заданному индексу
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
   return arr.splice(index, 0, item);
   //throw new Error('Not implemented');
}

/**
 * Возвращает первые n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
    return arr.splice(0, n);
   //throw new Error('Not implemented');
}


/**
 * Возвращает последние n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
    return arr.splice(arr.length-n, arr.length-1);
   //throw new Error('Not implemented');
}


/**
 * Вернуть CSV представление of two-dimentional numeric array.
 * https://ru.wikipedia.org/wiki/CSV
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
    return arr.map((item) => { return item.join(','); }).join('\n');
   //throw new Error('Not implemented');
}

/**
 * Транформировать входной массив так, чтобы каждое его исходное значение было возведено в квадрат:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
    return arr.map((item) => {
        return item * item;
    });
   //throw new Error('Not implemented');
}


/**
 * Транформировать входной массив так, чтобы каждое новое n-ое значение его было равно:
 *       f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  или  f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
    let sum = 0;
    return arr.map((item) => {
        return sum +=item;
    });
   //throw new Error('Not implemented');
}

/**
 * Возвращает массив, состоящий из каждого второго элемента переданного массива:
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
    let answer = [];
    arr.map((item,index) => {
        if (index % 2 !== 0) answer.push(item);
    });
    return answer;
   //throw new Error('Not implemented');
}


/**
 * Возвращает новый массив, в котором каждый качальный элемент исходного массива будет
 * повторен в конечном массиве n-ое количество раз
 * N - [1...a.length] - номер места по порядку на котором располагается соответствующий элемент в начальном массиве
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
    let answer = [];
    arr.map((item,index) => {
      let temp = new Array(index+1);  
      temp.fill(item);
      answer = answer.concat(temp);
    });
    return answer;
   //throw new Error('Not implemented');
}


/**
 * Возвращает массив состоящий из трех масимальных элементов исходного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
    if (arr.length === 0) return arr;
    if (arr.length < 3) return (arr.sort()).reverse();
    let answer = [];
    let max1 = Math.max.apply(null, arr);
    answer.push(max1);
    arr.splice(arr.indexOf(max1), 1);
    let max2 = Math.max.apply(null, arr);
    answer.push(max2);
    arr.splice(arr.indexOf(max2), 1);
    let max3 = Math.max.apply(null, arr);
    answer.push(max3);
    arr.splice(arr.indexOf(max3), 1);
    return answer;
   //throw new Error('Not implemented');
}


/**
 * Возвращает количество положительных элементов переданного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
    arr = arr.filter((item) => {
        return typeof item === 'number' && item > 0;
    });
    return arr.length;
   //throw new Error('Not implemented');
}

/**
 * Отсортировывает массив строковых представлений цифр
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
    let str = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    return arr.sort((a, b) => {
        return str.indexOf(a) - str.indexOf(b)
    });
   //throw new Error('Not implemented');
}

/**
 * Возвращает сумму всех элементов входного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
    let sum = 0;
    arr.map((item) => {
        return sum +=item;
    });
    return sum;
   //throw new Error('Not implemented');
}

/**
 * Возвращает количество всех элементов массива равных false (== false)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
    let sum = 0;
    arr.map((item) => {
        if (!!item == false) return sum++;
    });
    return sum;
   //throw new Error('Not implemented');
}

/**
 * Возвращает количество вхождений переданного числа в переданный массив
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {
    let sum = 0;
    arr.map((elem) => {
        if (elem === item) sum++;
    });
    return sum;
   //throw new Error('Not implemented');
}

/**
 * Сливает все элементы массива в одну строку с разделителем ','
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
    return arr.join(',');
   //throw new Error('Not implemented');
}


/**
 * Сортирует по возрастанию переданный массив по имени страны, а при равенстве страны сравнивает по имени города
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
    return arr.sort((a, b) => {
        if (a.country === b.country) {
          if (a.city > b.city){
            return 1;
          } else {
            return -1;
          }
        } else if(a.country > b.country){
          return 1;
        } else {
          return -1;
        }
    });
   //throw new Error('Not implemented');
}

/**
 * Возвращает единичную матрицу заданного порядка
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
    return new Array(n).fill(0).map( (item, i) => 
      { return new Array(n).fill(0).map( (item, j) => 
        { return j == i ? 1 : 0; 
        }); 
      });
   //throw new Error('Not implemented');
}

/**
 * Возвращает массив, состоящий из элементов от стартового до конечного аргументов включая
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
    let cur = start - 1;
    let arr = new Array(end - start + 1);
    arr.fill(1);
    return arr.map(item => {return cur += item});
   //throw new Error('Not implemented');
}

/**
 * Возвращаемый массив содержит только уникальные значения переданного массива.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
    return arr.filter((item, i, arr) => 
      { return arr.indexOf(item) == i;
    });
   //throw new Error('Not implemented');
}

/**
 * Группирует элементы переданного массива по переанной keySelector функции
 * и по в массивы по выбранным сгруппированным key добавляет соответствующие
 * value исходя из переданной функции valueSelector
 * Описание данной структуры: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
    return array.reduce(function(prev, current) {
        let valueArr = prev.get(keySelector(current)) || new Array();
        valueArr.push(valueSelector(current));
        return prev.set(keySelector(current), valueArr);
        }, new Map);
   //throw new Error('Not implemented');
}

/**
 * Функция должна переводить каждый элемент переданного массива arr в последовательность элементов согласно childrenSelector
 * Также данная структура должна стать плоской: [[a],[b],[c],[d,e]] => [a,b,c,d,e]
 *
 * @param {array} arr
 * @param {Function} childrenSelector, функция которая будет применена для каждого элемента начального массива
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    arr[0]=childrenSelector(arr[0]);
    return arr.reduce((prev,cur)=>{
        return [...prev,...childrenSelector(cur)];
    });
    //throw new Error('Not implemented');
}

/**
 * Возврщает значение элемента матрицы по переданных индексам.
 * Матрица в данном случае представлена массивом с любой вложенностью
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
    Array.from(indexes, (x, i) => {arr = arr[indexes[i]]; });
    return arr;
    //throw new Error('Not implemented');
}


/**
 * Возвращает массив с измененным порядком элементов исходного массива:
 * Меняет местами элементы до среднего элемента и элементы после
 * Первая половина (head) массива становися в конец, а вторая (tail) в начало.
 * Средний элемент не меняет свою позицию.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
    let arrLength = arr.length;
    let firstPart = arr.slice(arrLength % 2 == 0 ? arrLength / 2 : arrLength / 2 + 1);
    let middlePart = arrLength % 2 == 0 ? [] : arr.slice(arrLength / 2, arrLength / 2 + 1);
    return firstPart.concat(middlePart).concat( arr.slice(0, arrLength / 2 ));
    //throw new Error('Not implemented');
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
