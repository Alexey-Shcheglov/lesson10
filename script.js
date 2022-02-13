'use strict';

const book = document.querySelectorAll('.book');
const adv = document.querySelectorAll('.adv');
const elem = book[4].getElementsByTagName('a');
const newLiElem = document.createElement("li");
const book2 = book[0].querySelectorAll('li');
const book5 = book[5].querySelectorAll('li');
const book6 = book[2].querySelectorAll('li');


// Восстановить порядок книг.

book[0].before(book[1]);
book[2].before(book[5]);
book[0].after(book[4]);
book[4].after(book[3]);

// Заменить картинку заднего фона на другую из папки image

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

elem[0].innerHTML = 'Книга 3. this и <b>Прототипы</b> Объектов';

// Удалить рекламу со страницы
adv[0].remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[9].after(book2[2]);

book5[4].after(book5[2]);
book5[1].after(book5[9]);
book5[7].after(book5[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

newLiElem.textContent = "Глава 8: За пределами ES6";
book6[8].after(newLiElem);

console.log(book);
console.dir(book2);
console.dir(book5);
console.dir(book6);