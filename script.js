// Galeria de imagens em destaque
const gallery = [
  {
    id: 1,
    title: "Luzes do Horizonte Urbano",
    tag: "Fotografia Urbana",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    description: "Captura noturna de uma metrópole vibrante, destacando o contraste entre a arquitetura moderna e as luzes da cidade.",
    likes: 12
  },
  {
    id: 2,
    title: "O Despertar da Natureza",
    tag: "Paisagem",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    description: "Manhã de neblina nas montanhas revelando a serenidade das florestas intocadas ao amanhecer.",
    likes: 24
  },
  {
    id: 3,
    title: "Minimalismo Arquitetônico",
    tag: "Design",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    description: "Linhas limpas, sombras profundas e formas geométricas que transformam a estrutura moderna em uma obra de arte.",
    likes: 18
  }
];

// Renderiza a galeria visual no container
function renderGallery() {
  const container = document.querySelector('#posts-container');
  if (!container) return;

  container.innerHTML = '';

  gallery.forEach((item) => {
    const article = document.createElement('article');
    
    article.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="post-cover" />
      <div class="card-content">
        <span class="category-badge">${item.tag}</span>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="card-actions">
          <button class="like-btn" onclick="addLike(${item.id})">
            ❤️ <span id="likes-${item.id}">${item.likes}</span>
          </button>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

// Incrementa as curtidas
function addLike(id) {
  const item = gallery.find(g => g.id === id);
  if (item) {
    item.likes += 1;
    const likeElement = document.getElementById(`likes-${id}`);
    if (likeElement) {
      likeElement.textContent = item.likes;
    }
  }
}

// Inicializa o script
document.addEventListener('DOMContentLoaded', renderGallery);
