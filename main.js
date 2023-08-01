
//Funcao para calcular a gorjeta
function calculateTip(event){
    event.preventDefault();
    let account = document.getElementById("account").value;
    let service = document.getElementById("serviceQual").value;
    let people = document.getElementById("people").value;

    if(account == '' | service == 0){
        alert("Por favor, preencha os valores.")
        return;
    }
}


//Document para ocultar os elementos
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//Evento para invocar a funcao 
document.getElementById("tipsForm").addEventListener('submit', calculateTip);