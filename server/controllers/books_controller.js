let books = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { title, author } = req.body;
        books.push({ id, title, author })
        id++;
        res.status (200).send(books)
        console.log(`REQ.BODY`, req.body);
    },
   read: (req, res) => {
       res.status(200).send(books);
   },
   update: (req, res) => {
       const updateID = req.params.id;
       let indexOfBook = books.findIndex(book => book.id == updateID);

       books[indexOfBook] = {
           id: books[indexOfBook].id,
           title: req.body.title || books[indexOfBook].title,
           author: req.body.author || books[indexOfBook].author
       };

       res.status(200).send(books);
   },
   delete: (req, res) => {
       const deleteID = req.params.id;
       let indexOfBook = books.findIndex(book => book.id == deleteID);
       books.splice(indexOfBook, 1)
       res.status(200).send(books)
   }
}