const http = require("http");
const { URL } = require("url");

const PORT = 3000;

let nextId = 4;

let tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: true },
  { id: 2, titulo: "Praticar API REST", concluida: false },
  { id: 3, titulo: "Subir projeto no GitHub", concluida: false }
];

function enviarJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });

  response.end(JSON.stringify(data, null, 2));
}

function coletarBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("JSON inválido."));
      }
    });

    request.on("error", () => {
      reject(new Error("Erro ao ler a requisição."));
    });
  });
}

function extrairId(pathname) {
  const partes = pathname.split("/").filter(Boolean);
  const id = Number(partes[1]);

  return Number.isInteger(id) ? id : null;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const { pathname } = url;
  const { method } = request;

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (pathname === "/") {
    enviarJson(response, 200, {
      mensagem: "API de tarefas no ar.",
      rotas: [
        "GET /tarefas",
        "GET /tarefas/:id",
        "POST /tarefas",
        "PUT /tarefas/:id",
        "DELETE /tarefas/:id"
      ]
    });
    return;
  }

  if (pathname === "/tarefas" && method === "GET") {
    enviarJson(response, 200, tarefas);
    return;
  }

  if (pathname === "/tarefas" && method === "POST") {
    try {
      const body = await coletarBody(request);

      if (!body.titulo || typeof body.titulo !== "string") {
        enviarJson(response, 400, {
          erro: "O campo 'titulo' é obrigatório e deve ser um texto."
        });
        return;
      }

      const novaTarefa = {
        id: nextId++,
        titulo: body.titulo,
        concluida: Boolean(body.concluida)
      };

      tarefas.push(novaTarefa);
      enviarJson(response, 201, novaTarefa);
    } catch (error) {
      enviarJson(response, 400, { erro: error.message });
    }

    return;
  }

  if (pathname.startsWith("/tarefas/")) {
    const id = extrairId(pathname);
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id);

    if (!id || indice === -1) {
      enviarJson(response, 404, { erro: "Tarefa não encontrada." });
      return;
    }

    if (method === "GET") {
      enviarJson(response, 200, tarefas[indice]);
      return;
    }

    if (method === "PUT") {
      try {
        const body = await coletarBody(request);

        if (!body.titulo || typeof body.titulo !== "string") {
          enviarJson(response, 400, {
            erro: "O campo 'titulo' é obrigatório e deve ser um texto."
          });
          return;
        }

        tarefas[indice] = {
          id,
          titulo: body.titulo,
          concluida: Boolean(body.concluida)
        };

        enviarJson(response, 200, tarefas[indice]);
      } catch (error) {
        enviarJson(response, 400, { erro: error.message });
      }

      return;
    }

    if (method === "DELETE") {
      const tarefaRemovida = tarefas[indice];
      tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
      enviarJson(response, 200, {
        mensagem: "Tarefa removida com sucesso.",
        tarefa: tarefaRemovida
      });
      return;
    }
  }

  enviarJson(response, 404, { erro: "Rota não encontrada." });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
