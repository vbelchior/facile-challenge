<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://image.shutterstock.com/image-vector/square-grunge-red-challenge-stamp-260nw-644777590.jpg" width="320" alt="Nest Logo" /></a>
</p>

## O que é:

Um desafio da empresa Facile que tem como objetivo captar uma string , criptografar e salvar no banco de dados. É uma aplicação back-end que tratará esse paramêtros através de uma API construida em NodeJs e NestJs.

## Linguagens e libs utilizadas:

```bash
-[TypeScript](https://www.typescriptlang.org/download) página de instalação e documentação da linguagem.;
-[Node.js](https://nodejs.org/) página de instalação e documentação.;
-[NestJs](https://docs.nestjs.com/) - página de instalação e documentação do framework.;
-[node-postgres](https://www.npmjs.com/package/pg) - dependência necessária devido ao banco de dados e tecnologias usadas.;
-[TypeORM](https://typeorm.io) - página de instalação e documentação do ORM. ;
```

## Banco de dados utilizados:

-[PostgreSql](https://www.postgresql.org/) página de instalação e documentação do banco relacional.

scritpt da tabela:

```bash
CREATE TABLE secrets (id SERIAL NOT NULL PRIMARY KEY, name  varchar(250));
```

## Pré-Requisitos para clonar

Requer [Node.js](https://nodejs.org/) previamente instalado.
Requer gereciador de pacotes , eu utilizo [npm](https://docs.npmjs.com/about-npm).

## Instalação

Execute o comando dentro da pasta raiz da aplicação:

```bash
$ npm install
```

## Rodando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run code

```

```



##Contato

- Autor - [Victor Belchior](https://www.linkedin.com/in/victor-belchior-299066149/)


```
