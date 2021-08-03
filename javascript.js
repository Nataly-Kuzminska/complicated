use strict;

let arrRus = ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'];
let arrEng = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
let lang = prompt('Какой язык нужен?');
if (lang==='ru') {
console.log(...arrRus);
} else if (lang==='en') {
console.log(...arrEng);
}

let namePerson;
let a = namePerson === 'Артем' ? 'директор' : namePerson=== 'Максим' ? 'преподаватель' : 'студент';

