#  Executar projecto front-end 

Observacao : O projecto do front end esta na pasta front-end 

- cd front-end 
### Rodar a aplicação

- para rodar a aplicação: `yarn start` ou `npm run start`
- a aplicação estará disponível no endereço: `http://localhost:4200`.

### Rodar os testes

- para rodar os testes unitários: `yarn test` ou  `npm run test`.
- para ver a cobertura dos testes unitários: `yarn test:cov` ou `npm test:cov`.


#  Executar projecto back-end 

Observacao : O projecto do front end esta na pasta back-end 

- cd back-end 
### Subir o banco
- suba o banco de dados com docker: `docker-compose up -d`.

_(se você não estiver usando o docker, é necessário criar o banco manualmente)_.

- rode as migrations: `yarn typeorm migration:run`.

### Rodar a aplicação

- para rodar a aplicação: `yarn start`.
- para rodar a aplicação em modo watch: `yarn start:dev`.
- a aplicação estará disponível no endereço: `http://localhost:3000`.

### Rodar os testes

- para rodar os testes unitários: `yarn test`.
- para ver a cobertura dos testes unitários: `yarn test:cov`.
