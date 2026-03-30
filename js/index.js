// Exibe um alerta de boas-vindas ao usuário
alert("Bem-vindo a Netflix!");
// Registra uma mensagem no console do navegador para depuração
console.log("Aproveite a experiência de assistir seus filmes e séries favoritos!");

// Seleciona todos os elementos com a classe 'profile' (os perfis na página)
const profiles = document.querySelectorAll('.profile');

// Para cada perfil encontrado, adiciona um ouvinte de evento de clique
profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        // Dentro do perfil clicado, encontra a imagem
        const img = profile.querySelector('img');
        // Encontra o nome do perfil no texto da legenda (figcaption)
        const name = profile.querySelector('figcaption').textContent;
        // Obtém o caminho da imagem do atributo 'src'
        const imgSrc = img.getAttribute('src');
        
        // Ajusta o caminho da imagem para funcionar na página catalogo (que está em uma subpasta)
        const adjustedImgSrc = '../' + imgSrc;
        
        // Armazena o nome do perfil no localStorage (armazenamento local do navegador)
        localStorage.setItem('perfilAtivoNome', name);
        // Armazena o caminho ajustado da imagem no localStorage
        localStorage.setItem('perfilAtivoImagem', adjustedImgSrc);
        
        // Redireciona o navegador para a página do catálogo
        window.location.href = 'catalogo/catalogo.html';
    });
});