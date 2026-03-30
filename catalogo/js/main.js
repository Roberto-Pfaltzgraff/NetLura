// Importa as categorias de dados para os carrosséis
import { categories } from './data.js';
// Importa a função para criar carrosséis
import { createCarousel } from './components/Carousel.js';

// Aguarda o carregamento completo do DOM (estrutura da página) antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o nome do perfil ativo do localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    // Recupera a imagem do perfil ativo do localStorage
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Registra no console os valores recuperados para depuração
    console.log('Nome do perfil recuperado:', nomePerfil);
    console.log('Imagem do perfil recuperada:', imagemPerfil);

    // Verifica se ambos os valores existem
    if (nomePerfil && imagemPerfil) {
        // Seleciona o elemento do link do perfil (onde aparece o nome)
        const kidsLink = document.querySelector('.kids-link');
        // Seleciona o elemento da imagem do perfil
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se o link foi encontrado, atualiza o texto com o nome do perfil
        if (kidsLink) {
            kidsLink.textContent = nomePerfil;
            console.log('Nome do perfil atualizado na navbar:', nomePerfil);
        }
        // Se a imagem foi encontrada, atualiza o src com o caminho da imagem
        if (profileIcon) {
            profileIcon.src = imagemPerfil;
            console.log('Imagem do perfil atualizada na navbar:', imagemPerfil);
        }
    } else {
        // Se não há dados, registra no console
        console.log('Nenhum perfil ativo encontrado no localStorage.');
    }

    // Seleciona o container principal onde os carrosséis serão inseridos
    const container = document.getElementById('main-content');
    
    // Se o container existe, cria e adiciona os carrosséis
    if (container) {
        // Para cada categoria, cria um carrossel e o adiciona ao container
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
            console.log('Carrossel criado para categoria:', category.title);
        });
    }
});
