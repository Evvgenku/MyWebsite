

window.onload=function(){
    //Функция calc считает площадь опорной плиты. Значения вытягиваются из полей ввода
    function calc() {
    const b = document.getElementById('b_side').value;
    const l = document.getElementById('l_side').value;
    return b*l;
};
    //Функция area1 берет функцию calc и через переменную передает в поле с id = bl.
    function area1() {
    document.getElementById('bl').value = calc();
    /*
    document.getElementById('bl').value - обращаемся к полю с id = "bl"
    ... = calc() - функция calc() присваивается значению (value) поля с id = "bl"
    */
};

area.addEventListener('click', area1); 

  }