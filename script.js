function show(n){
    document.querySelector('#number').value += n;
}

function equals(){
    document.querySelector('#number').value = eval(document.querySelector('#number').value)
}

document.querySelector('#cls').onclick = function(){
    document.querySelector('#number').value = '';
}

var dark = false;

document.getElementById('flexSwitchCheckDefault').onclick = function(){
    if(!dark){
        if(document.querySelector('#flexSwitchCheckDefault').checked){
            document.body.className = 'dark'
        } else {
            document.body.className = 'light'
        }
    }   
}
