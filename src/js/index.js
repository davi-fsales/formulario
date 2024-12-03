const btnEnviar = document.getElementById('btn-enviar');

const inputs = document.querySelectorAll('.input');

const mensagemAlerta = document.querySelectorAll('.mensagem-de-campo-obrigatorio');

btnEnviar.addEventListener('click', function(){
    inputs.forEach((input, index) => {
        if(input.value.trim() === ''){
            mensagemAlerta[index].classList.add('mostrar');
            inputs[index].classList.add('borda-vermelha');
            inputs[index].classList.remove('borda-verde');
        }else{
            mensagemAlerta[index].classList.remove('mostrar');
            inputs[index].classList.add('borda-verde');
        }
    });
});
