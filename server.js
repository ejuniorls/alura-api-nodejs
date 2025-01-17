import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso de NodeJS",
    "/livros": "entrei na rota livros",
    "/autores": "entrei na rota autores",
};

app.listen(PORT, () => {
    console.log("servidor escutando");
});