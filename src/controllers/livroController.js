import livro from "../models/Livro.js";

class LivroController {

    // Get all books
    static async getBooks(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisoção` })
        }
    }

    // Get a single book by ID
    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }
        catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisoção do livro` })
        }
    }

    // Create a new book
    static async createBook(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao cadastrar o livro` });
        }
    }

    // Update a book by ID
    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "atualizado com sucesso" });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao atualizar o livro` });
        }
    }

    // Delete a book by ID
    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "deletado com sucesso" });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao deletar o livro` });
        }
    }

};

export default LivroController;