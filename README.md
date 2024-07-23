# Sobre o Projeto

O objetivo deste projeto é criar uma landing page simples do Homem-Aranha.

## Seções do Projeto

- **Início**
  - Contém um hero.
  - Um botão de assistir.
  - Uma pequena sinopse sobre o filme em destaque.
- **Filmes**
  - Contém os filmes do Homem-Aranha categorizados por ator:
    - Tobey Maguire
    - Andrew Garfield
    - Tom Holland
  - Em cada filme, pode-se optar por:
    - Assistir
    - Adicionar à minha lista
- **Minha Lista**
  - Contém os filmes adicionados pelo usuário.
  - O botão de play para assistir.
  - O botão com o símbolo de lixeira para excluir o respectivo filme de "Minha Lista".

## Responsividade

O projeto funciona bem em notebooks e smartphones.

## Para Executar o Projeto

Algumas tarefas foram automatizadas através do Gulp. Siga os passos a seguir:

1. Clone o repositório:
    ```bash
    git clone https://github.com/FabioMedeiros1000/filmeflix-homem-aranha/tree/main
    ```

2. Certifique-se de ter o Node.js instalado em sua máquina.

3. Execute `npm install` para instalar todas as dependências:
    ```bash
    npm install
    ```

4. Execute `npm run dist` para gerar a versão de produção:
    ```bash
    npm run dist
    ```

5. Execute `npm run watch` para editar o projeto e ter o Gulp acompanhando as mudanças efetuadas no código, carregando automaticamente no browser:
    ```bash
    npm run watch
    ```

### Notas

Os botões de assistir não carregam filme algum. Apenas foram colocados para compor o layout.

## Link do Site

[Landing page do Homem-Aranha](https://filmeflix-homem-aranha.vercel.app/)
