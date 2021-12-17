const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    playerName: {
        type: String,
        required: [true, "You must enter a player name"],
        minlength: [2, "Player name must be a minimum of 2 characters"],
    },

    preferredPosition: {
        type: String,
    },

    game1: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
    },

    game2: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
    },

    game3: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
    },
}, { timestamps: true});

module.exports = mongoose.model("Player", PlayerSchema);