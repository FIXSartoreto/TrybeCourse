window.onload = function() {
    let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let stateElement = document.querySelector(".state");
    let selectForm = document.querySelector(".myform");

    for (let i = 0; i < estados.length; i += 1) {
    let estado = document.createElement('option');
    estado.value = estados[i];
    estado.innerText = estados[i];
    stateElement.appendChild(estado);
    }

    let elemButton = document.getElementById('enviar');
    elemButton.addEventListener('click', function (event) {
    event.preventDefault();   
    createDiv(); 
    });

    let resetButton = document.querySelector("#limpar");
    resetButton.addEventListener("click", function() {
        selectForm.reset();
    })

    function createDiv() {
        let allInputs = document.querySelectorAll("input");
        let content = "";
        for (let i = 0; i < allInputs.length; i += 1){
            content += allInputs[i].name + ": " + allInputs[i].value + "\n";
        }
        let divField = document.createElement("fieldset");
        let divConsolidado = document.createElement("div");
        divConsolidado.innerText = content;
        selectForm.appendChild(divField);
        divField.appendChild(divConsolidado);

    }
    
}