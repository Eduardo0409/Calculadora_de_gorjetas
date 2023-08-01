
// Funcao para calcular a gorjeta
function calculateTip(event){
    event.preventDefault();
    let account = document.getElementById("account").value;
    let service = document.getElementById("serviceQual").value;
    let people = document.getElementById("people").value;

    if(account == '' | service == 0){
        alert("Por favor, preencha os valores.")
        return;
    }

    // If para mostrar ou nao a mensagem para o numero de pessoas
    if(people == '' | people <= 1){
        people = 1;
        document.getElementById("each").style.display = "none"
    } else{
        document.getElementById("each").style.display = "block"
    }

    // Calculo da gorjeta
    let total = (account * service) / people;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
}


// Document para ocultar os elementos
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


// Evento para invocar a funcao 
document.getElementById("tipsForm").addEventListener('submit', calculateTip);