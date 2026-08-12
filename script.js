// Dados simulados de postagens
const posts = [
  {
    title: "Primeira Postagem Horizontal",
    image: "https://via.placeholder.com/150",
    text: "Este é o texto da primeira postagem. Com o novo layout, os elementos ficam dispostos em linha e ocupam toda a largura do container.",
    likes: 0
  },
  {
    title: "Segunda Postagem em Destaque",
    image: "https://via.placeholder.com/150",
    text: "Aqui temos outra postagem mostrando como a propriedade flex-direction: row organiza a imagem, título e texto de forma limpa.",
    likes: 0
  }
];

// Função para renderizar os posts no DOM
function renderPosts() {
  const container = document.querySelector('#posts-container');
  if (!container) return;

  container.innerHTML = '';

  posts.forEach((post, index) => {
    const article = document.createElement('article');
    
    article.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <div class="card-content">
        <h2>${post.title}</h2>
        <p>${post.text}</p>
        <button class="like-btn" onclick="likePost(${index})">
          ❤️ Curtir (<span id="like-count-${index}">${post.likes}</span>)
        </button>
      </div>
    `;

    container.appendChild(article);
  });
}

// Função para incrementar curtidas
function likePost(index) {
  posts[index].likes += 1;
  const likeCountElement = document.getElementById(`like-count-${index}`);
  if (likeCountElement) {
    likeCountElement.textContent = posts[index].likes;
  }
}

// Inicializa a renderização quando o documento carregar
document.addEventListener('DOMContentLoaded', renderPosts);
