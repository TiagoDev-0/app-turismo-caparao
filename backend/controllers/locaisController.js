
const locaisService = require("../services/locaisService");
async function listarTodos(req, res, categoriaIdRota) {
  const categoriaId =
    typeof categoriaIdRota === "number"
      ? categoriaIdRota
      : req.query.categoria_id;

  console.log("categoriaId final:", categoriaId);

  const locais = await locaisService.listar({ categoriaId });

  console.log("quantidade de locais:", locais.length);

  res.json(locais);
}

async function buscarPorId(req, res) {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ mensagem: "ID inválido" });
  }

  const local = await locaisService.buscarPorId(id);

  if (!local) {
    return res.status(404).json({ mensagem: "Local não encontrado" });
  }

  res.json(local);
}

async function listarCategorias(req, res) {
  const categorias = await locaisService.listarCategorias();
  res.json(categorias);
}

module.exports = { listarTodos, buscarPorId, listarCategorias };
