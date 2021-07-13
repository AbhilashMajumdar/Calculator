
function valuesButton(e){
    form.screen.value += e.value; 
}

function Clear(){
    form.screen.value = null; 
}

function calculate(){
    form.screen.value = eval(form.screen.value);
}