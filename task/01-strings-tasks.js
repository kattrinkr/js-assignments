'use strict';

/********************************************************************************************
 *                                                                                          *
 * Перед началом работы с таском, пожалуйста ознакомьтесь с туториалом:                     *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/



 /**
  * Возвращает результат конкатенации двух строк
  *
  * @param {string} value1
  * @param {string} value2
  * @return {string}
  *
  * @example
  *   'aa', 'bb' => 'aabb'
  *   'aa',''    => 'aa'
  *   '',  'bb'  => 'bb'
  */
 function concatenateStrings(value1, value2) {
   var a = value1 + value2;
   return a;
 }


 /**
  * Возвращает длинну строки
  *
  * @param {string} value
  * @return {number}
  *
  * @example
  *   'aaaaa' => 5
  *   'b'     => 1
  *   ''      => 0
  */
 function getStringLength(value) {
   return value.length;
   //throw new Error('Not implemented');
 }

 /**
  * Возвращает строку образованную на основе шаблона и входных параметров firstName и lastName.
  * Важно! Вместо использования конкатенации, используйте шаблоны :
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
  *
  * @param {string} firstName
  * @param {string} lastName
  * @return {string}
  *
  * @example
  *   'John','Doe'      => 'Hello, John Doe!'
  *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
  */
 function getStringFromTemplate(firstName, lastName) {
   return `Hello, ${firstName} ${lastName}!`;
     //throw new Error('Not implemented');
 }

 /**
  * Возвращает имя(First_Name) и фамилию(Last_Name) из шаблона 'Hello, First_Name Last_Name!'.
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   'Hello, John Doe!' => 'John Doe'
  *   'Hello, Chuck Norris!' => 'Chuck Norris'
  */
 function extractNameFromTemplate(value) {
   let str = value.slice(7, value.length-1);
   return str;
     //throw new Error('Not implemented');
 }


 /**
  * Возвращает первый символ полученной строки
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   'John Doe'  => 'J'
  *   'cat'       => 'c'
  */
 function getFirstChar(value) {
   return value[0];
     //throw new Error('Not implemented');
 }

 /**
  * Удаляет крайние левые и правые символы пробела или табуляции из строки.
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   '  Abracadabra'    => 'Abracadabra'
  *   'cat'              => 'cat'
  *   '\tHello, World! ' => 'Hello, World!'
  */
 function removeLeadingAndTrailingWhitespaces(value) {
   var a = value.trim();
   return a;
     //throw new Error('Not implemented');
 }

/**
 * Возвращает заданную строку, повторяющуюся заданное число раз
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  var str = '';
  for (var i = 0; i < count; i++) {
    str += value;
  }
  return str;
    //throw new Error('Not implemented');
}

/**
 * Удаляет первую встретившуюся последовательность симвоов из строки
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  var answer = '';
  answer = str.replace(value, '');
  return answer;
    //throw new Error('Not implemented');
}

/**
 * Удаляет первую и последнюю угловую скобку в строке (тэге)
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  var arr = str.split('');
  arr.splice(0,1);
  arr.splice(str.length-2, 1);
  var answer = arr.join('');
  return answer;
    //throw new Error('Not implemented');
}


/**
 * Переводит все символы в строке в верхний регистр
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
    //throw new Error('Not implemented');
}

/**
 * Из строки адресов электронной почты разделенных точкой с запятой, образует массив этих адресов
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  var arr = str.split(';');
  return arr;
    //throw new Error('Not implemented');
}

/**
 * Возвращает строковое предстваление фигуры с заданной шириной и высотой
 * используя псевдографические символы: '┌', '─', '┐', '|', '└', '┘'.
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let temp = '', res = '';
  for (var i = 0; i < height; i++) {
    if (i === height - 1) {
      temp = '└' + '─'.repeat(width - 2) + '┘\n';
    }
    else if (i === 0) {
      temp = '┌' + '─'.repeat(width - 2) + '┐\n';
    }
    else {
      temp = '│' + ' '.repeat(width - 2) + '│\n'
    }
    res += temp;
  }
return res;
   //throw new Error('Not implemented');
}


/**
 * Закодировать указанную строку при помощи ROT13 шифрования (*)
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  var codestr = '', string = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') codestr += ' ';
    else if (str[i] === '!') codestr += '!';
      else if (str[i] === '?') codestr += '?';
        else {
          let index = str.charCodeAt(i);
          if (((index >= 78) && (index <= 90)) || ((index >= 110) && (index <= 122)))
          codestr += String.fromCharCode(index-13);
            else codestr += String.fromCharCode(index+13);
        }
  }
  return codestr;
    //throw new Error('Not implemented');
}

/**
 * Возвращает булевое значение, является ли входной параметр строкой
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (value === null) return false;
  if (typeof value == 'string') return true;
  if (typeof value === 'object') {
    if (typeof value[0] !== 'undefined') return true;
    else return false;
  }
  else return false;
    //throw new Error('Not implemented');
}


/**
 * Возвращает id игровой карты
 *
 * Исходная доска игровых карт представлена следующим порядком строк:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
     var arr =['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
       'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
       'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
       'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠']
     for (let i = 0; i < arr.length; i++)
       if (arr[i] === value) return i;
    //throw new Error('Not implemented');
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
