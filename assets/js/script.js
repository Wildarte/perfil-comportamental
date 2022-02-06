const btn_share = document.querySelectorAll('.share');
const btn_start = document.getElementById('btn_wizard');
const conts_btn = document.getElementById('continue_test');

btn_share.forEach((item) => {
    item.addEventListener('mouseover', function(){
        this.querySelector('span.s').classList.remove('closeShare');
        this.querySelector('span.s').classList.add('openShare');
    })
    item.addEventListener('mouseleave', function(){
        this.querySelector('span.s').classList.remove('openShare');
        this.querySelector('span.s').classList.add('closeShare');
    })
});


document.addEventListener('DOMContentLoaded', function(){
    btn_start.innerText = "Começar o teste";

    btn_start.addEventListener('click', () => {
        alert('clickou no botao');
    });
    conts_btn.addEventListener('click', (e) => {
        e.preventDefault();
        verifica_check = false;
        document.querySelectorAll('input[class="pesquisa"]').forEach((item) => {
            if(item.checked){
                verifica_check = true;
            }
        });
        if(verifica_check){
            alert('selecionou');
        }else{
            alert('Primeiro selecione um alternativa');
        }
        
    });
});

