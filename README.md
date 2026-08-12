# 📸 Galeria de Destaques Visuais

Projeto focado em criar um feed de fotografia e arte utilizando **CSS Flexbox**, destacando cards em formato horizontal que ocupam a largura total da página.

---

## 🌟 Recursos

* 🖼️ Imagens de alta qualidade carregadas dinamicamente.
* 📐 Layout responsivo baseado em **Flexbox**.
* ❤️ Sistema interativo de curtidas via **JavaScript**.

---

## 🛠️ Tecnologias e Regras Aplicadas

1. **`flex-direction: row;`** no seletor `article`: Garante a disposição dos elementos internos (imagem, badge, textos e botão) lado a lado em linha.
2. **`flex: 0 0 100%;`**: Faz com que cada artigo expanda e ocupe toda a largura do container principal.
3. **`align-self`**: Utilizado na imagem (`flex-start`), na badge (`flex-start`) e no botão de curtir (`flex-end`) para quebrar o alinhamento padrão e criar uma composição interessante.

---

## 🚀 Como Visualizar

1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/seu-usuario/galeria-interessante.git](https://github.com/seu-usuario/galeria-interessante.git)
