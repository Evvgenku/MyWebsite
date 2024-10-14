window.onload=function(){

     function getl() {return Number(document.getElementById('l_side').value);};
     function getb() {return Number(document.getElementById('b_side').value);};

    //Функция calc считает площадь опорной плиты. Значения вытягиваются из полей ввода
    function calc(a,b) {
        //if (b === '' || l === '') {
        if (!a || !b) {
            console.log(a)
            alert('Не введено одно из значений сторон');
        }
    else {
        return a*b;
    };
};

    //Функция area1 берет функцию calc и через переменную передает в поле с id = bl.
    function area1() {
        console.log(getb(),getl())
        document.getElementById('bl').value = calc(getb(),getl());
    /*
    document.getElementById('bl').value - обращаемся к полю с id = "bl"
    ... = calc() - функция calc() присваивается значению (value) поля с id = "bl"
    */
};

// function W() { //Момент сопротивления BL^2/6
    
// };

// function sigma_max_min() {
//     const n = document.getElementById('n');
//     const m = document.getElementById('m');
//     const Gmax = // N/A + M/W
// };

area.addEventListener('click', area1); 

  }