const express = require("express");
const router = express.Router();

const { listarTodos, buscarPorId, listarCategorias } = require("../controllers/locaisController");
const CATEGORIAS = require("../config/categorias");



router.get("/categorias", listarCategorias);


router.get("/", listarTodos);

console.log("Categorias carregadas:", CATEGORIAS);
Object.entries(CATEGORIAS).forEach(([nomeRota, categoriaId]) => {
  router.get(`/${nomeRota}`, (req, res) => {
    console.log("ENTROU NA ROTA:", nomeRota);
    console.log("Categoria ID:", categoriaId);
    req.query.categoria_id = categoriaId;

    console.log("Rota:", nomeRota);
  console.log("Categoria ID:", categoriaId);
    listarTodos(req, res);
  });
});


router.get("/:id", buscarPorId);

module.exports = router;
