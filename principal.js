const modal = document.getElementById("meuModal");

const btn = document.getElementById("conheca");

const span = document.getElementsByClassName("fechar")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openWhatsAppChat() {
    const phoneNumber = "+5511999999999"; // Substitua pelo número de telefone desejado
    const message = "Olá, Gostaria de uma consultoria! Vocês teriam um horario disponível?.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}