# Acessibilidade para Todos

## Visão geral

Este projeto desenvolve um site institucional com um tema de inclusão digital e um painel de acessibilidade integrado. O objetivo principal é demonstrar como ajustes simples de interface podem melhorar a leitura, a navegação e a compreensão de conteúdos em páginas web.

A estrutura foi construída em HTML, CSS e JavaScript, sem dependências externas de bibliotecas, para facilitar a leitura, organização e manutenção do código.

## Objetivo da atividade

A atividade pede a criação de:

- um painel de acessibilidade com 8 recursos;
- um site temático de exemplo chamado “Acessibilidade para Todos”;
- documentação técnica que explique desenvolvimento, escolhas e integração.

## 8 recursos escolhidos e justificativas

1. Ajuste de tamanho da fonte
   - Permite ampliar ou reduzir a leitura para quem precisa de maior conforto visual.
   - Ajuda em casos de baixa visão e leitura prolongada.

2. Espaçamento entre linhas
   - Melhora a legibilidade e reduz o cansaço visual em textos longos.
   - Aumenta a compreensão de blocos de texto em layouts densos.

3. Espaçamento entre letras
   - Favorece usuários com dificuldade de leitura e processamento visual.
   - Ajuda especialmente em textos extensos e em interfaces com informações muitas vezes agrupadas.

4. Contraste alto
   - Aumenta a distinção entre elementos e fundo, favorecendo leitura em interfaces com pouca luminosidade ou poucos contrastes.

5. Modo escuro
   - Reduz o brilho excessivo da tela e oferece uma alternativa visual mais confortável para diferentes contextos.

6. Foco visível
   - Torna a navegação por teclado mais acessível, destacando elementos em foco.
   - É uma medida essencial para acessibilidade digital e interação por teclado.

7. Sem animação
   - Reduz distrações visuais e melhora a experiência de quem sente desconforto com movimentos rápidos ou excesso de estímulos.
   - Também favorece a leitura mais tranquila.

8. Cursor ampliado
   - Ajuda usuários com dificuldades motoras a localizar melhor o cursor e a interagir com os elementos da interface.

Essas escolhas foram baseadas em boas práticas de acessibilidade web, incluindo princípios de legibilidade, contraste, navegação por teclado e adaptação da interface ao perfil do usuário.

## Estrutura do projeto

```text
PROJETO.T/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/   (opcional, se necessário no futuro)
```

## Desenvolvimento passo a passo

### 1. Estrutura HTML
O arquivo `index.html` foi criado com:

- cabeçalho com marca e navegação;
- hero section para apresentação do tema;
- blocos de conteúdo institucional;
- painel lateral de acessibilidade;
- área de FAQ e rodapé.

Os elementos foram organizados com semântica correta, usando `header`, `main`, `section`, `aside`, `footer`, `nav` e `details`, contribuindo para melhor leitura por tecnologias assistivas.

### 2. Estilização com CSS
O arquivo `styles.css` define a identidade visual do site e também os ajustes acessíveis. Ele inclui:

- variáveis CSS para cores, fontes e ajustes dinâmicos;
- estilos do layout principal;
- painel flutuante responsivo;
- modos de contraste e escuro;
- remoção de animação;
- destaque de foco e cursor ampliado.

As variáveis foram fundamentais para preservar o código organizado e facilitar a alteração dinâmica pelo JavaScript.

### 3. Lógica com JavaScript
O arquivo `script.js` gerencia:

- abertura e fechamento do painel;
- atualização de valores conforme o usuário interage;
- aplicação de variáveis CSS em tempo real;
- alternância de classes no `body` para modos de visualização diferenciados;
- reset dos ajustes para valores padrão.

### 4. Integração do painel no site
O painel foi posicionado de forma fixa na lateral direita da página e mantido acessível por teclado. A integração foi feita de modo que ele alterasse a experiência visual em tempo real sem quebrar o fluxo da navegação e a disposição do conteúdo.

## Escolhas técnicas

- O uso de `aria-label` e `aria-controls` ajuda a acessibilidade por leitores de tela.
- O `focus-visible` foi reforçado para garantir melhor navegação com teclado.
- As classes aplicadas ao `body` permitem alternar entre temas e condições de leitura sem precisar recarregar a página.
- O código foi organizado em funções pequenas e reutilizáveis para facilitar manutenção.

## Testes realizados

Os testes básicos realizados incluem:

- verificação da abertura e fechamento do painel;
- ajuste da fonte para valores menores e maiores;
- validação do contraste alto e modo escuro;
- execução do foco por teclado em links e botões;
- confirmação de responsividade em telas menores;
- teste de reset do painel para valores padrão.

## Como executar

1. Abra a pasta do projeto em um editor de código.
2. Inicie um servidor local, por exemplo:

```bash
python -m http.server 8000
```

3. Acesse no navegador:

```text
http://localhost:8000
```

## Considerações finais

O projeto demonstra como a acessibilidade pode ser tratada como parte do design e da experiência do usuário, e não como um elemento isolado. Com ajustes simples e bem planejados, um site pode se tornar mais claro, inclusivo e confortável para públicos diversos.
