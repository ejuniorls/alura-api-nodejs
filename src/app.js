import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (error) => {
    console.error("erro de conexao: ", error);
});

conexao.once("open", () => {
    console.log("conectado com o banco");
});

const app = express();

routes(app);

export default app;