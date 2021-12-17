const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.get('/api', PlayerController.index);
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/api/player', PlayerController.getAllPlayers);
    app.get('/api/player/:id', PlayerController.getOnePlayer);
    app.put('/api/player/:id', PlayerController.updateOnePlayer);
    app.delete('/api/player/:id', PlayerController.deleteOnePlayer);
}