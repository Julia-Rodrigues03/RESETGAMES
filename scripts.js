function alterarstatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    
    if (!gameClicado) return; // Sai da função se o elemento não for encontrado
    
    let imagem = gameClicado.querySelector('.dashboard-item-img');
    let botao = gameClicado.querySelector('.dashboard-item-button');

    if (imagem.classList.contains('dashboard-item-img--rented')) {
        imagem.classList.remove('dashboard-item-img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard-item-button--return');
    } else {
        imagem.classList.add('dashboard-item-img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard-item-button--return');
    }
}


const txtBusca = document.getElementById('txtBusca');
const resultsList = document.getElementById('results');
const data = [
    "Slipt Fiction",
    "Mafia I",
    "Read Dead Redemption II",
    "Counter Strike 2",
    "Elden Ring Nightreign",
    "Lies of P",
    "Resident Evil 4",
    "Resident Evil 7",
    "Resident Evil Village",
    "Deltarune",
    "Forza Horizon 5",
    "Rematch",
];

    txtBusca.addEventListener('input', function() {
    const searchTerm = txtBusca.value.toLowerCase();
    resultsList.innerHTML = '';

    if (searchTerm){
        const filteredData = data.filter(item =>
            item.toLowerCase().includes(searchTerm)
        );

        filteredData.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            resultsList.appendChild(listItem);
        });
    }
});