import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.getBooks);
routes.get("/livros/:id", LivroController.getBookById);
routes.post("/livros", LivroController.createBook);
routes.put("/livros/:id", LivroController.updateBook);
routes.delete("/livros/:id", LivroController.deleteBook);

export default routes;