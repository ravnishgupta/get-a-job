/*const path = require('path');

const router = require('express').Router();

    router.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    router.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    router.get('/api/notes', (req, res) => {
        res.json(notes);
    });

module.exports=router;*/
const path = require('path');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // If no matching route is found default to index
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};