// document.addEventListener('DOMContentLoaded', function start() { //Срабатывает при завершении формирования DOM

//     function get_value() { //Получение из полей введенных значений
//         b = Number(document.getElementById('b_side').value);
//         l = Number(document.getElementById('l_side').value);
//         n = Number(document.getElementById('n').value);
//         m = Number(document.getElementById('m').value);
//         console.log(b,l);
//         console.log(n,m);
//     };
//     area.addEventListener('click', get_value); //Вызов функции get_bl, при нажатии на кнопку Расчет.
//     area.addEventListener('click', setResistanceValue); //Вызов функции setResistanceValue, которая передает результат в поле
//     area.addEventListener('click', setAreaValue); //Вызов функции setAreaValue, которая передает результат расчета площади в поле
//     area.addEventListener('click', setSigmaValue); //Вызов функций, передающих значения напряжений в соответствующие поля
// });

function calcResult() {
    b = Number(document.getElementById('b_side').value);
    l = Number(document.getElementById('l_side').value);
    n = Number(document.getElementById('n').value);
    m = Number(document.getElementById('m').value);
    console.log(b,l);
    console.log(n,m);

    setResistanceValue();
    setAreaValue();
    setSigmaValue();
};
//Объявление переменных b, l, в которые будет записан результат работы функции get_bl()
let b;
let l;
let n;
let m;
let w1;
let s_max;
let s_min;

//Функция calcArea считает площадь опорной плиты. Значения вытягиваются из полей ввода
function calcArea(a,b) {
        if (!a || !b) {
            alert('Не введено одно из значений сторон');
        }
    else {
        return a*b;
    };
};

//Функция setAreaValue берет функцию calcArea и через переменную передает в поле с id = bl.
function setAreaValue() {
    document.getElementById('bl').value = calcArea(b,l);
};

function setResistanceValue() { //Момент сопротивления BL^2/6
    w1 = ((b*l^2)/6);
    document.getElementById('w').value = ((b*l^2)/6);
};

function sigmaMax(n1,m1) {
    console.log(n1,m1);
    if (!n1 || !m1) {
        alert('Не введено одно из усилий')
    }
    else {
        return (n1/calcArea(b,l))+(m1/w1);
    };
    //Gmax = // N/A + M/W
};

function sigmaMin(n1,m1) {
    console.log(n1,m1);
    if (!n1 || !m1) {
        alert('Не введено одно из усилий')
    }
    else {
        return Math.abs((n1/calcArea(b,l))-(m1/w1));
    };
    //Gmin = // N/A - M/W
};

function setSigmaValue() {
    document.getElementById('Gmax').value = sigmaMax(n,m);
    document.getElementById('Gmin').value = sigmaMin(n,m);
}

// function calcY(l,t,c) {
//     return l+t-c/3;
// }