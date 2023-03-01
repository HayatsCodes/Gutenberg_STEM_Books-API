const { getAllBooks, getBookById, getBookByOrderId } = require('../../models/books.model');

async function httpGetAllBooks(req, res) {
    console.log('getting books...')
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const books = await getAllBooks(skip, limit);
    return res.status(200).json(books);
}

async function httpGetBook(req, res) {
    const id = req.params.id
    
    const book = await getBookByOrderId(id);
    if(!book) {
        return res.status(400)
    }
    if (req.query.order_id) {
        
    }
}

module.exports = {
    httpGetAllBooks,
    httpGetBook,
}