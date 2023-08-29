# Projeto ReactJS com Tailwind CSS - README

Este é um guia para entender as tecnologias utilizadas no projeto ReactJS, que foi iniciado com o `create-react-app` e integra o framework de estilo Tailwind CSS. Além disso, para simular uma API durante o desenvolvimento, foram incorporados os pacotes `axios`, `@faker-js/faker` e `json-server`.

## Tecnologias Principais

1. **ReactJS**: O projeto é baseado na biblioteca React, que é amplamente utilizada para construir interfaces de usuário dinâmicas e reativas.

2. **Tailwind CSS**: O Tailwind CSS é um framework de estilo utilitário que permite a criação rápida e flexível de interfaces modernas. Ele promove o uso de classes utilitárias para estilização, o que agiliza o desenvolvimento.

## Pacotes Adicionais

1. **@reduxjs/toolkit**: O Redux Toolkit é uma biblioteca que simplifica o gerenciamento de estado em aplicações React. Ele fornece abstrações convenientes para a configuração do Redux, reduzindo a quantidade de código boilerplate.

2. **@faker-js/faker**: O pacote Faker é usado para gerar dados falsos, como nomes, endereços e informações de contato. Isso é especialmente útil durante o desenvolvimento, quando dados reais podem não estar disponíveis.

3. **axios**: O Axios é um cliente HTTP baseado em Promises que facilita a realização de requisições HTTP. Ele é usado neste projeto para fazer solicitações à API simulada.

4. **json-server**: O JSON Server é uma biblioteca que permite criar rapidamente uma API REST falsa com base em um arquivo JSON. Isso é útil para simular endpoints de API durante o desenvolvimento, antes que a API real esteja disponível.

## Como Executar o Projeto

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto e execute `npm install` ou `yarn` para instalar as dependências.
3. Utilize o comando `npm run start` ou `yarn start` para iniciar o servidor de desenvolvimento.
4. Abra seu navegador e acesse a URL exibida no terminal para visualizar o projeto.

## Simulando a API

Durante o desenvolvimento, uma API falsa pode ser iniciada com o seguinte comando:

`npm run start:server"` ou `yarn start:server`
