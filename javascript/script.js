
function realizarBusca() {
    const campo = document.getElementById('buscar');
    if (!campo) return;

    const termo = campo.value.toLowerCase().trim();

    // Seu mapa de páginas
    const paginas = {
    "arroz": "../html/arroz00.html",
    "tipos de arroz": "../html/arroz00.html",
    "ave": "../html/ave00.html", 
    "aves": "../html/ave00.html",
    "bebida": "../html/bebida00.html",
    "bebidas": "../html/bebida00.html",
    "carne": "../html/carne00.html",
    "carnes": "../html/carne00.html",
    "massa": "../html/massa00.html",
    "massas": "../html/massa00.html",
    "salada": "../html/salada00.html",
    "saladas": "../html/salada00.html",
    "home": "../html/index.html", 
    "tela inicial": "../html/index.html"  
    };

    if (paginas[termo]) {
        window.location.href = paginas[termo];
    } else if (termo !== "") {
        alert("Página não encontrada!");
    }
}

// Suporte ao Enter (este continua automático)
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'buscar') {
        realizarBusca();
    }
});