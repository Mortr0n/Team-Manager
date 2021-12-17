const { response } = require('express');
const Player = require('../models/player.model');

// export all modules instead of one by one
module.exports = {
    // initial test of server and route
    index: (req, res) => {
        res.json({ testMessage: "We're up and working"});
    },
    // Create a player
    createPlayer: (req, res) => {
        Player.create(req.body)
            .then((newPlayer) => res.json(newPlayer))
            .catch((err) => res.status(400).json(err));
    },
    // Return all players
    getAllPlayers: (req, res) => {
        Player.find()
            .then((allPlayers) => {
                console.log(allPlayers);
                res.json(allPlayers);
            })
            .catch((err) => res.status(400).json(err));
    },
    // Find player by ID 
    getOnePlayer: (req, res) => {
        Player.findById({ _id: req.params.id })
            .then((onePlayer) => {
                console.log(onePlayer);
                res.json(onePlayer);
            })
            .catch((err) => res.status(400).json(err));
    },
    // Find player by ID and update using validations
    updateOnePlayer: (req, res) => {
        Player.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true, runValidators:true }
        )
            .then((updatedPlayer) => {
                console.log(updatedPlayer);
                res.json(updatedPlayer);
            })
            .catch((err) => res.status(400).json(err));
    },
    // Find player by ID and delete
    deleteOnePlayer: (req, res) => {
        Player.findByIdAndDelete({ _id: req.params.id })
            .then((deletedPlayer) => {
                console.log(deletedPlayer);
                res.json(deletedPlayer);
            })
            .catch((err) => res.status(400).json(err));
    },

}