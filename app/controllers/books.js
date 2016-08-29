'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Book = models.book;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Book.find()
    .then(books => res.json({ books }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Book.findById(req.params.id)
    .then(book => book ? res.json({ book }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
<<<<<<< eac85e122fc42bed83e99f120328bc4a8f8e7637
  let book = Object.assign({ _owner: req.currentUser._id }, req.body.book);
=======
  let book = Object.assign(req.body.book, {
    _owner: req.currentUser._id,
  });
>>>>>>> GET and POST actions in place
  Book.create(book)
    .then(book => res.json({ book }))
    .catch(err => next(err));
};

<<<<<<< eac85e122fc42bed83e99f120328bc4a8f8e7637
const update = (req, res, next) => {
  let bookByUser = {_id: req.params.id, _owner: req.currentUser._id};
  Book.findOneAndUpdate(bookByUser, req.body.book)
    .then(book => {
      if (!book) {
        return next();
      }

      return book.update(req.body.book)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let bookByUser = {_id: req.params.id, _owner: req.currentUser._id};
  Book.findOneAndRemove(bookByUser)
    .then(book => {
      if (!book) {
        return next();
      }

      return book.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

=======
>>>>>>> GET and POST actions in place
module.exports = controller({
  index,
  show,
  create,
<<<<<<< eac85e122fc42bed83e99f120328bc4a8f8e7637
  update,
  destroy,
=======
>>>>>>> GET and POST actions in place
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
