window.onload = function() {
    let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let stateElement = document.querySelector(".state");

    for (let i = 0; i < estados.length; i += 1) {
    let estado = document.createElement('option');
    estado.value = estados[i];
    estado.innerText = estados[i];
    stateElement.appendChild(estado);
    }

    let elemButton = document.getElementById('enviar');
    elemButton.addEventListener('click', function (event) {
    event.preventDefault();
    });
}