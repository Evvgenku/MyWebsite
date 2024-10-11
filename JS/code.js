

window.onload=function(){

const button = document.querySelector('.area');

    function calc() {
    const b = document.getElementById('b_side').value;
    const l = document.getElementById('l_side').value;
    return b*l;
};

    function area() {
    const result = calc();
    const area_res = document.getElementById('bl');
    area_res.value = result;
    
};

button.addEventListener('click', area);

  }