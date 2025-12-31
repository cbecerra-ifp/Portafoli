function missatge() {
    const missatgeElement = document.getElementById('missatge');
    missatgeElement.style.display = 'block';
}

setTimeout(() => {
    const textoLogo = document.getElementById('texto-logo');
    textoLogo.style.display = 'block';
}, 5000);