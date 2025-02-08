const hamburgerButton = document.getElementById('hamburger-button');
const menuLista = document.getElementById('menu__lista');

// Adicionando o evento de clique no botão de hambúrguer
hamburgerButton.addEventListener('click', function() {
    // Verificando o estado atual do menu (aberto ou fechado)
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    
    // Alternando o estado do menu
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    menuLista.setAttribute('aria-hidden', isExpanded);
    
    // Alternando a visibilidade do menu
    menuLista.style.display = isExpanded ? 'none' : 'block';
});

