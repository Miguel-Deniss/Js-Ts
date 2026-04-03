# API de Tarefas

API simples feita com Node.js puro, sem bibliotecas externas.

## Como rodar

```bash
npm start
```

Ou:

```bash
node server.js
```

## Rotas

- `GET /`
- `GET /tarefas`
- `GET /tarefas/:id`
- `POST /tarefas`
- `PUT /tarefas/:id`
- `DELETE /tarefas/:id`

## Exemplo de corpo JSON

```json
{
  "titulo": "Aprender API",
  "concluida": false
}
```
