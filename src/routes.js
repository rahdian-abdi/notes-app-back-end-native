/* eslint-disable linebreak-style */
const {
  // eslint-disable-next-line max-len
  addNotesHandler, getAllNotesHandler, getNoteByIdHandle, editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandle,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
