exports.getBooks = (req, res) => {
    res.render('books', { books: [{ id: 1, title: 'Book_1', publishingYear: 2020, authorId: 1 }] });
  };